import fs  from "fs";

export const checkConditionals = async ( selectedLayers ) => {
	let check = false;
	let run = true;
	if(run === false) return(false);
	check = await Promise.resolve(checkConditionalsFile(selectedLayers));
	return(check);
};

const checkConditionalsFile = async ( selectedLayers ) => {
	let check = true;
	let search;
	let found = [];
	const conditionalsRes = fs.readFileSync("./conditionalsHuman.json");
	const conditionals = await JSON.parse(conditionalsRes);
	const layers = selectedLayers.checkLayers;
	await Promise.all(
		await layers.map( async ( layer ) => {
			search = await conditionals.find(({ included }) => included === layer )
			// if(search !== undefined)console.log("search", search.included );
			// if(search !== undefined)console.log("layers", selectedLayers.checkLayers );
			if(search !== undefined)found.push(search);
		})
	)
	// console.log("total found", found);
	// make a function that takes layers and makes sujre nothing in exluded arrays belongs to it.
	check = await searchExcluded( layers, found );
	// console.log("check",check);
	return(check);
};

const searchExcluded = async (selectedLayers, found ) => {
	let check = false;
	// console.log("layers", selectedLayers);
	// console.log("found", found)
	await Promise.all(
		await found.map( async ( item ) => {
			// console.log("found map", item.excluded);
			// console.log("cuased the exlusion", selectedLayers.includes)
			await selectedLayers.map(( layer ) => {
				let excluded  = item.excluded.includes(layer);
				if( excluded === true ) check = true;
				// console.log("selected layer", item.excluded.includes(layer));
			})
		})
	);
	return(check);
};