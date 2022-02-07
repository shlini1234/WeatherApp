const express =require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello world,i am from express");
});
app.listen(8000,()=>{
    console.log("listing the port at 8000");
});
