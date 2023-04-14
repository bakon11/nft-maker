import fs  from "fs";
import { createHash } from 'node:crypto'
import sharp from "sharp";
import { getConfigLayersHuman_Black_Man } from "./configLayers.js";
import { checkConditionalsHumans } from "./conditionals.js";

const generateLayers = async ( config ) => {
	// console.log("selectRandomLayer config", config.layers.length);
	// console.log("select Layer config", config);
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
		randomLayer = layerFolder[Math.floor(Math.random() * layerFolder.length)];
		chosenLayer = randomLayer.split(/[#.]+/)[0]
		layerWeight = randomLayer.split(/[#.]+/)[1]
		// console.log("layerWeight", layerWeight)
		await checkLayers.push();
		// console.log("checkLayers", checkLayers);
		exculded = await checkConditionalsHumans(chosenLayer, checkLayers);
		// console.log("exculded", exculded)
		totalWeight = config.layers[layer].totalWeight;
		rarity = await checkRarity(layerWeight, totalWeight);
		// console.log("rarity", rarity);
		if( exculded === undefined && rarity === true ) await attributes.push({ "trait_type": config.layers[layer].options.displayName, "value": chosenLayer });
		if( exculded === undefined && rarity === true ) await combineLayers.push(config.root_folder+config.collection+config.series+config.layers[layer].path+"/"+randomLayer);
		if( exculded === undefined && rarity === true ) await layer++;
		// console.log("randomLayer", layer.options.displayName+ ":" +randomLayer);
		// console.log("layerFolder", layerFolder.length)
	};	
	return({
		...config,
		attributes,
		combineLayers
	});
};

const combineLayers = async ( layers, finished ) => {
	// console.log("combineLayers", layers.combineLayers);
	const inputLayers = [...layers.combineLayers].map(file => ({ input: file }))
	await sharp(inputLayers[0].input).composite(inputLayers).png({compressionLevel: 9, effort: 1}).resize(3000, 3000).toFile("./build/"+layers.collection+layers.series+"images/"+finished+".png");
	return;
};

const checkForBuildDir = async ( config ) => {
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
	// console.log(selectedLayers)
	const dna = createHash('sha256').update(selectedLayers.combineLayers.toString()).digest('hex')
	console.log("dna", dna);
	const generatedFile = fs.readFileSync("./build/"+selectedLayers.collection+selectedLayers.series+"generated/generated.json");
	const generated = JSON.parse(generatedFile);
	const exists = generated.includes(dna);
	if( exists === false ) await generated.push(dna);
	if( exists === false ) fs.writeFileSync("./build/"+selectedLayers.collection+selectedLayers.series+"generated/generated.json", JSON.stringify(generated));
	console.log("exists", exists);
	return(exists);
};

const checkRarity = async ( attributeWeight, totalWeight ) => {
	// console.log("attributeWeight", attributeWeight);
	if(!isNaN(attributeWeight)) attributeWeight = 1;
	let random = Math.floor(Math.random() * totalWeight);
	random -= attributeWeight;
	return(random < 0);
};

const generateMetadata = async ( layers, finished ) => {
	console.log("generateMetadata", layers.metadata.name);
	let padding = 5;
	const zeroPad = (num, places) => String(num).padStart(places, '0')
	let paddedNum =  await zeroPad(finished, padding)
	const newMetadata = {
		"name": layers.metadata.name+paddedNum,
	  "description": layers.metadata.description,
	  "image": layers.metadata.image,
	  "edition": layers.metadata.edition,
	  "season": layers.metadata.season,
	  "attributes": [
	  	...layers.attributes
	  ],
	  "Gather_the_144K": "ipfs://QmdiDnZLV9VX4kuVU2RMhHLnJ5A6S9fqWVFB1db6uCttTZ",
	  "CC-BY": "ipfs://QmR2WgquiPehwhP2JxC7snDABy2MEibCh1MxhQvEoSA8VB",
	  "mandala-qr-code": "ipfs://QmbEsnmBxW455sXhHpqcahGshY8Fbeor3hMhLVJeApQDGp",
	  "Regens-banner": "ipfs://QmbbgiihsvKffpboUUM9fnhaovFetozchNXWudcCAQq1iR",
	  "Regens-chart": "ipfs://QmNdtjorxmVPuKBhpWy1DFABp831sZUgcfxav5WEeG8d6E",
	  "welcome-logo": "ipfs://QmVk9MaDEcoXWTnPubNHgUq9caFknL9X1UjgRt2t1AZeva"	  
	}
	console.log("newMetadata", newMetadata)
	fs.writeFileSync("./build/"+layers.collection+layers.series+"json/"+finished+".json", JSON.stringify(newMetadata, null, 2));
	return;
};

const run = async () => {
	const config = await getConfigLayersHuman_Black_Man();
	console.log("config", config);
	let finished = config.start;
	let amount = config.amount + config.start;
	await checkForBuildDir(config);
	while( amount > finished ){
		const selectedLayers = await generateLayers(config);
		// console.log("selectedLayers", selectedLayers);
		const checkDuplicateRes = await checkDuplicate(selectedLayers)
		if( checkDuplicateRes === false ) await combineLayers(selectedLayers, finished);
		if( checkDuplicateRes === false ) await generateMetadata(selectedLayers, finished);
		if( checkDuplicateRes === false ) console.log("created: " + config.series + " | " + finished + " of: " + amount + "\n###############################################################\n");
		if( checkDuplicateRes === false ) finished++;
	};
	return;
};

run();