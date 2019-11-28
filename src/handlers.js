const fs = require("fs");
const path = require("path");
const https = require("https");
// const url = require("url");
// const queryString = require("querystring");

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { "Content-type": "text/html" });
      response.end("<h1>Sorry, there is a server error at our end!</h1>");
    } else {
      response.writeHead(200, { "Content-type": "text/html" });
      response.end(file);
    }
  });
};

const handlePublic = (request, response) => {
  const endpoint = request.url;
  const extension = endpoint.split('.')[1];
      const extensionType = {
              html: 'text/html',
              css: 'text/css',
              js: 'application/js',
              json: 'application/json',
              png: 'image/png',
              jpg: 'image/JPEG'
          }
      const filePath = path.join(__dirname, "..", endpoint);
      fs.readFile(filePath, (error, file) => {
          if(error) {
              response.writeHead(500, {'Content-type': 'text/html'});
              response.end('<h1>Sorry, there is a server error at our end!</h1>');
          } else {
              response.writeHead(200, {'Content-Type': extensionType[extension]});
              response.end(file);
          }
      });
}

const handleSearch = (request, frontResponse) => {
  let searchQuery = request.url.split('?')[1];
  let geckoUrl = `https://api.coingecko.com/api/v3/simple/price?${searchQuery}&include_last_updated_at=true`;
  https.get(geckoUrl, response => {
    let data = "";
    
    response.on("data", chunk => {
      data += chunk;
    });

    response.on("end", () => {
      console.log(data);
      frontResponse.end(data);
    })

  }).on("error", err => console.log(err, "error!"))
};

module.exports = {
  handleHome,
  handlePublic,
  handleSearch
};
