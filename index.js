// //datatypes
// String
// int/Number
// Boolean
// undefined:not given value
// null:
// variable
// var x;
// var x=9;
// let n=7 0 vaiable is value evadam opitonal,we can  def after the
// let n=8; we can redeclare
// const  cant redeclarw
// typeof is used to check the variable
 //loops
 const age=15;
 if (age>14){
    console.log("hi")
 }
 else if (age<20){
    console.log("n")
 } else{
    console.log("oh")
 }
 if(age>18){
let numbrnew=20
 }

const userobject={
    "name":"rupa",
    "roll":"!2th",
    "address":20
}
console.log(userobject["address"],userobject.class)

const arr=["1","2","3","4"]
console.log(arr[1],arr.length)

let a=0;
while (a<arr.length){
    console.log(arr[a])
    a= a+1
}
for(let i=0;i<=15; i=i+1){
    console.log(i)
}
// let i=0;
// do
// console.log(i)
// i=i+1
// while(i)
// # array=list  
// #dict=Object
// Int16Array,float= number
// block scope/local scope: def L00pala  {

// }

//

//const a=10
//console.log(a);
//const a=20
//let a=10
//console.log(a);
let numbers = [10, 5, 25, 2, 15];

numbers.sort((a, b) => a - b);

console.log(numbers);


const subtract = (a, b) => a - b

console.log(subtract(10, 5));
//push use chesi arrow function
let a = [];

for (let i = 1; i <= 5; i++) {
    a.push(i);
}

console.log(a);

//const a=10
//console.log(a);
//const a=20
//let a=10
//console.log(a);
//let numbers = [10, 5, 25, 2, 15];

//numbers.sort((a, b) => a - b);

//console.log(numbers);
// function addNums(num1,num2){
//   console.log(num1+num2)
// }
// addNums()
// console.log((1,2))

// const subtract = (a, b) => a-b

// console.log(subtract(10, 5));
// //

// const sub = (a, b) => {
//     return a - b;
// };

// console.log(sub(10, 2));
// let a = [];

// for (let i = 1; i <= 5; i++) {
//     a.push(i);
// }

// console.log(a);

// let b = [1,2,3,3,4];

// b.pop();


// console.log(b);

// let a = [];

// a.unshift(1);
// a.unshift(2);
// a.unshift(3);
// a.unshift(4);
// a.unshift(5);

// console.log(a);

// let a = [10, 20, 30, 40, 50];

// let result = a.slice(1, 4);

// console.log(result);
// console.log(a);




// let a = [10, 20, 30, 40, 50];

// a.splice(1, 2);

// console.log(a);

// let a = [10, 20, 30, 40, 50];

// a.slice(1, 2);

// console.log(a);
// let a = [10, 20, 30, 40, 50];

// a.reverse();

// console.log(a);

// let a = [];

// for (let i = 2; i <= 50; i += 2) {
//     a.push(i);
// }

// console.log(a);


// let a = [];

// for (let i = 6; i <= 50; i += 6) {
//     a.push(i);
// }

// a.reverse();

// console.log(a);
// let a = [];

// for (let i = 6; i <= 50; i += 6) {
//     a.push(i);
// }

// a.reverse();

// console.log(a);

let a = [];

for (let i = 48; i >= 6; i -= 6) {
    a.push(i);
}

console.log(a);


let b = [];

for (let i = 6; i <= 50; i += 6) {
    if (i % 4 !== 0) {
        b.push(i);
    }
}

console.log(b);