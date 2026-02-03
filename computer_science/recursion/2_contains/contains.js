const contains = function(obj, value) {
    let foundValue = false;
    for (const key of Object.keys(obj)) {
        if (foundValue === true) break;

        if (Number.isNaN(obj[key]) && Number.isNaN(value)) foundValue = true;
        if (obj[key] === value) foundValue = true;

        // If the value is another object, we must begin the recursion
         else if (typeof obj[key] === 'object' && obj[key] !== null) foundValue = contains(obj[key], value);
    }

    return foundValue;
};
  
// Do not edit below this line
module.exports = contains;
