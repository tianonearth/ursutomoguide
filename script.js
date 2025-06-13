document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const bars = document.querySelectorAll(".menu-btn .bar");
  
    menuBtn.addEventListener("click", function() {
      // Toggle mobile menu
      mobileNav.classList.toggle("active");
      
      // Animate hamburger to 'X'
      bars[0].style.transform = mobileNav.classList.contains("active") 
        ? "translateY(8px) rotate(45deg)" 
        : "";
      bars[1].style.opacity = mobileNav.classList.contains("active") 
        ? "0" 
        : "1";
      bars[2].style.transform = mobileNav.classList.contains("active") 
        ? "translateY(-8px) rotate(-45deg)" 
        : "";
    });
  });