function convertNumber(input) {
   return input.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

module.exports = convertNumber;
