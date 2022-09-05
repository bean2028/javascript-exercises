const fibonacci = function(fibNum) {
    let fib1 = 0;
    let fib2 = 1;
    let next = null;
    let fibSeq = [];
    for (let i = 0; i <= fibNum; i++) {
        fibSeq.push(fib1);
        next = fib1 + fib2;
        fib1 = fib2;
        fib2 = next;
    }
    let answer = fibSeq[fibNum];
    if (Number.isInteger(answer) === true) {
        return answer;
    }
    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
