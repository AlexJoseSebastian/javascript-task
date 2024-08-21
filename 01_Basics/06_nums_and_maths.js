const score=400
// console.log(typeof score)

const balance = new Number(300) // this method is used to define the variable in number using number object.
// console.log(balance);

// console.log(balance.toString().length) // to make the number into stirng
// console.log(balance.toFixed(2))// how many decimal place you want

const otherNumber= 123.574

// console.log(otherNumber.toPrecision(4)); // to make the round off the numbers but it has a specific twist init and use it very carefully

const hundreds = 1000000 // use for comma sepration bydefault set in `USA` standards 
// console.log(hundreds.toLocaleString('EN-IN')) // to make it indian standards use EN-IN


// ++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // absolute value just change the sign to +ve but not the to -ve.
// console.log(Math.round(4.6)) 
// console.log(Math.ceil(4.3)) 
// console.log(Math.floor(4.5))
// console.log(Math.min(3,5,7,2,1)) 
// console.log(Math.max(4,5,2,8,9)) 


console.log(Math.random()) // will give value b/w 0 and 1
console.log((Math.random()*10)+1) // to avoide 0 

console.log(Math.floor((Math.random()*10)+1)) 

min = 10
max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // to work with both max and min at same time

