/* PowerCyclePC — main.js
   Entry point for site behavior. Keep individual features in separate files
   (see js/modules/) and import or include them here as the site grows. */

document.addEventListener("DOMContentLoaded", () => {
  // Automatically keep the footer year current.
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth-scroll for in-page anchor links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
