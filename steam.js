const fs = require("fs");
const http = require("http");
const { setMaxListeners } = require("process");



const server = http.createServer();

server.on("request", (req, res) => {

    const stream = fs.createReadStream("propasals");

// stream.on("data",(chunkdata) => {
//     res.write(chunkdata)
// });

// stream.on("end", () => {
//     res.end();
// });

// stream.on("error", (err) => {
//     console.log("err");
//     res.end("file not found");
// });
//    fs.readFile("propasals", (err, data) =>{
//      if(err) return console.log(err);
//         res.end(data);

//   });

// Third way 

stream.pipe(res);

});



server.listen(5000);