const sumAll = function(a, b) {
    if (typeof a !== "number") {
        return "ERROR"
    }
    else if (typeof b !== "number") {
        return "ERROR"
    }
    else if (a < 0 || b < 0) {
        return "ERROR"
    }
    let result = 0
    if (a < b) {
        for (i=0; i < (b-a)+1; i++) {
            let int1 = a + i
            result += int1
    }
    }
    else if (b < a) {
        for (i=0; i < (a-b)+1; i++) {
            let int1 = b + i
            result += int1
    }
    }
    return result;
}
// Do not edit below this line
module.exports = sumAll;
