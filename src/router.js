const handlers = require("./handlers");

const router = (request, response) => {
  const endpoint = request.url;
  console.log("Hey");
  if (endpoint === "/") {
    console.log("hello");
    handlers.handleHome(request, response);
  } else if (endpoint.indexOf("public") !== -1) {
    handlers.handlePublic(request, response);
  } else if (endpoint.indexOf("search") !== -1) {
    handlers.handleSearch(request, response);
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end("<h1>404 not found</h1>");
  }
};

module.exports = router;
