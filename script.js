document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input"); // Search input field
  const products = document.querySelectorAll(".content"); // Product containers
  const productContainer = document.querySelector(".content1"); // Parent container for products

  // Create a message element for "Item not available"
  const noResultsMessage = document.createElement("p");
  noResultsMessage.textContent = "Item is not in stock right now.";
  noResultsMessage.style.textAlign = "center";
  noResultsMessage.style.fontSize = "18px";
  noResultsMessage.style.color = "red";
  noResultsMessage.style.display = "none";
  productContainer.appendChild(noResultsMessage);

  // Add event listener to the search input
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim(); // Get user input in lowercase
    let found = false; // Track if any product matches

    // Loop through all products and check for matches
    products.forEach(product => {
      const productName = product.querySelector("p").textContent.toLowerCase(); // Product name

      if (productName.includes(query)) {
        product.style.display = "block"; // Show matching product
        found = true;
      } else {
        product.style.display = "none"; // Hide non-matching product
      }
    });

    // Show or hide "Item not available" message
    if (found || query === "") {
      noResultsMessage.style.display = "none";
    } else {
      noResultsMessage.style.display = "block";
    }
  });
});
