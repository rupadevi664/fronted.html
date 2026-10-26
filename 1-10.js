//splice(),slice,shift,unshift-prototype methods,in built
//sort((a,b)=>a-b)
//reduce(accumilator,currentValue)=>accumilator+currentvalue,initialvalue
//accumilator-sum chedam
//sum of array using reduce
// let arr = [10, 20, 30, 40];

// let sum = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
// );

// console.log(sum);

// const transactions = [
//   { id: 1, amount: 500, status: 'completed' },
//   { id: 2, amount: 200, status: 'pending' },
//   { id: 3, amount: 1500, status: 'completed' },
//   { id: 4, amount: 300, status: 'failed' }
// ];
// let amount=transactions.reduce((accumulator,currentValue)=>accumulator+currentValue.amount,0)
// console.log(amount)

//filter((value,idx,array)=>statement) a-b ascendent

const transactions = [
  { id: 1, amount: 500, status: 'completed' },
  { id: 2, amount: 200, status: 'pending' },
  { id: 3, amount: 1500, status: 'completed' },
  { id: 4, amount: 300, status: 'failed' }
];


let arr = [];
let evenArr = [];

for (let i = 1; i <= 50; i++) {
    arr.push(i);
}

for (let i = 2; i <= 50; i += 2) {
    evenArr.push(i);
}

//using filter-
let arr1 = [];

for (let i = 1; i <= 50; i++) {
    arr1.push(i);
}

let evenArr1= arr.filter(i => i % 2 === 0);

console.log(evenArr1);

// let amount=transactions.reduce((accumulator,currentValue)=>accumulator+currentValue.amount,0)
// console.log(amount)

//filter((value,idx,array)=>statement) a-b ascendent
const transactionss = [
    { id: 1, amount: 500, status: 'completed' },
    { id: 2, amount: 200, status: 'pending' },
    { id: 3, amount: 1500, status: 'completed' },
    { id: 4, amount: 300, status: 'failed' }
];

const completedTransactions = transactionss.filter(
    transaction => transaction.status === 'completed'
);
console.log(completedTransactions)
// let totaltransaction=completedTransactions.reduce(total,curr)=(total+curr.amount,0);

// console.log(totaltransaction);
