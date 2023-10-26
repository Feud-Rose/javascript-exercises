const fibonacci = function(num) {
let myInt = parseInt(num)
if (myInt < 0) {
    return "OOPS"
}
else {
        return Math.round(  
        (((1 + Math.sqrt(5))/2) ** myInt - ((1 - Math.sqrt(5))/2) ** myInt) / Math.sqrt(5))
    }
};

// Do not edit below this line
module.exports = fibonacci;
