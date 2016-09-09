var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello ALL");
});

app.listen(4000);