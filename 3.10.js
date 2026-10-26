const orders = [
  {
    id: 101,
    customer: "Rahul",
    city: "Hyderabad",
    items: [
      { name: "Laptop", category: "Electronics", price: 70000, quantity: 1 },
      { name: "Mouse", category: "Accessories", price: 1200, quantity: 2 }
    ],
    discount: 0.10,
    status: "delivered"
  },
  {
    id: 102,
    customer: "Priya",
    city: "Mumbai",
    items: [
      { name: "Phone", category: "Electronics", price: 45000, quantity: 1 },
      { name: "Case", category: "Accessories", price: 1500, quantity: 1 }
    ],
    discount: 0.05,
    status: "delivered"
  },
  {
    id: 103,
    customer: "Arjun",
    city: "Hyderabad",
    items: [
      { name: "Keyboard", category: "Accessories", price: 3500, quantity: 1 },
      { name: "Monitor", category: "Electronics", price: 18000, quantity: 2 }
    ],
    discount: 0,
    status: "cancelled"
  },
  {
    id: 104,
    customer: "Sneha",
    city: "Bangalore",
    items: [
      { name: "Tablet", category: "Electronics", price: 30000, quantity: 1 },
      { name: "Headphones", category: "Accessories", price: 5000, quantity: 1 }
    ],
    discount: 0.15,
    status: "delivered"
  },
  {
    id: 105,
    customer: "Karan",
    city: "Mumbai",
    items: [
      { name: "Laptop", category: "Electronics", price: 85000, quantity: 1 },
      { name: "Bag", category: "Accessories", price: 2500, quantity: 1 }
    ],
    discount: 0.10,
    status: "delivered"
  }
];
//const deliveredOrders = orders.filter(order => order.status === "delivered");

//console.log(deliveredOrders);

//If you want delivered orders from Mumbai city, use two conditions in filter()

//const result = orders.filter(
//  order => order.status === "delivered" && order.city === "Mumbai"
//);

//console.log(result);

// const result1=orders.map((order)=>([order.id,order.customer,order.id]));
// console.log(result1);


// let tota = orders.map((order) => ({
//     customerName:order.customer,
//     totalPrice:order.items.reduce((tota,item)=>{
//       if(order.discount===0){
//         return tota+item.price;
//         }else{
//           return tota+(item.price * order.discount);
//         }
//         },0)
//       }));
//   console.log(tota);

//return only highest price and their amount




