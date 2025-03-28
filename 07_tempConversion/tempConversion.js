const convertToCelsius = function(temp) {
  let celcius = ((temp - 32) / 1.8);
  return (celcius - Math.floor(celcius) === 0) ? celcius : +celcius.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let farenheit = (temp * 1.8) + 32;
  return (farenheit - Math.floor(farenheit) === 0) ? farenheit : +farenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
