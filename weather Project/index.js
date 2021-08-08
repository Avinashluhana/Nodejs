const http = require("http");
const fs = require("fs");
const requests = require("requests");


const homePage = fs.readFileSync("index.html", "utf-8");

const replaceValue = (tempval, orgValue) => {
    let temperature = tempval.replace("{%tempval%}", orgValue.main.temp);
     temperature = temperature.replace("{%tempmin%}", orgValue.main.temp_min);
     temperature = temperature.replace("{%tempmax%}", orgValue.main.temp_max);
     temperature = temperature.replace("{%location%}", orgValue.name);
     temperature = temperature.replace("{%country%}", orgValue.sys.country);
     temperature = temperature.replace("{%status%}", orgValue.weather[0].main);

     return temperature;

};

const server = http.createServer((req,res) => {
    if(req.url=="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=071acf66920385c707ce061db505675a")
        .on("data",(chunk) =>{
            const objData = JSON.parse(chunk);
            const arrData = [objData];

            const realTimeData = arrData.map((val) => replaceValue(homePage, val)).join("");
            console.log(realTimeData);
            res.write(realTimeData);
            // console.log(arrData);
           
        })
        .on("end", (err) =>{
            if(err) return console.log("error found", err);
            res.end();  

        });
    } else {
        res.end("file not found");
    }

});

server.listen(5000);
