const name = "Ishita"
const repoCount = 50
/*
//console.log(name + repoCount + " Hii")  //old

//new   (`` bastics)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
*/
//another way of declaring string
const fullName = new String('Ishita-Bera')

//console.log(fullName[0])
//console.log(fullName.__proto__)
/*
// all are string methods
console.log(fullName.length)
console.log(fullName.toUpperCase());
console.log(fullName.charAt(2));
console.log(fullName.indexOf('a'))  */

const newString = fullName.substring(0,4)
//console.log(newString)

const newString2 = fullName.slice(-11, 4)
console.log(newString2)