function myname (){
   console.log("A")
   console.log("L")
   console.log("E")
   console.log("X")
}
// myname() // This is for execution
myname  // This is for reference

function addtwonumbers (number1,number2) { // number1 and number2 are paranthesis
     console.log(number1+number2);  // it does not pass the value as it will give undefined you have to create 'return' to return the value   
}

// addtwonumbers(2,4) //these are arguments
// addtwonumbers(2,"4") // it will take it as a string


function addtwonumbers (number1,number2) { // number1 and number2 are paranthesis
    return number1+number2;
    
}

const result = addtwonumbers(3,4)
// console.log("Result :",result);

// when ever you are writing return you have to store the arguments in a variable then use console.log statement

function loginUsermessage(username ="sam") { // it will act as default value
    if(!username){
        console.log("Please enter a valid name")
        return 
    }
    return `${username} has logged in`
}

// console.log(loginUsermessage("Alex")) // it will overwrite sam
console.log(loginUsermessage()) // it will give undefined value


function shoppingCart (...num) { // here it is known as rest function
    return num
}
function shoppingCart (val1, val2,...num) { // here 1,2 value will be assingned to val1,2 rest will get displayed
    return num
}

console.log(shoppingCart(200,300,500,2000)) // here we it will store it in arrays


const user ={
    username : "Alex",
    price : 2000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and The price is ${anyobject.price}`)
}

// handleObject(user);

handleObject({   // we can directly pass the function like this
    username : "sam",
    price : 400
})

const array = [200,300,400]

function getsecondvalue (myarray){
    return myarray[2]
    
}

// console.log(getsecondvalue(array))
console.log(getsecondvalue([200,300,400]))