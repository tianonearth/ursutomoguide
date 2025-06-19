document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.getElementById("mobileNav");
  const bars = document.querySelectorAll(".menu-btn .bar");
  
  menuBtn.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
    bars.forEach((bar, index) => {
      if (index === 0) bar.style.transform = mobileNav.classList.contains("active") ? "translateY(8px) rotate(45deg)" : "";
      if (index === 1) bar.style.opacity = mobileNav.classList.contains("active") ? "0" : "";
      if (index === 2) bar.style.transform = mobileNav.classList.contains("active") ? "translateY(-8px) rotate(-45deg)" : "";
    });
  });

  // Subject Scrolling
  const subLeft = document.querySelector(".subject-section .left-arrow");
  const subRight = document.querySelector(".subject-section .right-arrow");
  const subjectsScroll = document.querySelector(".subjects-scroll");

  subLeft.addEventListener("click", () => {
    subjectsScroll.scrollBy({ left: -200, behavior: 'smooth' });
  });

  subRight.addEventListener("click", () => {
    subjectsScroll.scrollBy({ left: 200, behavior: 'smooth' });
  });

  // Teacher Card Scrolling
  const teacherLeft = document.querySelector(".teacher-left");
  const teacherRight = document.querySelector(".teacher-right");
  const teacherGrid = document.querySelector(".teacher-cards-grid");

  teacherLeft.addEventListener("click", () => {
    teacherGrid.scrollBy({ left: -300, behavior: 'smooth' });
  });

  teacherRight.addEventListener("click", () => {
    teacherGrid.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Subject Filtering
  document.querySelectorAll(".subject").forEach(subject => {
    subject.addEventListener("click", () => {
      // Update active subject
      document.querySelectorAll(".subject").forEach(s => s.classList.remove("active"));
      subject.classList.add("active");
      
      // Filter teacher cards
      const selectedSubject = subject.dataset.subject;
      document.querySelectorAll(".teacher-card").forEach(card => {
        if (selectedSubject === "all") {
          card.style.display = "flex";
        } else {
          card.style.display = card.classList.contains(selectedSubject) ? "flex" : "none";
        }
      });
    });
  });
});