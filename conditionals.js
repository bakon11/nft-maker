export const checkConditionalsHumans = async ( selectedLayers ) => {
	let check;
	if ( 
		await selectedLayers.checkLayers.includes("Demon_Cloak_Collar")
	){
		check = await selectedLayers.checkLayers.includes("Demon_Cloak");
		if(check === true) return(false);
		if(check === false) return(true);
	};

	if ( 
		await selectedLayers.checkLayers.includes("Necklace") === true
	){
		let excluded = [ "Aristocrat", "Bomber_Jacket", "Doctor_Coat", "Count_Cape", "Leather_Jacket", "Risky_Business", "Street_Racer", "Ranger_Cloak", "Turtle_Neck", "Velvet_Blazer", "Wizard_Robe" ];
		await Promise.all( selectedLayers.checkLayers.map(( layer ) => {
			if( excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "Visko_Helmet") === true || 
		await	selectedLayers.checkLayers.includes( "Visko_Helmet_Long") === true ||
		await	selectedLayers.checkLayers.includes( "Visko_Helmet_Pink" ) === true || 
		await	selectedLayers.checkLayers.includes( "Steam_Phunk" ) === true || 
		await	selectedLayers.checkLayers.includes( "Steam_Phunk_Black_Long_Dreads" ) === true || 
		await	selectedLayers.checkLayers.includes( "Steam_Phunk_Brown_Long_Dreads" ) === true ||
		await	selectedLayers.checkLayers.includes( "Bomber_Cap" ) === true || 
		await	selectedLayers.checkLayers.includes("Bomber_Cap_Long") === true || 
		await	selectedLayers.checkLayers.includes("Bomber_Cap_Black_Long_Dreads") === true || 
		await	selectedLayers.checkLayers.includes( "Vajra_Crown" ) === true || 
		await	selectedLayers.checkLayers.includes("Woodland_Fae") === true || 
		await	selectedLayers.checkLayers.includes("Woodland_Fae_Minoan") === true ||
		await	selectedLayers.checkLayers.includes("Fez") === true
		){
		let excluded = [ "3D_Glasses", "Aviators", "Black_Night_Vision_Goggles", "Cardanos", "Coke_Bottle", "Eye_Patch", "Glass_Eye", "Laser", "Laser_Beams", "Monocle", "Sextant", "Snorkel_and_Goggles", "Spyglass", "X_Ray_Specs" ];
		await Promise.all( selectedLayers.checkLayers.map(( layer ) => {
			if( excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
	await	selectedLayers.checkLayers.includes( "Diving_Bell" ) === true 
	){
		let excluded = [ "Dali", "Fu_Manchu", "Goatee", "Jaw_Beard", "Lumberjack", "Mr_Selleck", "Mutton_Chops", "Pirate", "Strongman", "The_Creep", "The_Wizard" ];
		await Promise.all(  selectedLayers.checkLayers.map(( layer ) => {
			if( excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
	await	selectedLayers.checkLayers.includes( "Mutton_Chops" ) === true 
	){
		let excluded = [ "Afro", "Arrow", "Beehive", "Birthmark", "Black_Long_Dreads", "Bomber_Cap", "Bomber_Cap_Long", "Bomber_Cap_Black_Long_Dreads", "Brown_Long_Dreads", "Buzz_Cut", "Captain", "Captain_Cornrows", "Captain_Minoan", "Chopped", "Cobra_Crown", "Cornrows", 
	    "Cowboy_Hat_Black_Long_Dreads", "Cypher_Punk", "Derby", "Derby_Black_Long_Dreads", "Derby_Long", "Diving_Bell", "Emo", "Fez_Long", "First_Mate", "First_Mate_Long_Dreads", "Flock_of_Seagulls", "Halo", "Headband", "Headband_Long", "Helmet_Head", 
	    "Hopi_Headdress", "Horns", "Jeweled_Crown", "Jeweled_Diadem", "Long", "Long_Black_Hair", "Minoan", "Miss_Antoinette", "Nurse", "Rastafari", "Rastafari_Brown_Long_Dreads", "Rockabilly", "Saiyan", "Shaggy", "Ship_Master", "Short_Dreads", "Steam_Phunk", 
	    "Steam_Phunk_Black_Long_Dreads", "Steam_Phunk_Brown_Long_Dreads", "Superman", "Top_Dreads", "Top_Hat_Long", "Top_Hat_Long_Black_Dreads", "Tricorn", "Vajra_Crown", "Visko_Helmet_Long", "Visko_Helmet_Pink", "Witch_Hat", "Witch_Hat_Black_Long_Dreads", 
	    "Wizard_Cap", "Wizard_Cap_Minoan", "Woodland_Fae", "Woodland_Fae_Minoan", "Woodland_Fae_Black_Long_Dreads", "Mutton_Chops" ];
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "Glass_Eye" ) === true 
	){
		let excluded = [ "Angry", "Bored", "Squinting" ];
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes("Snorkel_and_Goggles") === true || 
		await selectedLayers.checkLayers.includes("Spyglass") === true || 
		await selectedLayers.checkLayers.includes("Sextant") === true || 
		await selectedLayers.checkLayers.includes("Laser_Beams") === true || 
		await selectedLayers.checkLayers.includes("Black_Night_Vision_Goggles") === true 
	){
		let excluded =  [ "Atomic_Pipe", "Cigarette", "Doobie", "Dynamite", "Forked_Tongue", "Mouse_Prey", "Paintbrush", "Pipe", "Pipe_Tornado", "Snorkel", "Diving_Bell", "Snorkel_and_Goggles" ];
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};


	if ( 
		await selectedLayers.checkLayers.includes("Black_Night_Vision_Goggles") === true || 
		await selectedLayers.checkLayers.includes("Snorkel_and_Goggles") === true 
	){
		let excluded = [ "Arrow", "Bicorn", "Bomber_Cap", "Bomber_Cap_Long", "Bomber_Cap_Black_Long_Dreads", "Captain", "Captain_Cornrows", "Captain_Minoan", "Cobra_Crown", "Cowboy_Hat", "Cowboy_Hat_Black_Long_Dreads", "Derby", "Derby_Black_Long_Dreads", "Derby_Long",
			"Diving_Bell", "Fez", "Fez_Long", "First_Mate", "Halo", "Headband", "Headband_Long", "Hopi_Headdress", "Jester", "Jeweled_Crown", "Jeweled_Diadem", "Miss_Antoinette", "Nurse", "Paintbrush", "Raspberry_Beret", "Rastafari", "Rastafari_Brown_Long_Dreads", "Saiyan", 
			"Ship_Master", "Skull_Cap", "Steam_Phunk", "Steam_Phunk_Black_Long_Dreads", "Steam_Phunk_Brown_Long_Dreads", "Technicolor_Horn", "The_Goat", "Top_Hat", "Top_Hat_Long", "Top_Hat_Long_Black_Dreads", "Tricorn", "Vajra_Crown", "Visko_Helmet", 
			"Visko_Helmet_Long", "Visko_Helmet_Pink", "Witch_Hat", "Witch_Hat_Black_Long_Dreads", "Wizard_Cap", "Wizard_Cap_Minoan", "Woodland_Fae", "Woodland_Fae_Minoan", "Woodland_Fae_Black_Long_Dreads" ];
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "Laser_Beams" ) === true 
	){
		let excluded = [ "Bored", "Gazing", "Squinting", "Pipe_Tornado", "Paintbrush" ];
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "X_Ray_Specs" ) === true 
	){
		let excluded = [ "Angry", "Bored", "Squinting" ];
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "Cigarette" ) === true 
	){
		let excluded = [ "Pursed", "Relaxed", "Scowl", "Smile", "Smirk" ];		
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "Dynamite" ) === true 
	){
		let excluded = [ "Grimace", "Relaxed", "Scowl", "Smile", "Smirk", "Snorkel_and_Goggles" ];		
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes( "Paintbrush") === true || 
		await selectedLayers.checkLayers.includes("Mouse_Prey") === true || 
		await selectedLayers.checkLayers.includes("Forked_Tongue") === true || 
		await selectedLayers.checkLayers.includes("Doobie") === true 
	){
		let excluded = ["Grimace", "Pursed", "Relaxed", "Scowl", "Smile"];		
		await Promise.all(  selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes("Snorkel") === true || 
		await selectedLayers.checkLayers.includes("Atomic_Pipe") === true || 
		await selectedLayers.checkLayers.includes("Pipe_Tornado") === true || 
		await selectedLayers.checkLayers.includes("Pipe") === true || 
		await selectedLayers.checkLayers.includes("Dynamite") === true 
	){
		let excluded = [ "Grimace", "Relaxed", "Scowl", "Smile", "Smirk" ];		
		await Promise.all( selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	if ( 
		await selectedLayers.checkLayers.includes("Snorkel") === true || 
		await selectedLayers.checkLayers.includes("Atomic_Pipe") === true || 
		await selectedLayers.checkLayers.includes("Pipe_Tornado") === true || 
		await selectedLayers.checkLayers.includes("Paintbrush") === true
	){
		let excluded = [ "3D_Glasses", "Aviators", "Black_Night_Vision_Goggles", "Cardanos", "Coke_Bottle", "Eye_Patch", "Glass_Eye", "Laser", "Laser_Beams", "Monocle", "Sextant", "Snorkel_and_Goggles", "Spyglass", "X_Ray_Specs"  ];		
		await Promise.all( selectedLayers.checkLayers.map( async ( layer ) => {
			if( await excluded.includes(layer) === true ) return(true);
		}));
	};

	return(false)
};