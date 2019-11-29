const handlers = require("./handlers");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handlers.handleHome(request, response);
  } else if (endpoint.indexOf("public") !== -1) {
    handlers.handlePublic(request, response);
  } else if (endpoint.indexOf("search") !== -1) {
    handlers.handleSearch(request, response);
  } else {
    handlers.handle404(request, response);
  }
};

module.exports = router;
