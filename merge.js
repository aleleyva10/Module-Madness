var http = require('http');
var random = require('./random-number');
var convert = require('./convert-to-usd');



exports.firstModule = function() {

  return  convert(random(100, 1000000));
};

exports.secondModule = function() {
  return 'Account balance: \n';
}
