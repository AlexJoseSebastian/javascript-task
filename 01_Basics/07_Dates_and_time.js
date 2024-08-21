let mydate = new Date()
console.log(mydate)

// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleString())

console.log(typeof mydate); // it will give an object

// let myCreatedDate = new Date("2024-0-1") // months are start from 0 if single digit is defined bez it take it as array.
// let myCreatedDate = new Date("2024,0,23,5,4") 
let myCreatedDate = new Date("1-01-2024") 

// console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp =  Date.now() // give the time stamp of the paticular functions
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newdate = new Date()

console.log(newdate.getMonth()+1) // bez it start count with 0.
console.log(newdate.getDate())
console.log(newdate.getHours())

console.log(`The month is ${newdate.getMonth()+1} and the day is ${newdate.getDate()} and the time is ${newdate.getHours()}`)

newdate.toLocaleDateString('default',{
    weekday:"long"
})