const bikes = ["Kawasaki","Harley","Royal Enfield"]
const cars = ["BMW","Audi","Rolls Royce"]

bikes.push(cars) // will return in same values

// console.log(bikes)

 const Vehicals = bikes.concat(cars)
// console.log(Vehicals);

const vehical = [...bikes,...cars]
console.log(vehical)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // will combine the array into one array with no need to worry abt depth
console.log(real_another_array)

console.log(Array.isArray("Alex")) // check if array or not
console.log(Array.from("Alex")) // converts it into array
console.log(Array.from({name: "Alex"})); // it will return empty array bez we had to tell weather we want keys or values for an array

let score1=100
let score2=100
let score3=300

console.log(Array.of(score1, score2, score3))
