const http = require("http");
const { url } = require("inspector");

const fs = require("fs");

const server = http.createServer((req, res) => {
  //    console.log(req.url);
  if (req.url == "/") {
    res.end("home");
  } else if (req.url == "/about") {
    res.end("about us page");
  } else if (req.url == "/contact") {
    res.end("Contact us page");
  } else if (req.url == "/api") {
      fs.writeHead(200, {"content-type" : "application/json"})
    fs.readFile("apiPractice.json", "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("page does not exit", { "content-type": "text/html" });
  }
});

server.listen(7000, () => {
  console.log("listning to ther server");
});
