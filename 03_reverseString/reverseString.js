const reverseString = function(string) {
    let stringArray = Array.from(string);
    let reverseArray = stringArray.reverse();
    let newString = reverseArray.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
