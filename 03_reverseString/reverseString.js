const reverseString = function(word) {

    if(!word) return '';

    return word.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
