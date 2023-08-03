let list = [1, 2, 3, 4];

const removeFromArray = function(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] == value){
            array.splice(i,1);
        }
    }
    
    return array;
}

console.log(removeFromArray(list, 3));

// Do not edit below this line
module.exports = removeFromArray;
