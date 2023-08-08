const palindromes = function (string) {
    let input = string.toLowerCase();
    const array = input.split("");
    const filteredArray = array.filter(function(i) {return i !== "." && i !== "!" && i !== "," && i !== "?" && i !== " "});
    
    for (let i = 0; i < filteredArray.length;i++) {
        if (filteredArray[i] === filteredArray[filteredArray.length - 1 - i]) {
            return "true";
        } else {
            return "false";
        }
    }
};

console.log(palindromes('racecar'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.')); // werkt nog niet
console.log(palindromes('rac3e3car')); // werkt nog niet
console.log(palindromes('r3ace3car')); // werkt nog niet


// Do not edit below this line
module.exports = palindromes;
