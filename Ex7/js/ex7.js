// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without otherjsmethods)

// filter
//without filter
function filter(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2 === 0)) {
            newArray.push(array[i]);
        }
    }
    return newArray;

}

console.log(filter([1, 2, 3, 4, 5, 6]));



// in filter
let array = [1, 2, 3, 4, 5, 6]
let even = array.filter(number => number % 2 === 0)
console.log(even);
// filter([1, 2, 3, 4, 5, 6])