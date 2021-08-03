const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.cpus());
console.log(os.getPriority());


const freememorty = os.freemem();

console.log(`${freememorty/1024/1024/1024}`);

const totalMemory = os.totalmem();

console.log(`${totalMemory/1024/1024/1024}`);

