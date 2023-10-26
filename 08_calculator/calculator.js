const add = (a,b) => a + b 
;

const subtract = function(a,b) {
	const subtracted = a - b
  return subtracted
};

const sum = function(sumIt) {
  if (sumIt.length == 0) {
    return 0
  }
  let result = sumIt.reduce((initial, cur) => initial + cur)
	return parseInt(result)
};

const multiply = function(multiplyIt) {
  let result = multiplyIt.reduce((initial, cur) => initial * cur, 1)
	return parseInt(result)
}

const power = function(a,b) {
  let toPower = Math.pow(a,b)
  return toPower
};

const factorial = function(num) {
  let result = num;
  if (num === 0 || num === 1){ 
    return 1
  }
  while (num > 1) {
    num--;
    result *= num; 
  }
  return result
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
