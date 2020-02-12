// Your code here

let saturdayFun = function(activity = "roller-skate"){
  console.log(${activity})
}


let mondayWork = function( activity = 'go to office') {
  console.log(`"This Monday, I will ${activity}"`) 
}  


 function wrapAdjective(visual = "*") {
   return function (aug1 = "special") {
       return `"You are ${visual} ${aug1} ${visual}"`

    } 
  }