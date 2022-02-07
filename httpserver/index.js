//JSON stands for javascript object notation.JSON is a lighhtweight format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.


const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8");

    const objdata = JSON.parse(data);
    // console.log(req.url);
    if (req.url == "/") {
        res.end("hello from the home side");
    }
    else if (req.url == "/about") {
        res.end("hello from the aboutus side");
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(objdata);
        res.end("hello from the userapi side");
    }

    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("404 error pages")
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});