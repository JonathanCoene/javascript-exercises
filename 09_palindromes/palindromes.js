const palindromes = function (string) {
    const array = string.split("");

    for (let i = 0; i < array.length;) {
        if (array[i] === array[array.length - 1 - i]) {
            return "true";
        }
    }

};

console.log(palindromes('racecar'));



// Do not edit below this line
module.exports = palindromes;
