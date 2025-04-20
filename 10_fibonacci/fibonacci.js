const fibonacci = function(sequenceLimit) {
    /* 
    Parameters:
        val - the number of digits to calculate
    Return Values:
        int - the last value in the series
    */

    if (Number.isInteger(sequenceLimit) === false)
        sequenceLimit = Number(sequenceLimit);

    if (sequenceLimit === 0)
        return 0;
    if (sequenceLimit < 0)
        return 'OOPS';

    // An array that tracks the sequence,
    // Starts off with the first two sequence values
    const sequence = [0, 1];
    for (let i = 1; i < sequenceLimit; ++i) {
        let nextVal = sequence[i - 1] + sequence[i];
        sequence.push(nextVal);
    }

    return sequence.pop();
};

// Do not edit below this line
module.exports = fibonacci;
