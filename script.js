document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.getElementById("mobileNav"); // Changed to getElementById
    const bars = document.querySelectorAll(".menu-btn .bar");
  
    menuBtn.addEventListener("click", function() {
      // Toggle mobile menu
      mobileNav.classList.toggle("active");
      
      // Animate hamburger to 'X'
      if (mobileNav.classList.contains("active")) {
        bars[0].style.transform = "translateY(8px) rotate(45deg)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
      } else {
        bars[0].style.transform = "";
        bars[1].style.opacity = "";
        bars[2].style.transform = "";
      }
    });
});