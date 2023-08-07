const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * 5/9;
  return convertedTemp.toFixed(1);

};



const convertToFahrenheit = function(temp) {
};




console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
