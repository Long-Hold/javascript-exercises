const factorial = function(num) {
    if (!Number.isInteger(num)) return undefined;
    if (num < 0) return undefined;

    if (num <= 1) return 1;
    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = factorial;