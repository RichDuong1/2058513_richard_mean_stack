let http = require("http");
let url = require("url");
let fs = require("fs");

let header = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <h2>Task Planner</h2>
</head>
<body>
`

let body1 =`
    <div>
        <h2>
            Add Task
        </h2>
        <form action = "addtask">
            <lable>Emp ID</lable>
            <input type ="text" name = "empid"></br>
            <lable>Task ID</lable>
            <input type ="text" name = "taskid"></br>
            <lable>Task</lable>
            <input type ="text" name = "task"></br>
            <lable>Deadline</lable>
            <input type = "date" name = "deadline"></br>
            <input type="submit" value = "Add task">
        </form>
    </div>
    <br>
`

let body2 =`
    <div>
    <h2>Delete Task</h2>
    <form action = "deletetask">
        <lable>Task Id</lable>
        <input type ="text" name = "deleteid"></br>
        <input type ="submit" value = "Delete Task">
    </form>
    </div>
    <br>
`

let body3 =`
    <div>
    <h2>List Tasks</h2>
    <form action = "listtask">
        <input type = "submit" value = "List all Tasks">
    </form>
    </div>
    <br>
`

let footer =`
</body>    
</html>
`

let tabletop = `
<table style="border: 1px solid black;">
    <tr>    
        <th style="border: 1px solid black;">Emp ID</th>
        <th style="border: 1px solid black;">Task ID</th>
        <th style="border: 1px solid black;">Task</th>
        <th style="border: 1px solid black;">Deadline</th>
    </tr>
`

let tablebottom = `
</table>
`

let server = http.createServer((request, response) => {
    let urlinfo = url.parse(request.url,true);
    let taskarray;
    if(fs.existsSync("task.json")){
        taskarray = JSON.parse(fs.readFileSync("task.json").toString());
    }
    else{
        taskarray = [];
    }

    if (urlinfo.path != "/favicon.ico"){
        if (urlinfo.pathname == "/addtask"){
            response.write(header);
            response.write(body1);
            let info = urlinfo.query;
            if (info.empid == '' || info.taskid == '' || info.task == '' || info.deadline == ''){
                response.write("All entries must be filled")
            }
            else if (!taskarray.find(t => t.taskid == info.taskid)){
                let temp = {"empid":info.empid,"taskid":info.taskid,"task":info.task,"deadline":info.deadline};
                taskarray.push(temp);
                response.write("Task Added")
            }
            else{
                response.write("Task ID must be unique.")
            }
            response.write(body2);
            response.write(body3);
            response.write(footer);
        }
        else if (urlinfo.pathname == "/deletetask"){
            response.write(header);
            response.write(body1);
            response.write(body2);
            let info = urlinfo.query;
            let index = taskarray.findIndex(t => t.taskid == info.deleteid);
            if (index == -1){
                response.write("Task ID does not exist");
            }
            else{
                taskarray.splice(index,1);
                response.write("Task successfully removed");
            }
            response.write(body3);
            response.write(footer);
        }
        else if (urlinfo.pathname == "/listtask"){
            response.write(header);
            response.write(body1);
            response.write(body2);
            response.write(body3);
            response.write(footer);
            response.write(tabletop);
            for (let i of taskarray){
                response.write(`<tr><td style="border: 1px solid black;">`+i.empid+`</td><td style="border: 1px solid black;">`+i.taskid+`</td><td style="border: 1px solid black;">`+i.task+`</td><td style="border: 1px solid black;">`+i.deadline+`</td></tr>`);
            }
            response.write(tablebottom);
        }
        else{
            response.write(header);
            response.write(body1);
            response.write(body2);
            response.write(body3);
            response.write(footer);
        }
    }
    let taskstring = JSON.stringify(taskarray);
    fs.writeFileSync("task.json",taskstring);
    response.end();
})

server.listen(9090,()=>console.log("Server is running on port 9090"))