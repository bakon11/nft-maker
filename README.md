# bakon-maker
Maker of logical NFTz

This NFT Maker allows you to configure your layer folders with a few options like display name and order.
Asign weights to layers to make them more or less rare.
And setup conditionals through easy JSON config file. Input the layer your looking for and what it can't be paired with.
<br />
**Why anohter NFT Generator**<br />
Because I wasn't able to find a NFT generator, where I can easily define what layers can not be included with each other. Usually it was/is a cumbersome process
of switching out folders every so many itterations or proprietary code to the given drop. Bakon maker allows you to define those condtionals in a simple to follow,
JSON file, and then simple config file and let it rip.
<hr />

**Files and Folder Structure**<br />
*conditionals/* ~ This dir holds the json file that specifies which layers can't go with each other. Under include type in what layer to look for when selected and under excludes is an array of layers it is not compatible with.

*layer_configs/* ~ This folder holds configs js files the define how your layers are used and their order, display name, which conditionals file to use if any, metadata, NFT colleciton information etc etc.

*layers/* ~ this folder holds all your layer files, you specify how they're used in the layer config js files mentioned above.

*index.js* ~ currently you still need to import your config JS file manually which is defined in this file.

<hr />

**How to Use**
Currently only PNGs are supported, however this will expand rather quickly, PNG's are just easy to work with during development.
It uses the Sharp Image procesing library(https://sharp.pixelplumbing.com/api-constructor)
Use NODEJS 18 LTS

1) npm install.
1) Put your folders with your layer images in the `layers/` directory(any order).
2) In the layers config folder, using the configLayersExample.js file set yours up, there is comments in the file to help you along.
3) In the index.js file you need to import your config layers js file, just follow the example on line 4.
4) On the line where you see `const config = ` replace the name with the config files name you just imported in step 3.
5) To set weights/rarity on your layers take the file name and add the `#40` so for example `pink1#40.png`, the higher the number the more rare it will be.
   if you don't set this, it will auto set to #1 most often.
6) In terminal you should now be ready to run: `node index.js`.
Please watch video for more details.



