var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello all guys");
});

app.listen(4000);