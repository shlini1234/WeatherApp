const path=require("path");
console.log(path.dirname('C:/Users/shali/Desktop/node.js/pathmode.js'));
console.log(path.extname('C:/Users/shali/Desktop/node.js/pathmode.js'));
console.log(path.basename('C:/Users/shali/Desktop/node.js/pathmode.js'));
const myPath=path.parse('C:/Users/shali/Desktop/node.js/pathmode.js');
console.log(myPath.name);