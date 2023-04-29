import fs  from "fs";
import { createHash } from 'node:crypto'
import sharp from "sharp";
import { conditionals_sorter } from "./conditionals_sorter.js";
// Below is an example of importing a layers config js file
import { Bear_Clan } from "./layer_configs/Bear_Clan.js";
import { Butterfly_Clan } from "./layer_configs/Butterfly_Clan.js";
import { Dolphin_Clan } from "./layer_configs/Dolphin_Clan.js";
import { Eagle_Clan } from "./layer_configs/Eagle_Clan.js";
import { Lion_Clan } from "./layer_configs/Lion_Clan.js";
import { Mole_Clan } from "./layer_configs/Mole_Clan.js";
import { Raven_Clan } from "./layer_configs/Raven_Clan.js";
import { Snake_Clan } from "./layer_configs/Snake_Clan.js";
import { Spider_Clan } from "./layer_configs/Spider_Clan.js";
import { Turtle_Clan } from "./layer_configs/Turtle_Clan.js";
import { Windhorse_Clan } from "./layer_configs/Windhorse_Clan.js";
import { Wolf_Clan } from "./layer_configs/Wolf_Clan.js";
import { Human_Man } from "./layer_configs/Human_Man.js";
import { Human_Woman } from "./layer_configs/Human_Woman.js";
import { Air_Shadow_Walker } from "./layer_configs/Air_Shadow_Walker.js";
import { Earth_Shadow_Walker } from "./layer_configs/Earth_Shadow_Walker.js";
import { Fire_Shadow_Walker } from "./layer_configs/Fire_Shadow_Walker.js";
import { Water_Shadow_Walker } from "./layer_configs/Water_Shadow_Walker.js";
import { Skydancer } from "./layer_configs/Skydancer.js"
import { configLayersExample } from  "./layer_configs/configLayersExample.js";
import { MIB } from "./layer_configs/MIB.js";
import { Empyrean } from "./layer_configs/Empyrean.js";

const config = await Human_Woman();

