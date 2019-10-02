document.addEventListener("DOMContentLoaded", function() {
  function ajax(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(this.responseText);
      };
      xhr.onerror = reject;
      xhr.open("GET", url);
      xhr.send();
    });
  }

  ajax("output.json")
    .then(function(result) {
      const graphContainer = document.getElementById("graph-container");
      const gitgraph = GitgraphJS.createGitgraph(graphContainer);
      console.log("importing json");
      gitgraph.import(JSON.parse(result));
    })
    .catch(function(err) {
      console.log(err, "error");
    });
});
