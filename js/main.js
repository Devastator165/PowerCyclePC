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

  // Mobile Navigation Toggle / Dropdown
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.querySelector(".main-nav");
  
  if (navToggle && mainNav) {
    const arrow = navToggle.querySelector(".nav-arrow");
    
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
      
      // Toggle aria-expanded for accessibility
      navToggle.setAttribute("aria-expanded", 
        mainNav.classList.contains("is-open") ? "true" : "false"
      );
      
      // Flip the arrow icon
      if (arrow) {
        arrow.style.transform = mainNav.classList.contains("is-open") 
          ? "rotate(180deg)" 
          : "rotate(0deg)";
      }
    });
  }
});
