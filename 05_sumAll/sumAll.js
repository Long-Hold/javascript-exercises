const sumAll = function(value1, value2) {
    if(isNaN(value1) || isNaN(value2)) return 'ERROR';
    if(isNegative(value1) || isNegative(value2)) return 'ERROR';
    if(!isInt(value1) || !isInt(value2)) return 'ERROR';

    // Calulate the smaller (starting) value, and the larger (end) value
    let start = Math.min(value1, value2);
    let end = Math.max(value1, value2);

    // Calculate the number of digits, inclusive
    const terms = (end - start) + 1;
    return (terms / 2) * (start + end);
};

function isNegative(value) {
    return value < 0;
}

function isInt(value) {
    return value === Math.floor(value);
}

// Do not edit below this line
module.exports = sumAll;
