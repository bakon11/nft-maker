
export const getConfigLayersHuman_Black_Man = async () => {
	const root_folder = "./layers/"
	const collection = "cryptonauts/"
	const series = "Human_Black_Man/"
	const start = 0
	const amount = 100;

	const layers = [
      { 
      	path: "00_Background",
        totalWeight: 4,        
        options: {
          displayName: "Background",
        }
      },
      { 
      	path: "01_Behind_Body_HIDDEN",
        totalWeight: 2,        
        options: {
          displayName: "Shadow_Cloak",
        }
      },
      { 
      	path: "02_Nautical_Background", 
        totalWeight: 4,        
        options: {
          displayName: "Nautical_Background"
        }
      },
      { 
      	path: "03_Character",
        totalWeight: 1,        
        options: {
          displayName: "Character"
        } 
      },
      { 
      	path: "04_Clothes",
        totalWeight: 23,
        options: {
          displayName: "Clothes"
        } 
      },
      { 
      	path: "05_Necklace",
        totalWeight: 7,
        options: {
          displayName: "Necklace"
        } 
      },
      { 
      	path: "06_Head_HIDDEN",
        totalWeight: 1,
        options: {
          displayName: "Species_Head"
        }
      },
      { 
      	path: "07_Mouth",
        totalWeight: 6,
        options: {
          displayName: "Mouth"
        } 
       },
      { 
      	path: "08_Eyes",
        totalWeight: 4, 
        options: {
          displayName: "Eyes"
        } 
       },
      { 
        path: "09_Head_HAIR_AND_HATS",
        totalWeight: 46, 
        options:{
          displayName: "Head"
        }
      },
      { 
      	path: "10_Facial_Hair",
        totalWeight: 12,
        options: {
          displayName: "Facial_Hair"
        } 
      },
      { 
      	path: "11_Glasses",
        totalWeight: 15,
        options: {
          displayName: "Glasses"
        } 
      },
      { 
      	path: "12_Accessory",
        totalWeight: 11,
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