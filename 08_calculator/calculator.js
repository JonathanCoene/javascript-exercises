const add = function(valueOne, valueTwo) {
	let output = valueOne + valueTwo;
  return output;
};

const subtract = function(valueOne, valueTwo) {
  let output = valueOne - valueTwo;
  return output;
};

const sum = function(array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function() {
	
};

const factorial = function() {
	
};


console.log(add(0, 0));
console.log(add(2, 2));
console.log(add(2, 6));

console.log(subtract(10, 4));

console.log(sum([]));
console.log(sum([7]));
console.log(sum([7, 11]));
console.log(sum([1, 3, 5, 7, 9]));

console.log(multiply([2, 4]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
