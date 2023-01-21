// do it again

function dubclate(string) {
    var list = {};
    for (var i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (list[character]) {
            list[character]++;
        } else {
            list[character] = 1;
        }
    }

    return list;
};


console.log(dubclate("aadd"));
