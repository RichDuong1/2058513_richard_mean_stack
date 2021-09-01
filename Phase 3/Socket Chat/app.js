let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

let output = ["Hello","How are you?","How was your day?","Do you like pizza?","That sounds fun.","Yes","No","Maybe","Bye"]

app.get("/",(req,res) => {
    res.sendFile(__dirname+"//index.html");
})

io.on("connection", (socket)=>{
    console.log("Client connected");

    socket.on("text", (msg)=>{
        console.log(msg);
        let rand = Math.floor(Math.random()*output.length);
        socket.emit("res",output[rand]);
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));