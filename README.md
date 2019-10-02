# Git2JSON -> GitGraph.js

![GitGraph Example](https://github.com/daltonrowe/gitgraph-from-json/blob/master/img/readme.png?raw=true)

# Install & Serve

`yarn install` to install dependencies

`yarn start` to generate JSON from git repository

- Edit `path` in `index.js` to generate info from any repo directory.

`yarn serve` to run Express server with GitGraph.js at http://localhost:3000/

## Files

`index.js` - Generate JSON object from git log, and write it to `output.json`

`server.js` – Run a basic Express server to serve HTML/JSON

`index.html` - Webpage that requests `output.json` and displays with GitGraph.js

`output.json` - Untracked output of `yarn start`