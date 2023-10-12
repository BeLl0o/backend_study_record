const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("hello");

});
app.get("/contact", function(req, res){
    res.send("Contact me at : sim003@ucsd.edu");
});
app.get("/about", function(req, res){
    res.send("I am an excellent backend developer");
});
app.get("/hobbies", function(req, res){
    res.send("<ul><li>Code</li><li>Cat</li>");
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});