const generateLayers = async ( config ) => {
	// console.log("Selecting Layers")
	const attributes = [];
	const combineLayers = [];
	const checkLayers = [];
	let layer = 0;
	let exculded;
	while(config.layers.length > layer ){
		let layerFolder;
		let randomLayer;
		let chosenLayer;
		let rarity;
		let layerWeight;
		let totalWeight;
		layerFolder = fs.readdirSync(config.root_folder+config.collection+config.series+config.layers[layer].path);
		// console.log("layerFolder", layerFolder)
		randomLayer = layerFolder[Math.floor(Math.random() * layerFolder.length)];
		chosenLayer = randomLayer.split(/[#.]+/)[0];
		layerWeight = randomLayer.split(/[#.]+/)[1];
		rarity = await checkRarity(layerWeight);
		if( rarity === true ) await checkLayers.push(chosenLayer);
		if( rarity === true ) await attributes.push({ "trait_type": config.layers[layer].options.displayName, "value": chosenLayer });
		if( rarity === true ) await combineLayers.push(config.root_folder+config.collection+config.series+config.layers[layer].path+"/"+randomLayer);
		if( rarity === true ) await layer++;
	};	
	return({
		...config,
		attributes,
		checkLayers,
		combineLayers
	});
};

/*
const countTotalWeights = async ( layerFolder ) => {
	let totalWeight = 0;
	await Promise.all(
		await layerFolder.map(( layer ) => {
			let weight = layer.split(/[#.]+/)[1];
			if(layer.split(/[#.]+/)[1] === "png") weight = 1;
			totalWeight += +weight;
		})
	);
	return(totalWeight);
};
const checkRarity = async ( attributeWeight, totalWeight ) => {
	if( attributeWeight === "png" ) attributeWeight = 1;
	// let random = Math.floor(Math.random() * totalWeight);
	let random = Math.floor(Math.random() * 100);	
	random -= attributeWeight;
	// console.log("random", random);
	return(random < 0);
};
*/

const checkRarity = async ( attributeWeight ) => { 
	let random = Math.floor(Math.random() * 100);
	return(attributeWeight < random);
};

const combineLayers = async ( layers, finished ) => {
	const inputLayers = [...layers.combineLayers].map(file => ({ input: file }))
	await sharp(inputLayers[0].input).composite(inputLayers).png({compressionLevel: 9, effort: 1}).resize(3000, 3000).toFile("./build/"+layers.collection+layers.series+"images/"+finished+".png");
	return;
};

const checkForBuildDir = async ( config ) => {
	if (!fs.existsSync("./build/")){
    	fs.mkdirSync("./build/")
	};
	if (!fs.existsSync("./build/"+config.collection)){
    	fs.mkdirSync("./build/"+config.collection);
	};
	if (!fs.existsSync("./build/"+config.collection+config.series)){
    	fs.mkdirSync("./build/"+config.collection+config.series);
	};
	if (!fs.existsSync("./build/"+config.collection+config.series+"images/")){
    	fs.mkdirSync("./build/"+config.collection+config.series+"images/");
	};
	if (!fs.existsSync("./build/"+config.collection+config.series+"json/")){
    	fs.mkdirSync("./build/"+config.collection+config.series+"json/");
	};
	if (!fs.existsSync("./build/"+config.collection+config.series+"generated/")){
    	fs.mkdirSync("./build/"+config.collection+config.series+"generated/");
	};
	if (!fs.existsSync("./build/"+config.collection+config.series+"generated/generated.json")){
    const generated = [];
    	fs.writeFileSync("./build/"+config.collection+config.series+"generated/generated.json", JSON.stringify(generated));
	};	
};

const checkDuplicate = async ( selectedLayers ) => {
	const dna = createHash('sha256').update(selectedLayers.checkLayers.toString()).digest('hex')
	console.log("dna", dna);
	const generatedFile = fs.readFileSync("./build/"+selectedLayers.collection+selectedLayers.series+"generated/generated.json");
	const generated = JSON.parse(generatedFile);
	const exists = generated.includes(dna);
	if( exists === false ) await generated.push(dna);
	if( exists === false ) fs.writeFileSync("./build/"+selectedLayers.collection+selectedLayers.series+"generated/generated.json", JSON.stringify(generated));
	console.log("exists", exists);
	return(exists);
};

const generateMetadata = async ( layers, finished ) => {
	let padding = 5;
	const zeroPad = (num, places) => String(num).padStart(places, '0')
	let paddedNum =  await zeroPad(finished, padding)
	const newMetadata = {
		"name": layers.metadata.name+paddedNum,
	  "description": layers.metadata.description,
	  "image":  "ipfs://CID/"+finished+".png",
	  "edition": layers.metadata.edition,
	  "season": layers.metadata.season,
	  "attributes": [
	  	...layers.attributes
	  ],
	  "Gather_the_144K": "ipfs://QmdiDnZLV9VX4kuVU2RMhHLnJ5A6S9fqWVFB1db6uCttTZ",
	  "CC-BY": "ipfs://QmR2WgquiPehwhP2JxC7snDABy2MEibCh1MxhQvEoSA8VB",
	  "mandala-qr-code": "ipfs://QmbEsnmBxW455sXhHpqcahGshY8Fbeor3hMhLVJeApQDGp",
	  "Cryptonaut-banner": "ipfs://QmS5gYGAyMPucEFBbtxceD4BCfAx6PiU9YpvDvVtp6QibU",
	  "Cryptonaut-chart": "ipfs://QmVGuoxbqdrSZKh2BobqZYfqYFqH76UHHQPKq7Y5oWApHm",
	  "welcome-logo": "ipfs://QmVk9MaDEcoXWTnPubNHgUq9caFknL9X1UjgRt2t1AZeva"	  
	}
	console.log("newMetadata", newMetadata)
	fs.writeFileSync("./build/"+layers.collection+layers.series+"json/"+finished+".json", JSON.stringify(newMetadata, null, 2));
	return;
};

const run = async () => {
	console.log("config", config.conditionals_file);
	let amount = config.amount + config.start;
	console.log("amount", +amount);
	let finished = config.start;
	console.log("finished", +finished);
	await checkForBuildDir(config);
	let tries = 0;
	let mostTries = 0;
	while( +finished < +amount ){
		let exculded;
		let checkDuplicateRes;
		const selectedLayers = await generateLayers(config);
		exculded = await conditionals_sorter(selectedLayers , config.conditionals_file);
		if( checkDuplicateRes === false && exculded === false ) console.log("\n###############################################################\n");
		if( exculded === false ) checkDuplicateRes = await checkDuplicate(selectedLayers);
		if( checkDuplicateRes === false && exculded === false ) await combineLayers(selectedLayers, finished);
		if( checkDuplicateRes === false && exculded === false ) await generateMetadata(selectedLayers, finished);
		if( checkDuplicateRes === false && exculded === false ) console.log("created: " + config.series + " | " + finished + " of: " + amount);
		if( checkDuplicateRes === false && exculded === false )	console.log("tries", tries);
		if( checkDuplicateRes === false && exculded === false )	console.log("most tries", mostTries);
		if( checkDuplicateRes === false && exculded === false ) finished++;
		if( checkDuplicateRes === false && exculded === false ) console.log("\n###############################################################\n");
		if( tries > mostTries ) mostTries = tries;
		if( exculded === true ) tries++
		if( exculded === false ) tries = 0;
	};
	return;
};

run();