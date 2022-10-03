// ARRAYS
let fruits = ['mango', 'banana', 'pineapple', 'pear'];

let numbers = [1, 2, 56, 34, 100];

let bool = [true, false];

let any = ['john', 40, true, gender = {male: true, female: false}]

alert(fruits[1]);
console.log(any[3]);
var removed = fruits.pop();
// array methoods
// pop, push, find, map foreach, sort, splice, length, join, shift-unshift

console.log(removed);
fruits.push("grape");
console.log(numbers.shift());
console.log(numbers.unshift(3));

// objects
 
const person={
    fristName:"John",
    secondName:"Doe",
    gender: "male",
    age:"34",
    location:{
        state: "kaduna",
        city:  "barnawa",
        street: "Gidan Gona",
    },
    height: ['6.3 feets', '192 cm', '72 inches']
}

alert(person.secondName);

person.complexion = "dark";

console.log(person)

