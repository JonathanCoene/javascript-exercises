const sumAll = function(firstValue, secondValue) {
    let output = 0;

    for (let i = firstValue; i <= secondValue; i++) {
        output += i;
    }
    return output;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
