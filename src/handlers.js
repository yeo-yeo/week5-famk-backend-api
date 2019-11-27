const fs = require("fs");
const path = require("path");
const url = require("url");
const queryString = require("querystring");

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { "Content-type": "text/html" });
      response.end("<h1>Sorry we had a problem our end</h1>");
    } else {
      response.writeHead(200, { "Content-type": "text/html" });
      response.end(file);
    }
  });
};

const handlePublic = (request, response) => {};

const handleSearch = (request, response) => {};

module.exports = {
  handleHome,
  handlePublic,
  handleSearch
};
