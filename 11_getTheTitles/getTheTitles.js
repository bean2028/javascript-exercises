const getTheTitles = function(input) {
    titleArray = [];
    for (let i = 0; i < input.length; i++) {
        titleArray.push(input[i].title);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
