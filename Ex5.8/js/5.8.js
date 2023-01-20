// Ex5.8 - shortest words version 2

// Given a string of words, return the longest word[s].

// String will never be empty and you do not need to account for different data types.
function longest(str) {
    let longest = ""
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i]
        }
    }
    return longest
}

console.log(longest("adsas adasd sad"));