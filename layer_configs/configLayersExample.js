export const configLayersExample = async () => {
  const network = "dot";
  const root_folder = "./layers/";
  const collection = "example/";
  const series = "example/";
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

            "description": "<string | array>",

            "files": [{
              "name": "<string>",
              "mediaType": "<mime_type>",
              "src": "<uri | array>",
            }],

            "attributes": []
          }
        },
        "version": 2
      }
    }
  };

  const layers = [
      { 
        path: "eyes",
        options: {
          displayName: "Eyes",
        }
      },
      { 
        path: "face",
        options: {
          displayName: "Face",
        }
      },
      { 
        path: "head", 
        options: {
          displayName: "Head"
        }
      },
      { 
        path: "pinky",
        options: {
          displayName: "Pinky"
        } 
      },
    ];

  return({
    root_folder,
    collection,
    series,
    conditionals_file,
    start,
    amount,
    metadata,
    layers
  })
};