var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello all    ");
});

app.listen(4000);