document.addEventListener("DOMContentLoaded", () => {
  // Product cards hover effect
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".product-card__btn").style.backgroundColor =
        "#be123c";
    });

    card.addEventListener("mouseleave", function () {
      this.querySelector(".product-card__btn").style.backgroundColor = "";
    });
  });

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".product-card__btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector(
        ".product-card__title"
      ).textContent;

      // Show toast notification
      const toast = document.getElementById("toast");
      if (toast) {
        const toastTitle = toast.querySelector(".toast__title");
        const toastMessage = toast.querySelector(".toast__message");

        if (toastTitle && toastMessage) {
          toastTitle.textContent = "Товар добавлен в корзину";
          toastMessage.textContent = productName;
        }

        toast.classList.add("active");
        setTimeout(() => {
          toast.classList.remove("active");
        }, 3000);
      }

      // Change button text temporarily
      const originalText = this.textContent;
      this.textContent = "Добавлено ✓";
      this.disabled = true;

      setTimeout(() => {
        this.textContent = originalText;
        this.disabled = false;
      }, 2000);
    });
  });

  // Filter panel toggle for mobile
  const filterPanelHeader = document.querySelector(".filter-panel__header");
  const filterPanelBody = document.querySelector(".filter-panel__body");

  if (filterPanelHeader && filterPanelBody) {
    // On mobile, hide filter panel body by default
    if (window.innerWidth < 1024) {
      filterPanelBody.style.display = "none";
    }

    filterPanelHeader.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        if (filterPanelBody.style.display === "none") {
          filterPanelBody.style.display = "block";
        } else {
          filterPanelBody.style.display = "none";
        }
      }
    });

    // Reset display on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        filterPanelBody.style.display = "block";
      } else {
        filterPanelBody.style.display = "none";
      }
    });
  }

  // Price range slider
  const priceRange = document.getElementById("priceRange");

  if (priceRange) {
    priceRange.addEventListener("input", function () {
      const value = this.value;
      const max = this.max;

      // Update the right label with the current value
      const labels = this.parentElement.querySelector(".price-slider__labels");
      if (labels) {
        const rightLabel = labels.children[1];
        rightLabel.textContent = `${value} ₽`;
      }

      // Update the background color of the slider
      const percentage = (value / max) * 100;
      this.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
    });

    // Trigger input event to initialize the slider
    priceRange.dispatchEvent(new Event("input"));
  }
});
