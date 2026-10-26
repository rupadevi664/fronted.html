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

const a=orders.filter(b=>b.status==="delivered").map(b=>b.items.reduce((sum,item)=>sum+item.price*item.quantity,0)*(1-b.discount));
console.log(a)

const result = orders
  .filter(order => order.status === "delivered")
  .map(order => ({
    customer: order.customer,
    amount: order.items.reduce((total, item) => total + item.price * item.quantity, 0) * (1 - order.discount)
  }));

console.log(result);

const result = orders
  .filter(order => order.status === "delivered")
  .map(order => ({
    customer: order.customer,
    amount: order.items.reduce((total, item) => total + item.price * item.quantity, 0) * (1 - order.discount)
  }))
  .sort((a, b) => b.amount - a.amount)
  .slice(0, 3);

console.log(result);


const result = orders
  .filter(order => order.status === "delivered")
  .reduce((total, order) => total + order.items.reduce((sum, item) => sum + item.price * item.quantity, 0) * (1 - order.discount), 0);

console.log(result);

const result = orders
  .map(order => order.items.map(item => ({
    category: item.category,
    quantity: item.quantity
  })))
  .reduce((result, items) =>
    items.reduce((result, item) => ({
      ...result,
      [item.category]: (result[item.category] || 0) + item.quantity
    }), result), {});

console.log(result);