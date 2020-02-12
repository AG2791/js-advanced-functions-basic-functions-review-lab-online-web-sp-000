// Your code here
let mondayWork = function( activity = 'go to office') {
  console.log(`"This Monday, I will ${activity}"`) 
}  

mondayWork()

 function wrapAdjective(visual = "*") {
   return function (aug1 = "special") {
       return `"You are ${visual} ${aug1} ${visual}`

    } 
  }