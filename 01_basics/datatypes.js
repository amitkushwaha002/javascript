"use strict" // treat all java script code as a newer version
//alert(3+3) we are using nodejs not a browser
console.log(3+3);
console.log("Amit")
let name="Amit"
let age=18
let isloggedIN=false
let state;

//number=>2 to power 53
//bigint
//string=>""
//boolean => true/false
//null=> standalone value output will be object
//undefined => output will be undefined bcoz its a type
//symbol=> unique
console.log(state)
//there are two data types
//1.Primitive data type
//2.Non primitive / Reference type
//1.primitive data type(1.String 2. Number 3. boolean 4.BigInt 5.null 6.undefined 7.symbol)
//2.Non primitive ( 1.Array 2.function 3.object)
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const id2 = Symbol('123')
const heros = ["a", "b", "c"]
let myObj = {
    name: "Amit", age: 23,
}
const myFunction = function(){
    console.log("Hello, world!")
}
console.log(typeof(score))
console.log(typeof(scoreValue))
console.log(typeof(isLoggedIn))
console.log(typeof(outsideTemp))
console.log(typeof(userEmail))
console.log(typeof(id))
console.log(typeof(id2))
console.log(typeof(heros))
console.log(typeof(myObj))
console.log(typeof(myFunction))

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Memory(1.Stack memory 2.Heap memory)
//Stack - primitive data type
//Heap - Non primitive data type
let marks = 90
let newMarks = marks//it will get the copy of marks variable
newMarks = 80
console.log(newMarks)
console.log(marks)

let userOne = {
    email: "amit@google.com",
    upi: "upi@ybl"
}
let userTwo = userOne
userTwo.email = "ggu@google.com"
console.log(userOne.email)
console.log(userTwo.email)
