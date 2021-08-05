const EventEmitter = require("events");


const event = new EventEmitter();


event.on("firstEvent", () =>{
    console.log("event has been fired");
})

event.on("checkPage", (code, msg) => {
    console.log(`code is ${code} ${msg}`)
})

event.emit("firstEvent");

event.emit("checkPage", 200, "ok");