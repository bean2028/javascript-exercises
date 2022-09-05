const findTheOldest = function(input) {
    const myDate = new Date();
    let currentYear = myDate.getFullYear();
    for (let i = 0; i < input.length; i++) {
        if (!input[i].yearOfDeath) {
            input[i].yearOfDeath = currentYear;
        }
        input[i].age = input[i].yearOfDeath - input[i].yearOfBirth;
    }
    answer = input.sort(function(a, b) {return b.age - a.age});
    return answer[0];
};

// Do not edit below this line
module.exports = findTheOldest;
