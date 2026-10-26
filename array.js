let objA={
  "name":"rupa",
  "age":12,
  "course":"cse"
}
console.log(objA.name)
console.log(objA["name"])
console.log(Object.keys(objA))
console.log(Object.values(objA));
//object destructuring
const { name, age } = objA;

console.log(name);
console.log(age);

//strings
const course="pythonFsd"
console.log(name[-1]); // R
console.log(name[1]); // u
console.log(name[2]); // p
console.log(name[3]); // a
//at using negative
console.log(name.at(-1));

//reverse
let str = "Rupa";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
}

console.log(result);
reverse
let str = "Rupa";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
}

console.log(result);
//let arr = ["I", "am", "Rupa"];

//let result = arr.join(" ");

//let result = str.split(" ");

//console.log(result);

//let str = "Hello World";

//let result = str.split(" ");
//print(result)
let str = "Hello World";

let reverse = str.split("").reverse().join("");

console.log(reverse);

 //total sum of array