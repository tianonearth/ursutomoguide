document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");

  menuBtn.addEventListener("click", function () {
    mobileNav.style.display = mobileNav.style.display === "block" ? "none" : "block";
  });
});