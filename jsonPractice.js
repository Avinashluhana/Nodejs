const fs = require("fs");


const data = {
    name : "Avinash kumar",
    caste : "Luhana",
    Fathername : "Assan Das"
}
// console.log(data);

const jsonFormat = JSON.stringify(data);

console.log(jsonFormat);

const objData = JSON.parse(jsonFormat);

console.log(objData);

fs.writeFile("jsonFile.json", jsonFormat, (err) => {
    console.log("file has been created");
})

fs.readFile("jsonPractice.json", (err) =>{
    console.log(objData);
})

