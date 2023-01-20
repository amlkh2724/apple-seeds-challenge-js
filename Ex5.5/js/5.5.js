// Ex5.5 - Abbreviate two words

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H


const abtoword = (words) => {
    let newstr = words.split(" ")
    return newstr[0].charAt(0).toUpperCase() + "." + newstr[1].charAt(0).toUpperCase()
    

}
// Sam Harris => S.H
console.log(abtoword("Sam Harris"));

// console.log(abtoword('hiw okan'));