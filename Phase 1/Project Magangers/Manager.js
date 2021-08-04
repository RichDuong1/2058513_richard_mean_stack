//initializes the local storage or obtains the data in the local storage if it exists
if (localStorage.getItem("obj")){
    let tablejson = localStorage.getItem("obj");
    var table = JSON.parse(tablejson);
}
else{
    var table = [];
}

//function to add the data to the local storage for ProjectManager.html
function adddata(){
    //obtaining the data from the form
    var Client = document.getElementById("Client").value;
    var Project = document.getElementById("Project").value;
    var Budget = document.getElementById("Budget").value;
    
    //Checks if there were values inputted
    if(Client != "" && Project != "" && Budget != "" ){
        //formatting the data and adding it to localstorage
        let data = {C:Client, P:Project, B:Budget};
        table.push(data);
        //Removing the previous object
        if (localStorage.getItem("obj")){
            localStorage.removeItem("obj");
        }
        localStorage.setItem("obj",JSON.stringify(table));
    }
}

//function to show the table in FinanceTeams.html
function showtable(){
    //if statement to check if obj exists in local storage
    if (localStorage.getItem("obj")){
        //Retrieves localstorage obj and parses it
        let tablejson = localStorage.getItem("obj");
        let tablecontent = JSON.parse(tablejson);
        var total = 0;
        var maintable = "";
        var tableheader = "<table style='width:80%' border=1 bordercolor='black'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
        
        //For loop to iterate through the array and add the html text
        for (let i=0; i<tablecontent.length; i++){
            maintable = "<tr><td>"+tablecontent[i].C+"</td><td>"+tablecontent[i].P+"</td><td>"+tablecontent[i].B+"</td></tr>";
            tableheader=tableheader+maintable;
            total = total + Number(tablecontent[i].B);
        }
        var endtable = "</table>";
        tableheader = tableheader + endtable;
        document.getElementById("main").innerHTML=tableheader;
        var finalbudget = "Total Budget: " + total;
        document.getElementById("total").innerHTML=finalbudget;
    }
    else{
        var tableheader = "<table style='width:80%' border=1 bordercolor='black'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
        var endtable = "</table>";
        var total = 0;
        tableheader = tableheader + endtable;
        document.getElementById("main").innerHTML=tableheader;
        var finalbudget = "Total Budget: " + total;
        document.getElementById("total").innerHTML=finalbudget;
    }
}
