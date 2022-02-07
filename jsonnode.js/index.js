const fs =require("fs");
const biodata={
    Name :"shalini",
    age :23,
    rollno :2000,
}
// console.log(biodata.Name);
// const jsonData=JSON.stringify(biodata);//{"Name":"shalini","age":23,"rollno":2000}
// console.log(jsonData);
// const objData=JSON.parse(jsonData);//{ Name: 'shalini', age: 23, rollno: 2000 }
// console.log(objData.rollno);


//1:convert to json
//2:add to other file
//3:readfile
//4:again convert back to js obj oriented
const jsonData=JSON.stringify(biodata);
// fs.writeFile('json1.json',jsonData, (err)=>{
//     console.log("Done")
// });
fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgdata=JSON.parse(data);
    console.log(orgdata);
});