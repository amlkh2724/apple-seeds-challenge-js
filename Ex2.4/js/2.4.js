// Ex2.4 - Unique

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.
let array = [1, 1, 2, 1, 1, 1, 1]
const deferent = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                return `the same number is: ${array[j]}`
            }

        }
        return `all numbers equal to ${array[i]}`
    }

}
console.log(deferent(array));