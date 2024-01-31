/**
 * combine both name into full name
 * @param {string} firstName 
 * @param {string} lastName
 * @returns {string}
 */

function fullName(firstName, lastName){
    return firstName + " " + lastName
}

let results = fullName('Roger', 'Lee')
console.log(results)