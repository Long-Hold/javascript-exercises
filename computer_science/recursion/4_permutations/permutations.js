// K represents how many elements are being permuted
const permutations = function (array, k = array.length, results = []) {
  if (k <= 0) {
    return [[]];
  }
  if (k === 1) {
    results.push([...array]);
    return results;
  } else {
    permutations(array, k - 1, results);
    for (let i = 0; i < k - 1; ++i) {
      if (k % 2 === 0) {
        [array[i], array[k - 1]] = [array[k-1], array[i]];
      } else {
        [array[0], array[k-1]] = [array[k-1], array[0]];
      }

      permutations(array, k - 1, results);
    }
    return results;
  }
}
  
// Do not edit below this line
module.exports = permutations;
