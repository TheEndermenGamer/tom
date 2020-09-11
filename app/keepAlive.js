var express = require("express");
var app = express();
var listener = app.listen(process.env.PORT, function() {});
app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
