function findProductPrice(products, name) {
  if (!products || products.length === 0) return -1

  let l = 0, r = products.length -1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    let currentProduct = products[mid]

    if (currentProduct.name === name) return currentProduct.price
    else if (currentProduct.name > name) r = mid - 1
    else l = mid + 1
  }

  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
