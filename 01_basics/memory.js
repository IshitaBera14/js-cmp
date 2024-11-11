// stack(primitive) heap(non primitive)

let  a = "ishita"
let aa = a
aa = "bera"

console.log(aa)
console.log(a)

let user1 = {
    email: "user@google.com",
    upi:"user@abc"
}

let user2 = user1

user2.email = "ishita@google.com"

console.log(user1.email)
console.log(user2.email)
