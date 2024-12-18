// Chat GPT
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("a");
  searchInput.addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase();
    let products = document.querySelectorAll(".content");
    let noResults = true;

    products.forEach((product) => {
      let productName = product.querySelector("p").textContent.toLowerCase();
      if (productName.includes(searchQuery)) {
        product.style.display = "block";
        noResults = false;
      } else {
        product.style.display = "none";
      }
    });

    const noResultsMessage = document.getElementById("no-results-message");
    if (noResults && searchQuery !== "") {
      if (!noResultsMessage) {
        let message = document.createElement("div");
        message.id = "no-results-message";
        message.textContent = "Item not available";
        document.querySelector(".content1").appendChild(message);
      }
    } else if (!noResults) {
      if (noResultsMessage) {
        noResultsMessage.remove();
      }
    }
  });
});

