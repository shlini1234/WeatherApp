const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on('request',(req,res)=>{
// const rstream=fs.createReadStream("Input.txt");
// rstream.on('data',(chunkdata)=>{
//     res.write(chunkdata);
// });


// //     fs.readFile("input.txt",function(err,data){
// //         if(err) return console.error(err);
// //         //res.end(data.toString());
// // console.log(data.toString);
//     rstream.on('end',()=>{
//         res.end();
//     });
const rstream=fs.createReadStream("Input.txt");
rstream.pipe(res);


});
server.listen(8000,"127.0.0.1");
