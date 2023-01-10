let express = require("express");
let app = express();

app.get("/", function (request, response) {
  response.console.log("Hello World");
});
// console.log("Hello World");

module.exports = app;
