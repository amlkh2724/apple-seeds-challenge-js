// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.

const containstrings = (str, str2) => {
    let newstr = ""
    let newstr2 = ""
    for (let index of str) {
        if (newstr.indexOf(index) === -1) {
            newstr += index
        }
    }
    for (let index of str2) {
        if (newstr2.indexOf(index) === -1) {
            newstr2 += index
        }

    }
    let sortstring = newstr + newstr2
    let newstr3 = ""
    for (let index of sortstring) {
        if (newstr3.indexOf(index) === -1) {
            newstr3 += index
        }
        newstr3 = newstr3.split('').sort((a, b) => a.localeCompare(b)).join('');

    }
    return newstr3
}


console.log(containstrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

