let cart = [
  { id: 1, productName: "Phone", quantity: 1, unitPrice: 5400 },
  { id: 2, productName: "TV", quantity: 1, unitPrice: 4200 },
  { id: 3, productName: "Fridge", quantity: 3, unitPrice: 3500 },
  { id: 4, productName: "Table", quantity: 4, unitPrice: 800 },
  { id: 4, productName: "Oven", quantity: 2, unitPrice: 950 },
  { id: 5, productName: "Book", quantity: 10, unitPrice: 35 },
];

function addToCart(cart) {
  cart.push({ id: 6, productName: "Chair", quantity: 10, unitPrice: 85 });
}
addToCart(cart);
//cart.map(product=>console.log(product.id+" "+product.productName+" "+product.unitPrice))

let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.quantity,
  0
);
console.log(total);

let listQuantityOver2 = cart.filter((product) => product.quantity >= 2);
//console.log(listQuantityOver2)
// console.log(cart)

// let sayi = 10

// function sum(num){
//     num+=1
// }
// sum(sayi)
// console.log(sayi)
