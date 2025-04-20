const palindromes = function (word) {
    // Remove any punctuation from the original string
    const noPunctuationWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    // Split the string into an array, reverse it, then join it back into a string
    const reversedWord = noPunctuationWord.split().reverse().join('');

    return reversedWord === noPunctuationWord;
};

// Do not edit below this line
module.exports = palindromes;
