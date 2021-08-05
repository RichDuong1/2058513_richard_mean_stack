//Function to add the blog when the button is pressed
function addblog(){
    //Retrieves all the values from the form
    var Title = document.getElementById("Title").value;
    var Article = document.getElementById("Article").value;
    var Image = document.getElementById("Image").value;

    if(Title != "" && Article != ""){
        //Makes a div tag and name the class
        var divTag = document.createElement("div");
        divTag.className = "col-4 topbuffer";
        var postcard = document.createElement("div");
        postcard.className = "card bg-primary";
        var cardbody = document.createElement("div");
        cardbody.className = "card-body";
        var brTag1 = document.createElement("br");
        var brTag2 = document.createElement("br");
        var span = document.createElement("span");
        span.style.fontSize = "x-large";

        //Sets up the text and img for the post
        var Titlecontent = document.createTextNode(Title);
        var Articlecontent = document.createTextNode(Article);
        var Imagecontent = document.createElement("img");
        Imagecontent.setAttribute("src", Image);
        Imagecontent.setAttribute("width", 250);
        Imagecontent.setAttribute("height", 150);

        //Appends all the tags
        span.appendChild(Titlecontent);
        cardbody.appendChild(span);
        cardbody.appendChild(brTag1);
        cardbody.appendChild(Articlecontent);
        cardbody.appendChild(brTag2);
        cardbody.appendChild(Imagecontent);
        postcard.appendChild(cardbody);
        divTag.appendChild(postcard);

        //Appends to the content in the div tag in Main.html
        document.getElementById("Blog").appendChild(divTag);
    
    }
}