const ftoc = function(tempInFahrenheit) {
  let tempInCelcius = (tempInFahrenheit - 32) * 5/9;
  return Number(tempInCelcius.toFixed(1));
};


const ctof = function(tempInCelcius) {
  let tempInFahrenheit = tempInCelcius * 9/5 + 32;
  return Number(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
