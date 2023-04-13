
import fs  from "fs";
import sharp from "sharp";
import { getConfigLayers } from "./configLayers.js";
import { checkConditionalsHumans } from "./conditionals.js";

const selectRandomLayer = async ( config ) => {
	// console.log("selectRandomLayer config", config.layers.length);
	// console.log("select Layer config", config);
	const attributes = [];
	const combineLayers = [];
	const checkLayers = [];
	let created = 0;
	let exculded;
	// config.layers.map(( layer ) => {
	while(config.layers.length > created ){
		let layerFolder;
		let randomLayer;
		let chosenLayer;
		let rarity;
		layerFolder = fs.readdirSync(config.root_folder+config.collection+config.series+config.layers[created].path);
		randomLayer = layerFolder[Math.floor(Math.random() * layerFolder.length)];
		chosenLayer = randomLayer.split(/[#.]+/)[0] 
		await checkLayers.push(chosenLayer);
		// console.log("checkLayers", checkLayers);
		exculded = await checkConditionalsHumans(chosenLayer, checkLayers);
		/// console.log("exculded", exculded)
		if(exculded === undefined) await attributes.push({ [config.layers[created].options.displayName]: chosenLayer });
		if(exculded === undefined) await combineLayers.push(config.root_folder+config.collection+config.series+config.layers[created].path+"/"+randomLayer);
		if(exculded === undefined) await created++;
		// console.log("randomLayer", layer.options.displayName+ ":" +randomLayer);
		// console.log("layerFolder", layerFolder[randomLayer])
	};
	// });
	
	return({
		...config,
		attributes,
		combineLayers
	});
};

const combineLayers = async ( layers, finished ) => {
	// console.log("combineLayers", layers.combineLayers);
	const inputLayers = [...layers.combineLayers].map(file => ({ input: file }))
	await sharp(inputLayers[0].input).composite(inputLayers).png({compressionLevel: 9, effort: 1}).resize(3000, 3000).toFile("./build/"+layers.collection+layers.series+finished+".png");
	return;
};

const checkForBuildDir = async ( config ) => {
	if (!fs.existsSync("./build/"+config.collection)){
    fs.mkdirSync("./build/"+config.collection);
	};
	if (!fs.existsSync("./build/"+config.collection+config.series)){
    fs.mkdirSync("./build/"+config.collection+config.series);
	};
};

const checkDuplicate = async (  ) => {

};

const checkRarity = async ( attribute, totalWeight ) => {
	
}

const run = async () => {
	let finished = 0;
	const config = await getConfigLayers();
	// console.log("config", config);
	await checkForBuildDir(config);
	while( config.amount > finished ){
		const selectedLayers = await selectRandomLayer(config);
		console.log("selectedLayers", selectedLayers);
		await combineLayers(selectedLayers, finished);
		console.log("created: " + config.series + " | " + finished + " of: " + config.amount);
		finished++;
	};
	return;
};

run();