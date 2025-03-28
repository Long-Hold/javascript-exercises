const repeatString = function(word, num) {
    if(num < 0)
        return 'ERROR';
    
    let string = '';
    for(; num > 0; --num) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
