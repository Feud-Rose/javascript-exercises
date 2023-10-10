
const repeatString = function(a,b) {
    let str1 = ""
    if (b < 0) {
        return "ERROR"
    }
    for (i = 0; i < b; i++) {
    str1 += a;
    }
    return str1
    } 


// Do not edit below this line
module.exports = repeatString;
