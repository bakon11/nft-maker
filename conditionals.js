export const checkConditionalsHumans = async ( chosenLayer, chosenLayers ) => {
	// console.log("chosenLayer", chosenLayer);
	//console.log("chosenLayers", chosenLayers);
	let check;
  let excluded;

  // Necklaces:
  const neckExcluded = [ "Aristocrat", "Bomber_Jacket", "Doctor_Coat", "Count_Cape", "Leather_Jacket", "Risky_Business", "Street_Racer", "Ranger_Cloak", "Turtle_Neck", "Velvet_Blazer", "Wizard_Robe" ];
  if(chosenLayer === "Necklace"){
		await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  		// console.log("attr", attr)
		    	if(neckExcluded.includes(attr) === true) check = true;
		  })
		);
		return(check);
	};

	// Hats
	const hats = [ "3D_Glasses", "Aviators", "Black_Night_Vision_Goggles", "Cardanos", "Coke_Bottle", "Eye_Patch", "Glass_Eye", "Laser", "Laser_Beams", "Monocle", "Sextant", "Snorkel_and_Goggles", "Spyglass", "X_Ray_Specs" ];
  if(
  		chosenLayer === "Visko_Helmet" || chosenLayer === "Visko_Helmet_Long" || chosenLayer === "Visko_Helmet_Pink" || chosenLayer === "Steam_Phunk" || chosenLayer === "Steam_Phunk_Black_Long_Dreads" || chosenLayer === "Steam_Phunk_Brown_Long_Dreads" || 
  		chosenLayer === "Bomber_Cap" || chosenLayer === "Bomber_Cap_Long" || chosenLayer === "Bomber_Cap_Black_Long_Dreads" || chosenLayer === "Vajra_Crown" || chosenLayer === "Woodland_Fae" || chosenLayer === "Woodland_Fae_Minoan" || chosenLayer === "Fez" || 
  		chosenLayer === "Fez_Long"
  	){
		await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  		// console.log("attr", attr)
		    	if(hats.includes(attr) === true) check = true;
		  })
		);
		return(check);
	};	


	// Hats contiuned
	const facialHair = [ "Dali", "Fu_Manchu", "Goatee", "Jaw_Beard", "Lumberjack", "Mr_Selleck", "Mutton_Chops", "Pirate", "Strongman", "The_Creep", "The_Wizard" ];
  if(chosenLayer === "Diving_Bell"){
		await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  		// console.log("attr", attr)
		    	if(facialHair.includes(attr) === true) check = true;
		  })
		);
		return(check);
	};	

	//Facial Hair mutton chops
	const hair = [
    "Afro", "Arrow", "Beehive", "Birthmark", "Black_Long_Dreads", "Bomber_Cap", "Bomber_Cap_Long", "Bomber_Cap_Black_Long_Dreads", "Brown_Long_Dreads", "Buzz_Cut", "Captain", "Captain_Cornrows", "Captain_Minoan", "Chopped", "Cobra_Crown", "Cornrows", 
    "Cowboy_Hat_Black_Long_Dreads", "Cypher_Punk", "Derby", "Derby_Black_Long_Dreads", "Derby_Long", "Diving_Bell", "Emo", "Fez_Long", "First_Mate", "First_Mate_Long_Dreads", "Flock_of_Seagulls", "Halo", "Headband", "Headband_Long", "Helmet_Head", 
    "Hopi_Headdress", "Horns", "Jeweled_Crown", "Jeweled_Diadem", "Long", "Long_Black_Hair", "Minoan", "Miss_Antoinette", "Nurse", "Rastafari", "Rastafari_Brown_Long_Dreads", "Rockabilly", "Saiyan", "Shaggy", "Ship_Master", "Short_Dreads", "Steam_Phunk", 
    "Steam_Phunk_Black_Long_Dreads", "Steam_Phunk_Brown_Long_Dreads", "Superman", "Top_Dreads", "Top_Hat_Long", "Top_Hat_Long_Black_Dreads", "Tricorn", "Vajra_Crown", "Visko_Helmet_Long", "Visko_Helmet_Pink", "Witch_Hat", "Witch_Hat_Black_Long_Dreads", 
    "Wizard_Cap", "Wizard_Cap_Minoan", "Woodland_Fae", "Woodland_Fae_Minoan", "Woodland_Fae_Black_Long_Dreads", "Mutton_Chops"
  ];
  if(chosenLayer === "Mutton_Chops"){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(hair.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};

	// Glasses
	const eyes = [ "Angry", "Bored", "Squinting" ];
  if(chosenLayer === "Glass_Eye"){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(eyes.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};	

	const accesories = [ "Atomic_Pipe", "Cigarette", "Doobie", "Dynamite", "Forked_Tongue", "Mouse_Prey", "Paintbrush", "Pipe", "Pipe_Tornado", "Snorkel" ]
  if(chosenLayer === "Snorkel_and_Goggles" || chosenLayer === "Spyglass" || chosenLayer === "Sextant" || chosenLayer === "Laser_Beams" || chosenLayer === "Black_Night_Vision_Goggles" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(accesories.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};

	//whatever
	const hairtypeswithhats = [
		"Arrow", "Bicorn", "Bomber_Cap", "Bomber_Cap_Long", "Bomber_Cap_Black_Long_Dreads", "Captain", "Captain_Cornrows", "Captain_Minoan", "Cobra_Crown", "Cowboy_Hat", "Cowboy_Hat_Black_Long_Dreads", "Derby", "Derby_Black_Long_Dreads", "Derby_Long",
		"Diving_Bell", "Fez", "Fez_Long", "First_Mate", "Halo", "Headband", "Headband_Long", "Hopi_Headdress", "Jester", "Jeweled_Crown", "Jeweled_Diadem", "Miss_Antoinette", "Nurse", "Raspberry_Beret", "Rastafari", "Rastafari_Brown_Long_Dreads", "Saiyan", 
		"Ship_Master", "Skull_Cap", "Steam_Phunk", "Steam_Phunk_Black_Long_Dreads", "Steam_Phunk_Brown_Long_Dreads", "Technicolor_Horn", "The_Goat", "Top_Hat", "Top_Hat_Long", "Top_Hat_Long_Black_Dreads", "Tricorn", "Vajra_Crown", "Visko_Helmet", 
		"Visko_Helmet_Long", "Visko_Helmet_Pink", "Witch_Hat", "Witch_Hat_Black_Long_Dreads", "Wizard_Cap", "Wizard_Cap_Minoan", "Woodland_Fae", "Woodland_Fae_Minoan", "Woodland_Fae_Black_Long_Dreads"
	];
  if(chosenLayer === "Black_Night_Vision_Goggles" || chosenLayer === "Snorkel_and_Goggles" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(hairtypeswithhats.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};

	// Laser BEAMZZZ
	const eyesLaser = [ "Bored", "Gazing", "Squinting", "Pipe_Tornado" ];
  if(chosenLayer === "Laser_Beams" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(eyesLaser.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};

	// Laser BEAMZZZ
	const eyesLaser2 = [ "Angry", "Bored", "Squinting" ];
  if(chosenLayer === "X_Ray_Specs" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(eyesLaser2.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};	

	// Accessories:
	const accessoriesCig = [ "Pursed", "Relaxed", "Scowl", "Smile", "Smirk" ];
  if(chosenLayer === "Cigarette" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(accessoriesCig.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};
	// Accessories:
	const accessoriesDyn = [ "Grimace", "Relaxed", "Scowl", "Smile", "Smirk" ];
  if( chosenLayer === "Dynamite" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(accessoriesDyn.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};
	// Accessories:
	const accessoriesExtr = [ "Grimace", "Pursed", "Relaxed", "Scowl", "Smile" ];
  if( chosenLayer === "Paintbrush" || chosenLayer === "Mouse_Prey" || chosenLayer === "Forked_Tongue" || chosenLayer === "Doobie" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(accessoriesExtr.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};
	// Accessories:
	const accessoriesExtr2 = [  "Grimace", "Relaxed", "Scowl", "Smile", "Smirk" ];
  if( chosenLayer === "Snorkel" || chosenLayer === "Atomic_Pipe" || chosenLayer === "Pipe_Tornado" || chosenLayer === "Pipe" || chosenLayer === "Dynamite" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(accessoriesExtr2.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};

	// glasses":
	const glassesExld = [ "3D_Glasses", "Aviators", "Black_Night_Vision_Goggles", "Cardanos", "Coke_Bottle", "Eye_Patch", "Glass_Eye", "Laser", "Laser_Beams", "Monocle", "Sextant", "Snorkel_and_Goggles", "Spyglass", "X_Ray_Specs" ];
  if( chosenLayer === "Snorkel" || chosenLayer === "Atomic_Pipe" || chosenLayer === "Pipe_Tornado" ){
  	await Promise.all(
		  await chosenLayers.map(async ( attr ) => {
		  	// console.log("attr", attr)
		    if(glassesExld.includes(attr) === true) check = true;
		  })
		);
  	return(check);
	};

  return(check);
};