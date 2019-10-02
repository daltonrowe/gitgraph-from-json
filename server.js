const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// Serve our example pages as the root
app.use(
  "/",
  express.static(path.join(__dirname, "./"), {
    extensions: ["htm", "html"] // Allow use of links without extensions
  })
);

// Serve Turbolinks source code
app.use(
  "/text",
  express.static(path.join(__dirname, "./"), {
    setHeaders: function(res, path, stat) {
      res.set("Content-Type", "text/plain"); // Set headers to text plain for easier frontend
    }
  })
);

// Hey, Listen!
app.listen(port, () =>
  console.log(`GitGraph server listening on port ${port}!`)
);
