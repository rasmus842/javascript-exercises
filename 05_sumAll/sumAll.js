const sumAll = function(firstNumber, secondNumber) {

    if (typeof firstNumber != "number" || typeof secondNumber != "number") {
        return "ERROR";
    }

    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }

    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    let sum = 0;
    for(let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
