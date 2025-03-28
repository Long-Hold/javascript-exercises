const removeFromArray = function(array, ...selectedValue) {
    return array.filter((item) => {
        return !selectedValue.includes(item);
    })
};

// Do not edit below this line
module.exports = removeFromArray;
