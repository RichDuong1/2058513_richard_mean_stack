let mongoose = require("mongoose");
let url = "mongodb://localhost/tcsmean";
let express = require("express");
let bodyParser = require("body-parser");
let app = express();

let schema = mongoose.Schema({
    _id:Number,
    name:String,
    description:String,
    amount:Number
});

app.use(bodyParser.urlencoded({extended:true}));

mongoose.pluralize(null);

app.get("/",(req,res) => {
    res.sendFile(__dirname+"//index.html");
})

app.get("/index",(req,res) => {
    res.sendFile(__dirname+"//index.html");
})

app.get("/add",(req,res) =>{
    res.sendFile(__dirname+"//add.html");
})

app.get("/update",(req,res) => {
    res.sendFile(__dirname+"//update.html");
})

app.get("/delete",(req,res) => {
    res.sendFile(__dirname+"//delete.html");
})

app.get("/list",(req,res) => {
    //mongoose implementation
    mongoose.connect(url).
    then(res=>console.log("connected")).
    catch(err=>console.log(err));

    let db = mongoose.connection;
    db.once("open",()=> {

        let model = mongoose.model("Course",schema);
        let result = "<h2>List of Courses</h2><br>"

        model.find({},(err,doc)=>{
            if(!err){
                console.log(doc);
            mongoose.disconnect();
                result+= "<table style='border: 1px solid black'><tr><th style='border: 1px solid black'>Course ID</th><th style='border: 1px solid black'>Course Name</th><th style='border: 1px solid black'>Description</th><th style='border: 1px solid black'>Amount</th></tr>";
                doc.forEach(rec=>{
                    result+="<tr><td style='border: 1px solid black'>"+rec._id+"</td><td style='border: 1px solid black'>"+rec.name+"</td><td style='border: 1px solid black'>"+rec.description+"</td><td style='border: 1px solid black' >"+rec.amount+"</td></tr>";
                })
                result+="</table>";
                result+="<br><a href='index'>Main Page</a>";
                res.send(result);
            }
            else{
                console.log(err);
                result+="<br><a href='index'>Main Page</a>"
                res.send(result);
            }
            mongoose.disconnect();
        })
    })
})

app.get("/insert",(req,res) =>{
    let courseid = req.query["courseid"];
    let coursename = req.query["coursename"];
    let description = req.query["description"];
    let amount = req.query["amount"];

    //mongoose implementation
    mongoose.connect(url).
    then(res=>console.log("connected")).
    catch(err=>console.log(err));

    let db = mongoose.connection;
    db.once("open",()=> {

        let model = mongoose.model("Course",schema);
        
        let modelinsert = new model({_id:courseid,name:coursename,description:description,amount:amount});

        model.insertMany([modelinsert],(err,result)=>{
            if(!err){
                console.log(result);
            }
            else{
                console.log(err);
            }
            mongoose.disconnect();
        })
    })
    res.sendFile(__dirname+"//add.html");
})

app.get("/improve",(req,res) =>{
    let courseid = req.query["courseid"];
    let amount = req.query["amount"];

    //mongoose implementation
    mongoose.connect(url).
    then(res=>console.log("connected")).
    catch(err=>console.log(err));

    let db = mongoose.connection;
    db.once("open",()=> {

        let model = mongoose.model("Course",schema);

        model.updateOne({_id:courseid},{$set:{amount:amount}},(err,result)=>{
            if(!err){
                console.log(result);
                if (result.modifiedCount>0 || result.matchedCount>0){
                    console.log("Course updated successfully");
                }
                else{
                    console.log("Course didn't update");
                }
            }
            else{
                console.log(err);
            }
            mongoose.disconnect();
        })
    })
    res.sendFile(__dirname+"//update.html");
})

app.get("/remove",(req,res) =>{
    let courseid = req.query["courseid"];

    //mongoose implementation
    mongoose.connect(url).
    then(res=>console.log("connected")).
    catch(err=>console.log(err));

    let db = mongoose.connection;
    db.once("open",()=> {

        let model = mongoose.model("Course",schema);

        model.deleteOne({_id:courseid},(err,result)=>{
            if(!err){
                console.log(result);
                if (result.deletedCount>0){
                    console.log("Course deleted successfully");
                }
                else{
                    console.log("Course not present");
                }
            }
            else{
                console.log(err);
            }
            mongoose.disconnect();
        })
    })
    res.sendFile(__dirname+"//delete.html");
})


app.listen(9090,()=>console.log("Server running on port number 9090"));