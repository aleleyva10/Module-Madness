function randomNumber(min, max) {
  var random = Math.floor(Math.random() * (1 + max - min) + min);
  return random;
}



module.exports = randomNumber;
