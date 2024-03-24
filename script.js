// Sample product data
const products = [
    { name: "Stainless Steel Cookware Set", price: "$49.99" },
    { name: "Steel Mixing Bowls", price: "$19.99" },
    { name: "Steel Spatula", price: "$9.99" }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");

    // Clear existing content
    productList.innerHTML = '';

    // Add products to the list
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Display products when the page loads
window.onload = function() {
    displayProducts();
};
