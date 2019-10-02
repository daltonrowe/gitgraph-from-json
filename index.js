const fs = require("fs");
const git2json = require("@fabien0102/git2json");

const path = "./";

function writeToJSON(json) {
  fs.writeFile("output.json", json, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}

git2json.run({ path }).then(myGitLogJSON => {
  writeToJSON(JSON.stringify(myGitLogJSON));
  console.log("Done!");
});
