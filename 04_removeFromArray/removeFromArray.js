const removeFromArray = function(inputArray, ...filterByTheseElements) {

    let newArray = inputArray.filter(element => {
        return !(filterByTheseElements.includes(element))
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
