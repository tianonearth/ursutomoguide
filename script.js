document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.getElementById("mobileNav");
  
    menuBtn.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
    });
  });