async function getSecondProduct() {
    const response = await fetch('https://fakestoreapi.com/products/2');
    const product = await response.json();

    document.getElementById("output").innerHTML = `
      <h2>${product.title}</h2>
      <p>price: $${product.price}</p>
      <p>kategory: ${product.category}</p>
      <img src="${product.image}" width="100">
    `;
  }