const accountId = 12345
let accountEmail = "razasaba*6@gmail.com"
var accountPassword = "sabaRaza"
accountCity = "lahore"
console.table([accountId , accountEmail , accountPassword ,accountCity])
// use let bcz var has issues in
/*
block scope 
functional scope
*/
 accountEmail = "farzanaa*6@gmail.com"
 accountPassword = "Malik"
accountCity = "gujranwala"
console.table([accountId , accountEmail , accountPassword ,accountCity])