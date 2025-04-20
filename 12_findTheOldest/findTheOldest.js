const findTheOldest = function(people) {
    /*
    Parameters:
        people: An array of objects

    Object interface:
        name: ,
        yearOfBirth: ,
        yearOfDeath: , 
    
    Returns:
        Object: person object */
    
    const d = new Date();
    const currentYear = d.getFullYear();

    return people.reduce((oldest, current) => {
        const oldestAge = oldest.yearOfDeath === undefined
        ? currentYear - oldest.yearOfBirth
        : oldest.yearOfDeath - oldest.yearOfBirth;

        const currentAge = current.yearOfDeath === undefined
        ? currentYear - current.yearOfBirth
        : current.yearOfDeath - current.yearOfBirth;

        return oldestAge < currentAge ? current: oldest;
    }, people[0]);
};

function getPersonAge(person) {
    /*

    Usage:
        Calculates the age of a person based on their birth year and death year.
        If person.yearOfDeath is undefined, then it uses the current year in its place.
        
    Parameters:
        person: Object
    
    Returns:
        age: int */
    
    const d = new Date();
    const currentYear = d.getFullYear();

    return person.yearOfDeath === undefined
    ? currentYear - person.yearOfBirth
    : person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
