const git2json = require("@fabien0102/git2json");

git2json.run().then(myGitLogJSON => console.log(myGitLogJSON));
