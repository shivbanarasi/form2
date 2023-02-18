const fs=require('fs');
const data=fs.readFileSync('message.txt');
console.log(data.toString());