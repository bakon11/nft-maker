export const configLayersExample = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "example/";
  const series = "example_Clan/";
  const name = "Example";
  const description = "Some Description here.";
  const uri = "ipfs";
  const start = 0;
  const amount = 500;
  const conditionals_file = "conditionalsExample.json";
  let metadata = {};

  // ERC721 metadata DOT|Astar and ETH
  if( network === "dot" || network === "eth" ){
    metadata = {
      "name": name,
      "description": description,
      "image": "ipfs://"+uri+"/0.png",
      "edition": 0,
      "season": "1",
      "attributes": []      
    }
  };
  // CIP25
  if( network === "ada" ){
    metadata ={
      "721": {
        "<policy_id>": {
          "<asset_name>": {
            "name": "<string>",

            "image": "<uri | array>",
            "mediaType": "image/<mime_sub_type>",

            "description": <string | array>,

            "files": [{
              "name": "<string>",
              "mediaType": "<mime_type>",
              "src": "<uri | array>",
              "<other_properties>"
            }],

            "<other properties>"
          }
        },
        "version": 2
      }
    }
  };

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