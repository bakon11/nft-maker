import fs  from "fs";

export const checkConditionalsHumans = async ( selectedLayers ) => {
	let check = false;
	let run = true;
	if(run === false) return(false);
	if ( 
		await selectedLayers.checkLayers.includes("Demon_Cloak_Collar") === true
	){
		let checkCloak = await selectedLayers.checkLayers.includes("Demon_Cloak");
		if(checkCloak === false) return(true);
	};
	check = await checkConditionalsFile(selectedLayers);
	return(check);
};

const checkConditionalsFile = async ( selectedLayers ) => {
	let check = true;
	const conditionalsRes = fs.readFileSync("./conditionals.json");
	const conditionals = await JSON.parse(conditionalsRes);
	await Promise.all(
		await conditionals.map( async ( condition ) => {
			let checkLayersRes = await selectedLayers.checkLayers.includes(condition.included);
			if ( checkLayersRes  === true ) check = await checkTheStuff(selectedLayers, condition.excluded );
			if ( checkLayersRes  === true ) return(check);
		})
	);
	return(check);
};

const checkTheStuff = async ( selectedLayers, excluded ) => {
	let check = false;
	await Promise.all( await selectedLayers.checkLayers.map( async ( layer ) => {
		if( await excluded.includes(layer) === true ) check = true;
		if( await excluded.includes(layer) === true ) return(check);
	}));
	return(check);
}; 