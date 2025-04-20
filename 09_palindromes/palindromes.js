const palindromes = function (word) {
    // Pattern that detects all punctuation and whitespace respectively
    const punctuationRe = /\p{P}/gu;
    const whiteSpaceRe = /\s/g;

    // Remove all punctuation and convert to lowercase
    const noPunctuation = word.replace(punctuationRe, '').toLowerCase();
    // Remove any and all whitespace from the string next
    const strippedWord = noPunctuation.replace(whiteSpaceRe, '');

    // Reverse the word
    const reversedWord = strippedWord.split('').reverse().join('');

    return reversedWord === strippedWord;
}
// Do not edit below this line
module.exports = palindromes;
