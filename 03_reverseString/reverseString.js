const reverseString = function(string) {

    const convertArray = Array.from(string);
    console.log(convertArray.length);
    console.log(convertArray);

    let output = "";

    for (let i = 0; i < convertArray.length; i++) {
        output += convertArray[convertArray.length-1-i];
    }

    return output;
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
