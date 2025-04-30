document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu__close");
  const body = document.body;

  if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      body.style.overflow = "hidden";
    });

    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      body.style.overflow = "";
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        body.style.overflow = "";
      });
    });
  }

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tabs__btn");
  const tabPanes = document.querySelectorAll(".tabs__pane");

  if (tabButtons.length && tabPanes.length) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");

        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("tabs__btn--active"));
        tabPanes.forEach((pane) => pane.classList.remove("tabs__pane--active"));

        // Add active class to current button and pane
        this.classList.add("tabs__btn--active");
        document
          .querySelector(`[data-tab-content="${tabName}"]`)
          .classList.add("tabs__pane--active");
      });
    });
  }

  // Toast notification
  const toast = document.getElementById("toast");
  const toastClose = document.querySelector(".toast__close");

  if (toast && toastClose) {
    toastClose.addEventListener("click", () => {
      toast.classList.remove("active");
    });
  }

  // Show toast on form submission (for demo purposes)
  const demoForms = document.querySelectorAll("form");
  demoForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (toast) {
        toast.classList.add("active");
        setTimeout(() => {
          toast.classList.remove("active");
        }, 5000);
      }
    });
  });
});
