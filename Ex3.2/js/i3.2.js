
// Ex3.2 - People on the Bus

// Number of people in the bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop. You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
let array = ["d", "e", "f"]
function bus(numberpeople) {

    if (numberpeople < 0) {
        return 0
    }

    for (let i = 0; i < array.length; i++) {
        // stop = array[i]
        while (!array[i].length - 1) {
            i++
            let ask = +prompt("how many people in this station well go outside")
            if (numberpeople -= ask > 0) {
                numberpeople -= ask
                console.log(numberpeople);
            } else {
                console.log("number people LESS than 0");
            }
            let ask2 = +prompt("how many people well come to the bus?")
            ask2 += numberpeople
            console.log(ask2);

        }
    }
    return `number of people who are still in bus after the las bus station${numberpeople}`

}
console.log(bus(120))