const os = require("os");
// See the opreating system architecture
console.log(os.arch());
// see the free space in the ram
const freemem=os.freemem();
console.log(`${freemem /1024/1024/1024}`);
const totalmem=os.totalmem();
console.log(`${totalmem /1024/1024/1024}`);
console.log(os.hostname());
console.log(os.type());

