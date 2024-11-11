let score = 23 

//console.log(typeof score)
//console.log(typeof(score)) // u can write in both the way 

let score2 = "23" 
let valueInNumber = Number(score2)

//console.log(typeof valueInNumber)
//console.log(valueInNumber)

let score3 = "23abc"              // here is null     // undefined   // true     // string ="ishita "
let valueInNumber2 = Number(score3)

//console.log(typeof valueInNumber2)// number         // number       // number    // number 
//console.log(valueInNumber2)      // ans 0          // NaN           // 1        //NaN


// "33"  => 33
// "33abc"  => NaN 
// true => 1 ;  false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2) // false

let isLoggedIn3 = "Ishita"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3) //true

// 1 => true 0 => false
// "" => false
// "ishita"=> true

let no = 11

let stringNo = String(no)
console.log(stringNo) //11
console.log(typeof stringNo) //string
