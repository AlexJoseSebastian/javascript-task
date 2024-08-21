// Array

// () -> paranthesis
// [] -> brackets we write array in this type of brackets in js
// {} -> curly braces/brackets

// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies.
// shallow copies -> A shallow copy is a copy whose share a same reference points ( means changes happen in the original array)
// deep copies -> propreties do not share the same references and had copies.

const myArr = [0,1,2,3,4,5];
const myHeros = ["IronMan","??"]

const myArr2 = new Array (1,2,3,4,5)
// console.log(myArr[2])

// myArr.push(6) // use to push the element in last
// myArr.push(7)
// myArr.pop() // delete the element from the back
// console.log(myArr)

myArr.unshift(9) // use to add element in front
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(4))

const newArr = myArr.join() // changes the type to string

console.log(newArr);
console.log(typeof newArr);


// slice and splice

console.log("A ",myArr);


const myth1 = myArr.slice(1,3) // slice do not manipulate original array it manipulate its copy.
console.log(myth1)
console.log("B ",myArr)

const myth2 = myArr.splice(1,3) // splice manipulate original array and removes the number which is given between the ranges (0,1,2,3,4) range array.splice(1,2) output(0,3,4).
console.log("C ",myArr);
console.log(myth2)


