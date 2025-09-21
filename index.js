// Assignment 2: Shopping Cart System
// 1. Array of product objects
const cart = [
  { name: "Shirt", price: 25, quantity: 2 },
  { name: "Jeans", price: 40, quantity: 1 },
  { name: "Shoes", price: 60, quantity: 1 }
];

// 2. Calculate total and display each item's subtotal
let total = 0;

for (const item of cart) {
  const subtotal = item.price * item.quantity;
  console.log(`${item.name} - $${item.price} x ${item.quantity} = $${subtotal}`);
  total += subtotal; // add each subtotal to the total
}

// 3. Apply 10% discount if total is over $100
let finalTotal = total;
if (total > 100) {
  const discount = total * 0.10;
  finalTotal = total - discount;
  console.log(`Discount applied: $${discount.toFixed(2)}`);
}

// 4. Display the final total
console.log(`Final Total: $${finalTotal.toFixed(2)}`);
