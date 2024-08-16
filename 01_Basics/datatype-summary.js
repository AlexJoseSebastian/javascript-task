// two types of datatypes

// 1) primitive
 
// string,number,bigint,null, undefined,symbol,boolean

// 2) Relational (Non-primitive)
// Array,Function,Objects

//Js is a dynamic language

let userEmail; //(by default it is dynamic)

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id == anotherid);


const Bikes = ["Ninja","Hero Honda","Harley"]
let myObj ={
    name : "Alex",
    age : 22
}
const bignumber = 123456789239339992n;

const myfunction  = function(){
    console.log("Hello World");
}


console.log(typeof myfunction); // funtion data type is object function(rest other are same array,object they are called functions)
console.log(typeof Bigbignumber);

