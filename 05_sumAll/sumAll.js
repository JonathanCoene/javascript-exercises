const sumAll = function(firstValue, secondValue) {
    let output = 0;

    if (firstValue < secondValue) {
        for (let i = firstValue; i <= secondValue; i++) {
            output += i;
        }
    }
    if (firstValue > secondValue) {
        for (let i = secondValue; i <= firstValue; i++) {
            output += i;
        }
    }

    if (firstValue < 0 || secondValue < 0 || typeof firstValue != 'number' || typeof secondValue != 'number') {
        return "ERROR";
    } else {
        return output;
    }
}



console.log(sumAll(1, 4));
console.log(sumAll(1,4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10,"90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
