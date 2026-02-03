const totalIntegers = function(collection) {
    if (!isObject(collection)) return;

    let intCount = 0;
    Object.values(collection).forEach((value) => {
        if (Number.isInteger(value)) ++intCount;
        if (isObject(value)) intCount += totalIntegers(value);
    });

    return intCount;
};

function isObject(data) {
    return (typeof data === 'object' && data !== null);
}
  
// Do not edit below this line
module.exports = totalIntegers;
