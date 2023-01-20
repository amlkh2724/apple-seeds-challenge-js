// Ex5.4 - To Weird Case

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:

// toWeirdCase( "String" );//=> returns "StRiNg"

// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"



const lowerupper = (string) => {
    let str = ""
    let isEven = true
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            str += " "
            isEven = true
        } else {
            str += (isEven) ? string[i].toUpperCase() : string[i].toLowerCase()
            isEven = !isEven
        }

    }
    return str
}



console.log(lowerupper("String"));
console.log(lowerupper("Weird string case"));
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
// toWeirdCase( "String" );//=> returns "StRiNg"


// const lowerupper = (string) => {
//     let newStr = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === " ") {
//             newStr += " "
//         } else if (i % 2 === 0) {
//             newStr += string[i].toUpperCase()
//         }
//         else {
//             newStr += string[i]
//         }

//     }
//     return newStr
// }