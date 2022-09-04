const ftoc = function(fTemp) {
  newTemp = ((fTemp - 32) * (5 / 9));
  return Math.round(newTemp * 10) / 10;
};

const ctof = function(cTemp) {
  newTemp = (cTemp * (9 / 5)) + 32;
  return Math.round(newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
