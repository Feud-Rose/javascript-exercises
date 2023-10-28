const findTheOldest = function(obj) {
   
   console.log(Date)
   console.log(obj)
   
    let sorted = obj.sort(function(a,b){
      if (!a.yearOfDeath) {
         let aAddDeath = addDeath(a);
      }
      if (!b.yearOfDeath) {
         let bAddDeath = addDeath(b);
      }

      let varOne = a.yearOfDeath - a.yearOfBirth;
       let varTwo = b.yearOfDeath - b.yearOfBirth;
       return varOne > varTwo ? -1 : 1 ;

    })
    console.log(sorted)
    const [firstItem, ...rest] = sorted
    return firstItem

};

function addDeath(obj) {
   let date = new Date
   obj.yearOfDeath = date.getFullYear()
   console.log({obj})
}
// Do not edit below this line
module.exports = findTheOldest;
