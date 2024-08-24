// const tinderUser = new Object() // this is an singleton object

 const tinderUser = {} // It's an non singleton object

// both of their output will be same `{}-> empty object`


tinderUser.id ="1233#adjf"
tinderUser.name = "sammy"
tinderUser.isLoggedIn= false

// console.log(tinderUser);
 
// nested object example
const regulerUser = {
    email : "alex@goole.com",
    fullname:{
        userfirstname : "Alex",
        userlastname : "sebastian"
    },
    age : 21 
}

// console.log(regulerUser.fullname.userfirstname)

/* to combine an object we have two method 
1) assing
2) shatter method 
*/

const obj1 = {1 : "a", 2 : "b" }
const obj2 = {3 : "a", 4 : "b" }
const obj3 = {5 : "a", 6 : "b" }

const obj4 = Object.assign({},obj1,obj2,obj3); // we are using {} so that it will give the correct merge object

// console.log(obj4);

// shatter method mostly used and new
const obj5 ={...obj1,...obj2,...obj3}
// console.log(obj5);

const user =[
    {
        id : 1,
        email : "a@google.com"
    },
    {
        id : 2,
        email : "l@google.com"
    },
    {
        id : 3,
        email : "e@google.com"
    },
    {
        id : 4,
        email : "x@google.com"
    }
]

user[1].email // [] -> it is refered to as object here
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    coursename :  "javascript",
    price : "999",
    courseinstructor : "Hitesh"
}

// can be accessed in 2 ways
// course.courseinstructor  // not much used

// const {courseinstructor} = course // way cleaner method
// console.log(courseinstructor);


const {courseinstructor:Instructor} = course // it is called destructor used in react 
console.log(Instructor);

// APIs
// it is an json format (object only)
// {
//     "name":"alex",
//     "email" : "a@gmail.com",
//     "course" : "js"
// }
// can also be written like this.
[
    {},
    {},
    {}
]

