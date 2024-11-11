/*
console.log(2>1)    //true
console.log(2>=1)   //t
console.log(2<1)    //f
console.log(2==1)   //f
console.log(2!=1)   //t
*/

console.log("2" > 1)    //t
console.log("02" > 1)   //t

//f f t
console.log( null > 0)
console.log( null == 0)
console.log( null >= 0)

// f f f
console.log( undefined > 0)
console.log( undefined == 0)
console.log( undefined >= 0)

// ===

console.log("2" === 2)  // strict check also check datatype 