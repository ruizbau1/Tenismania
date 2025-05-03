const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    if (name.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
