var express = require('express');
var path = require('path');

var port = 8081;
var app = express();
var distPath = path.resolve(__dirname, '../dist');

app.use(express.static(distPath));
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
