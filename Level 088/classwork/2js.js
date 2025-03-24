const container = document.getElementById("product-container");

fetch("https://fakestoreapi.com/products/2") 
    .then(response => response.json())
    .then(product => {
        container.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.title}" width="200">
                <h3>${product.title}</h3>
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Rating:</strong> ${product.rating.rate} ⭐ (${product.rating.count} reviews)</p>
            </div>
        `;
    })
    .catch(error => {
        container.innerHTML = "<p>Error loading product data.</p>";
        console.error("Error fetching product:", error);
    });