// Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32. 
// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.

const convertToCelsius = function(fahTemp) {
  let num1 = (fahTemp - 32) * (5 / 9)
  let tempInCel = Math.round(num1 * 10) / 10
  return tempInCel
};

const convertToFahrenheit = function(celTemp) {
  let num2 = (celTemp * ( 9 / 5 )) + 32
  let tempInFah = Math.round( num2 * 10 ) / 10
  return tempInFah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
