const http = require("http");
const fs = require("fs");
const requests=require("requests");
const homefile =fs.readFileSync("home.html","utf-8");
const replaceVal=(tempVal,orgVal)=>{
    var Temp=orgVal.main.temp-273.15;
    var minTemp=orgVal.main.temp_min-273.15;
    var maxTemp=orgVal.main.temp_max-273.15;
let temparature=tempVal.replace("{%tempval%}",Temp.toFixed(2));
temparature=temparature.replace(" {%tempmin%}",minTemp.toFixed(2));
temparature=temparature.replace("{%tempmax%}",maxTemp.toFixed(2));
temparature=temparature.replace("{%location%}",orgVal.name);
temparature=temparature.replace("{%country%}",orgVal.sys.country);
 temparature=temparature.replace("{%tempstatus%}",orgVal.weather[0].main);
return temparature;
};
const server = http.createServer((req, res) => {
    
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=6966f4eac2470e2a2d6e9e54141809db")
       .on("data",(chunk)=>{
             const objData=JSON.parse(chunk);
             const arrdata= [objData];
            //  console.log(arrdata);
            //   console.log(arrdata[0].main.temp-273.15)//
              
            const realTimeData = arrdata
            .map((val) => replaceVal(homefile, val))
           .join("");
     res.write( realTimeData);
        })
       .on("end",(err)=>{
            if(err) return console.log("connection closed due to error",err);
            res.end();
        });
    }
});
    
    
server.listen(3000, "127.0.0.1");