const parent = document.getElementById("parent");
let products = [];
let currentIndex = 0;


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data; 
        showSlide(currentIndex); 
        setInterval(() => changeSlide(1), 3000); 
    });

function showSlide(index) {
    if (products.length === 0) return; 
    
    const product = products[index];
    parent.innerHTML = `
        <div>
            <img src="${product.image}" alt="${product.title}" width="200">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Rating:</strong> ${product.rating.rate}  (${product.rating.count} reviews)
        </div>
    `;
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + products.length) % products.length;
    showSlide(currentIndex);
}