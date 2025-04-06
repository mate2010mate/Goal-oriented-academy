async function getAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    let html = "";
    for (let product of products) {
      html += `
        <h2>${product.title}</h2>
        <p>price: $${product.price}</p>
        <p>kategory: ${product.category}</p>
        <img src="${product.image}" width="100">
        <hr>
      `;
    }

    document.getElementById("output").innerHTML = html;
  }