var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var staticPath = path.join(__dirname, "/public");
app.use(express.static(staticPath));
var bootstrapPath = path.join(__dirname, "/node_modules/bootstrap/dist");
app.use('/dist',express.static(bootstrapPath));
//app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));

var entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(request, response){
	response.render("index");
});

app.use(function(request,response){
	response.status(404).render("404");
})

http.createServer(app).listen(3000, function() {
	console.log("Val's prtfolio started on port 3000");
})

