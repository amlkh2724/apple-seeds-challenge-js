// Ex5.2 - String Repeat

// Write a function called repeat_str which repeats the given string src exactly count times. repeatStr(6, "I") // "IIIIII"

// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatstr(number, string) {

    return string.repeat(number)

}

console.log(repeatstr(5, "Hello"));
