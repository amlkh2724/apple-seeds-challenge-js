
// Ex5.7 - shortest words

// Simple, given a string of words, return the ​length​ of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function shortestword(str) {
    if (str.length === 0) {
        return "invalid string"
    }
    let shortest
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < array.length) {
            shortest = array[i]
        }
    }
    return shortest.length

}
console.log(shortestword("aaaa aaas asd dd asdasd"))