const isogram = (str) => {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let index = str[i]
        if (obj[index]) {
            return false
        } else {
            obj[index] = 1
        }
    }
    return true
}
console.log(isogram('Dermatoglyphics"'))
console.log(isogram('aba"'))