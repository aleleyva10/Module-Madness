var http = require('http');
var random = require('./random-number');
var convert = require('./convert-to-usd');
var merger = require('./merge');


http.createServer(function(req, res) {


  res.write('Hello Module Madness \n');
  // res.write(random(100, 1000000));
  // res.write(convert(133.23223));
  res.write(merger.secondModule());
  res.write(merger.firstModule());

  // res.write(merger());

  // res.write(convert(120));
  res.end();


}).listen(3000);
