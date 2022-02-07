//events module
//node.js has a built in module.called "events"
//where you can  create,fire,and listen for your own events
//example 1-
const EventEmitter=require("events");
const event=new EventEmitter();
// event.on("sayMyName",()=>{
//     console.log("your name is shalini");
// });
// event.on("sayMyName",()=>{
//     console.log("your name is shalu");
// });
// event.on("sayMyName",()=>{
//     console.log("your name is gupta");
// });
// event.emit("sayMyName")
// The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called.
//an emitter object basically has two events.
//Registering and unregistering listener function.
event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc}and the page is${msg}`);
});

event.emit("checkPage",200,"okk");


