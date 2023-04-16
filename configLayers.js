
export const getConfigLayersHuman_Man = async () => {
	const network = "dot";
  const root_folder = "./layers/";
	const collection = "cryptonauts/";
	const series = "Human_Brown_Man/";
  const name = "HumanMan";
  const description = "Humans Shift.";
  const uri = "ipfs";
	const start = 0;
	const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }
	const layers = [
    { 
    	path: "00_Background",        
      options: {
        displayName: "Background",
      }
    },
    { 
    	path: "01_Behind_Body_HIDDEN",       
      options: {
        displayName: "Shadow_Cloak",
      }
    },
    { 
    	path: "02_Nautical_Background",         
      options: {
        displayName: "Nautical_Background"
      }
    },
    { 
    	path: "03_Character",
      options: {
        displayName: "Character"
      } 
    },
    { 
    	path: "04_Clothes",
      options: {
        displayName: "Clothes"
      } 
    },
    { 
    	path: "05_Necklace",
      options: {
        displayName: "Necklace"
      } 
    },
    { 
    	path: "06_Head_HIDDEN",      
      options: {
        displayName: "Species_Head"
      }
    },
    { 
    	path: "07_Mouth",      options: {
        displayName: "Mouth"
      } 
     },
    { 
    	path: "08_Eyes",
      options: {
        displayName: "Eyes"
      } 
     },
    { 
      path: "09_Head_HAIR_AND_HATS", 
      options:{
        displayName: "Head"
      }
    },
    { 
    	path: "10_Facial_Hair",
      options: {
        displayName: "Facial_Hair"
      } 
    },
    { 
    	path: "11_Glasses",
      options: {
        displayName: "Glasses"
      } 
    },
    { 
    	path: "12_Accessory",
      options: {
        displayName: "Accessory"
      } 
    },
    { 
    	path: "13_Nautical_Foreground",
      options: {
        displayName: "Nautical_Foreground"
      } 
    }
  ];

	return({
		root_folder,
		collection,
		series,
    start,
		amount,
    metadata,
		layers
	})
};

export const getConfigLayersHuman_Woman = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Human_Yellow_Woman/";
  const name = "HumanWoman";
  const description = "Humans Shift.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background",     
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",
        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",
        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",
        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};

export const getConfigLayersWolf_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Wolf_Clan/";
  const name = "Wolf";
  const description = "Wolf Clan awakens. The wolf is commited to overthrowing the dominant paradigm through a radical transformation of society.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background",        
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",
        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",
        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS", 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",
        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",
        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};

export const getConfigLayersMole_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Mole_Clan/";
  const name = "Mole";
  const description = "Mole Clan explores and exposes. The mole is on a quest to reveal the truth, uncovering conspiracies and even petitioning for extraterrestrial aid.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background",        
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",
        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",
        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS", 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",
        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",
        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};

export const getConfigLayersLion_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Lion_Clan/";
  const name = "Lion";
  const description = "Lion Clan creates and harmonizes. The lion uses art and music to give form to possibility and bring harmony between all people.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background",       
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",
        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",

        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",

        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};

export const getConfigLayersRaven_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Raven_Clan/";
  const name = "Raven";
  const description = "Raven Clan heals. The raven understands that the body, mind and spirit of people need to be healed in order for the world to be healed.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",
       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background", 
       
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",
       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",

        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",

        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",

        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};
export const getConfigLayersSnake_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Snake_Clan/";
  const name = "Snake";
  const description = "The snake finds answers in indigenous cultures, engaging in the practice of magic to positively transform the energies of the world.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",
       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background", 
       
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",
       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",

        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",

        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",

        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};
export const getConfigLayersSpider_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Spider_Clan/";
  const name = "Spider";
  const description = "Spider Clan investigates and invents. The spider is dedicated to engineering survival of our species through innovative new technologies.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",
       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background", 
       
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",
       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",

        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",

        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",

        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};
export const getConfigLayersTurtle_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Turtle_Clan/";
  const name = "Turtle";
  const description = "Turtle Clan stewards. The turtle seeks to identify threats to the ecosystem and advance solutions to a sustainable future.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",
       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background", 
       
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",
       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",

        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",

        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",

        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};
export const getConfigLayersWindhorse_Clan = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "cryptonauts/";
  const series = "Windhorse_Clan/";
  const name = "Windhorse";
  const description = "The windhorse seeks to transmute suffering and transcend ego by means of wisdom and compassion as taught by spiritual masters through history.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  let metadata = {};

  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  }

  const layers = [
      { 
        path: "00_Background",
       
        options: {
          displayName: "Background",
        }
      },
      { 
        path: "01_Behind_Body_HIDDEN",
       
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
        path: "02_Nautical_Background", 
       
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
        path: "03_Character",
       
        options: {
          displayName: "Character"
        } 
      },
      { 
        path: "04_Clothes",

        options: {
          displayName: "Clothes"
        } 
      },
      { 
        path: "05_Necklace",
        options: {
          displayName: "Necklace"
        } 
      },
      { 
        path: "06_Head_HIDDEN",
        options: {
          displayName: "Species_Head"
        }
      },
      { 
        path: "07_Mouth",
        options: {
          displayName: "Mouth"
        } 
       },
      { 
        path: "08_Eyes",

        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
 
        options:{
          displayName: "Head"
        }
      },
      { 
        path: "10_Facial_Hair",

        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
        path: "11_Glasses",

        options: {
          displayName: "Glasses"
        } 
      },
      { 
        path: "12_Accessory",
        options: {
          displayName: "Accessory"
        } 
      },
      { 
        path: "13_Nautical_Foreground",
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

  return({
    root_folder,
    collection,
    series,
    start,
    amount,
    metadata,
    layers
  })
};