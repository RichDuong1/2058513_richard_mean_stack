let mongoose = require("mongoose");
let url = "mongodb://localhost/tcsmean";
let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

let schema = mongoose.Schema({
    _id:Number,
    name:String,
    message:String,
});

let output = ["Hello","How are you?","How was your day?","Do you like pizza?","That sounds fun.","Yes","No","Maybe","Bye"]

mongoose.pluralize(null);

app.get("/",(req,res) => {
    res.sendFile(__dirname+"//index.html");
})

//socket impletmentation
io.on("connection", (socket)=>{
    console.log("Client connected");

    socket.on("text", (msg)=>{
        console.log(msg);
        let rand = Math.floor(Math.random()*output.length);
        socket.emit("res",output[rand]);

        //mongoose implementation
        mongoose.connect(url).
        then(res=>console.log("connected")).
        catch(err=>console.log(err));

        let db = mongoose.connection;
        db.once("open",()=> {

            let model = mongoose.model("ChatLog",schema);

            model.find({},(err,doc)=>{
                if(!err){
                    let length = 1;
                    doc.forEach(rec =>{
                        length++;
                    })

                    let modelinsert = new model({_id:length,name:msg[0],message:msg[1]});

                    model.insertMany([modelinsert],(err,result)=>{
                        if(!err){
                            console.log(result);
                        }
                        else{
                            console.log(err);
                        }
                        mongoose.disconnect();
                    })
                }
                else{
                    console.log(err);
                }
            })
        })
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));