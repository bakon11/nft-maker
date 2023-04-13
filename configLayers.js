export const getConfigLayers = async () => {
	const root_folder = "./layers/"
	const collection = "cryptonauts/"
	const series = "Human_Black_Man/"
	const start = 0
	const amount = 100;

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
      { path: "09_Head_HAIR_AND_HATS",
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
        totalWeight: 100,
        options: {
          displayName: "Nautical_Foreground"
        } 
      }
    ];

	return({
		root_folder,
		collection,
		series,
		amount,
		layers
	})
};