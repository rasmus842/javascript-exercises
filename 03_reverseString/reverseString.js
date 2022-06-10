const reverseString = function(text) {
    const textAsArray = text.split('');
    let reversed = textAsArray.reverse().join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
