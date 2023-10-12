const leapYears = function(year) {
let leapCent = year % 100 
let leapCheck = year % 4
let leapCentCheck = year % 400
if (leapCheck != 0) {
return false
}
else if ((leapCent == 0) && (leapCentCheck !== 0)){
    return false
}
else {
    return true
}
};
//if ((leapCheck = 0) && (leapCent != 0)) {
// Do not edit below this line
module.exports = leapYears;
