var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

console.log(process.env.PORT)
console.log(port)
app.get("/xolb", (req, res, next) => {
 res.json({"id":1, "name":"Usama", "description":"Hero"});
});
app.listen(port, () => {
 console.log("Server running on port 3000");
 console.log("Type < http://localhost:3000/xolb > in your browser");
});