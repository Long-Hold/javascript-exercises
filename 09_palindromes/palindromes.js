const palindromes = function (word) {
    // Split the original word into an array,
    // reverse the array, then join it back into a string
    const reversedWord = word.split('').reverse().join('');

    return reversedWord === word;
};

// Do not edit below this line
module.exports = palindromes;
