const name = "Amit"
const repoCount = 23
//console.log(name + repoCount + " Value")  old method so we will not use this
//new method using back tick
console.log(`Hi my name is ${name} and i am ${repoCount} years old`)// use this
//new way to declare string
const gameName = new String('Amit kumar')
//console.log(gameName[0])
//console.log(gameName[1])
//console.log(gameName[2])
//console.log(gameName[3])
//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(10))
//console.log(gameName.indexOf('A'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-9,4))
const name2 = "    Amit     "
console.log(name2)
console.log(name2.trim())

const url = "https://amit.com/amit%20kumar"
console.log(url.replace('%20','-'))
console.log(url.includes('amit'))
const name3 = "Amit-kumar-kushwaha"
console.log(name3.split('-'))
