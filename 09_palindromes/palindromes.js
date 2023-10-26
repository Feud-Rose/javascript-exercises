let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const palindromes = function (word) {
    let lower = word.toLowerCase();
    let str = lower.split('') ;
    
    let clearedSpace = removeWhiteSpace(str)

    punRemoved = clearedSpace.filter(function(letter) {
        return punctuation.indexOf(letter) === -1
    })
    let dupeArray = punRemoved.slice();
    reversed = punRemoved.reverse()
    if (dupeArray.join() == reversed.join()) {
        return true
    }
    else { return false}

};

function removeWhiteSpace(array) {
    return array.filter((item) => item != ' ');
}

// Do not edit below this line
module.exports = palindromes;
