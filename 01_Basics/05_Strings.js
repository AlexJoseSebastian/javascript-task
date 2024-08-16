const name="Alex "
const repocount = 30

// console.log(name + repocount + " value") don't use this method

console.log(`My name is ${name} and my repocount is ${repocount}`); // use this instead.

// another way to initialize string
const gameName = new String('Alex-seb-com')

console.log(gameName[0]);
console.log(gameName.__proto__) // will give object

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('x'))

const newString = gameName.substring(0,2) // will not accept -ve index value
console.log(newString)

const anotherString = gameName.slice(-3,1) // will  accept -ve index value
console.log(anotherString);

const newSting1 = "  Alex   "
console.log(newSting1)
console.log(newSting1.trim())

const url = "https://alex.com/alex%20sebastian"

console.log(url.replace('%20','-'))

console.log(url.includes('alex'))

console.log(gameName.split('-')) // to convert it into array


