function toCamel(stringg) {
    let words = stringg.replaceAll("-", "").replaceAll("_", "")
    for (let i = 0; i < words.length; i++) {

        words = words[i].charAt(0).toUpperCase() + words.substr(i + 1);
        return words


    }
}

console.log(toCamel("the-stealth-warrior"));
console.log(toCamel("the_stealth_warrior"));









