//map-particula filed which is name matram kavali,address matram kavali
//filter-conditions
//reduce-numbers
const user = [
  {
    id: "usr_101",
    name: "Aria Stark",
    email: "aria@example.com",
    role: "admin",
    active: true,
    address: { city: "Winterfell", country: "Westeros", zip: "10001" },
    orders: [
      { orderId: "ord_1", total: 120.50, status: "delivered" },
      { orderId: "ord_2", total: 45.00, status: "delivered" }
    ],
    tags: ["premium", "early-adopter"]
  },
  {
    id: "usr_102",
    name: "Liam Chen",
    email: "liam.c@example.com",
    role: "customer",
    active: true,
    address: { city: "Toronto", country: "Canada", zip: "M5V 2T6" },
    orders: [
      { orderId: "ord_3", total: 210.00, status: "pending" }
    ],
    tags: ["newsletter-subscriber"]
  },
  {
    id: "usr_103",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    role: "customer",
    active: false,
    address: { city: "Madrid", country: "Spain", zip: "28001" },
    orders: [],
    tags: []
  },
  {
    id: "usr_104",
    name: "Devon Vance",
    email: "devon@example.com",
    role: "editor",
    active: true,
    address: { city: "Austin", country: "USA", zip: "78701" },
    orders: [
      { orderId: "ord_4", total: 15.99, status: "delivered" },
      { orderId: "ord_5", total: 89.00, status: "shipped" },
      { orderId: "ord_6", total: 130.00, status: "delivered" }
    ],
    tags: ["premium", "beta-tester"]
  },
  {
    id: "usr_105",
    name: "Zoya Patel",
    email: "zoya.p@example.com",
    role: "customer",
    active: true,
    address: { city: "London", country: "UK", zip: "EC1A 1BB" },
    orders: [
      { orderId: "ord_7", total: 340.00, status: "delivered" }
    ],
    tags: ["vip"]
  }
];
//uk filter map-thier name
// const result = users
//     .filter(user => user.address.country === "UK")
//     .map(user=>user.name)

// console.log(result);
// empty oder
// const result = user
//     .filter(user => user.orders.length === 0)
//     .map(user => ({
//         name: user.name,
//         email: user.email
//     }));

// console.log(result);

const result = user
    .filter(user => user.orders.some(order => order.status === "pending"))
    .map(user => ({
        name: user.name,
        email: user.email
    }));

console.log(result);