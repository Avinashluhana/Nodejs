const fs = require('fs');
const os = require('os');


// fs.mkdir("Async", (err) => {
//     console.log("Folder has been creaded");

// });

// fs.writeFile('./Async/async.txt','Async file has been creaated', (err) => {
//     console.log("file created susccesfully");

// });

fs.appendFile("./Async/async.txt", "text appended", (err) => {
    console.log("appended")
})

// fs.readFile("./Async/async.txt","utf-8", (err, data) => {
//     console.log(data);

// });


