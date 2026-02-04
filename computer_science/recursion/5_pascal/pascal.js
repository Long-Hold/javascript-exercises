/**
 * Returns the nth row of Pascal's triangle using tail recursion.
 * 
 * Starting from row 1 ([1]), the function builds forward by constructing
 * each subsequent row from the previous one, counting down until n === 1.
 * 
 * @param {number} n - The target row number (1-indexed)
 * @param {number[]} currentRow - The row being built (default: [1], the first row)
 * @returns {number[]} The nth row of Pascal's triangle
 * 
 * @example
 * pascal(1) // [1]
 * pascal(3) // [1, 2, 1]
 * pascal(5) // [1, 4, 6, 4, 1]
 */
const pascal = function(n, currentRow = [1]) {
    if (n === 1) return currentRow;

    const nextRow = [1];
    // Iterate through adjacent pairs in currentRow (i and i+1).
    // Stop at length-1 to avoid out-of-bounds access on currentRow[i+1].
    for (let i = 0; i < currentRow.length - 1; ++i) {
        nextRow.push(currentRow[i] + currentRow[i + 1]);
    }
    //Pascal rows always end with 1
    nextRow.push(1);

    return pascal(n - 1, nextRow);
};
  
// Do not edit below this line
module.exports = pascal;
