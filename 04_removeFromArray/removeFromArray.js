const removeFromArray = function(arrayTarget, ...removeVal ) {
for ( i = 0; i < arrayTarget.length; i++) {
        let checkThis = arrayTarget[i];
        for ( j = 0; j < removeVal.length; j++) {
            let removeThis = removeVal[j];
            if (removeThis === checkThis) {
                arrayTarget.splice(i, 1);
                i--
            }
        }
    }
   
    return arrayTarget
    
    
    
 };


// Do not edit below this line
module.exports = removeFromArray;
  
//if (checkThis === a) {
//    arrayTarget.splice(i, 1)
//}
//else if (checkThis === b) {
//    arrayTarget.splice(i, 1)
//}