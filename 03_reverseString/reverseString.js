const reverseString = function(str1) {
let splitString = str1.split("");
let revArray = splitString.reverse();
let result = revArray.join("");
return result
};

// Do not edit below this line
module.exports = reverseString;
