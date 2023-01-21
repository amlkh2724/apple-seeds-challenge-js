// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-VWw-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z anda. .z.
// const accum = (str) => {
//     let newstr = ""
//     let array = str.split(" ")
//     for (let i = 0; i < array.length; i++) {
//         newstr += array[i].charAt(0).toUpperCase() + '-' + array[i].slice(1).repeat(i + 1) + "-"

//     }
//     return newstr.slice(0, -1)
// }
// console.log(accum("asdd"));

// const accum = (str) => {
//     let newstr = ""
//     let array = str.split(" ")
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             newstr += array[i][j].toUpperCase() + array[i][j].toLowerCase()+ "-" + array[i][j].repeat(j)
//         }

//             // newstr += '-'
//         }
//     }
//     return newstr.slice(0, -1)
// }

const accum = (str) => {
    let newstr = ""
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            newstr += array[i][j].toUpperCase() + array[i][j].toLowerCase().repeat(j)
            newstr += '-'
        }

    }
    return newstr
}

console.log(accum("asd"));
