const express = require("express");

const fs = require('fs');

const app = express();
const port = 5000;


app.get('/',(req,res) =>{
    res.send('bye world')
})

app.listen(port,() =>{
    console.log("Server is workng")
})


fs.writeFileSync('read.txt', 'file has been creaated');

const readFile = fs.readFileSync('read.txt');

console.log(readFile);

const coverting = readFile.toString();

console.log(coverting);