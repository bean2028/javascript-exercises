const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(x) {
	let sum = 0;
  if (x.length === 0) {return 0;}
  else {
    for (let i = 0; i < x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
};

const multiply = function(x) {
  let answer = x[0]
  for (let i = 1; i < x.length; i++) {
    answer *= x[i];
  }
  return answer;
};

const power = function(x,y) {
	let answer = x;
  for (let i = 1; i < y; i++) {
    answer *= x;
  }
  return answer;
};

const factorial = function(x) {
	let answer = 1;
  if (x === 0) {
    return 1;
  }
  else {
    for (let i = x; i >= 1; i--) {
      answer *= i; 
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
