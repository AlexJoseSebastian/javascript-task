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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive datatype) , Heap(Non-primitive datatype)

let myYoutubename = "Alexdotcom";

let anothername = myYoutubename;
anothername = "chai with code"

console.log(myYoutubename) 
console.log(anothername) // stact will not change the original value but will change the copied value

// objects
let User1 =  {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let User2=User1

User2.email="alex@gmail.com"

console.log(User1.email);
console.log(User2.email);  // In Heap you will get the `referrence of original data` So. the `changes which are made are in the original data`
