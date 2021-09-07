let mongoose = require("mongoose");
let url = "mongodb://localhost/tcsmean";
let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

mongoose.pluralize(null);

app.get("/",(req,res) => {
    res.sendFile(__dirname+"//index.html");
})

//socket impletmentation
io.on("connection", (socket)=>{
    console.log("Client connected");

    socket.on("data", (msg)=>{
        console.log(msg);

        //mongoose implementation
        mongoose.connect(url).
        then(res=>console.log("connected")).
        catch(err=>console.log(err));

        let db = mongoose.connection;
        db.once("open",()=> {
            let schema = mongoose.Schema({
                _id:Number,
                name:String,
                description:String,
                amount:Number
            });

            let model = mongoose.model("Course",schema);

            model.find({_id:msg[0]},(err,doc)=>{
                if(err){
                    let modelinsert = new model({_id:msg[0],name:msg[1],description:msg[2],amount:msg[3]});

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
                    console.log("ID exists");
                }
            })
        })
    })
})

http.listen(9090,()=>console.log("Server running on port number 9090"));