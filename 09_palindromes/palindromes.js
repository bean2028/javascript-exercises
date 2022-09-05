const palindromes = function (input) {
    input = input.toLowerCase();
    input = input.replace(/[^a-z0-9]/gi, "");
    let reverse = input.split("").reverse().join("");
    if (input === reverse) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
