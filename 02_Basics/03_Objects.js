/* Objects -> can be declared in 2 ways
1) litrals
2) construction

singleton -> koi bhi 'constructor' banate hai to vo singleton hota hai

# if we declare objects as 'litrals' singleton 'will not be produced'
# if we declate objects as 'constructor' 'singleton will be produced'
*/

const mysym = Symbol("key1")

const JsUser = {
    name : "Alex",
    "fullname" : "Alex sebastian",
    age : 21,
    email : "alexsebastian@gmail.com",
    [mysym] : "mykey1", // syntax for accessing as a symbol `if you want string just write mysym as it is..`
    location : "U.P."
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])

// console.log(JsUser.mysym); // don't do this
// console.log(JsUser[mysym]);

// to change the values

JsUser.email = "alex@yahoo.com"
// Object.freeze(JsUser) // it is used so that no further changes can be done or stand put

JsUser.email = "alex@lookout.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting); // it is important and will be used further output is "[Function (anonymous)]""
console.log(JsUser.greetingTwo());




