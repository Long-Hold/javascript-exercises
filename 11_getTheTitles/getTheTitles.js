const getTheTitles = function(library) {
    /*
        Parameters:
            library: An array of objects as follows:
                [ 
                {
                    title: ...,
                    author:...,
                } 
                ]
        
        Returns:
            Array: An array of the titles only
    */

    const titles = library.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
