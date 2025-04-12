// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    // Only prevent default if it's an internal anchor (for smooth scroll)
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth" });
    }
  });
});