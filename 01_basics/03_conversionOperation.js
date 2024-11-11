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
//console.log(booleanIsLoggedIn) // true

let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
//console.log(booleanIsLoggedIn2) // false

let isLoggedIn3 = "Ishita"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
//console.log(booleanIsLoggedIn3) //true

// 1 => true 0 => false
// "" => false
// "ishita"=> true

let no = 11

let stringNo = String(no)
//console.log(stringNo) //11
//console.log(typeof stringNo) //string




/*********************** OPERATIONS **********************/

let value = 3
let negValue = -value

//console.log(negValue)
/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2%3) */

let str1 = "hello"
let str2 = " ishita"

let str3  = str1 + str2
//console.log(str3)

/*console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") */

/*
console.log(true)
console.log(+true)
//console.log(true+) //error
console.log(+"") */

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)

let gameCounter2 = 100
gameCounter2++;
console.log(gameCounter2)