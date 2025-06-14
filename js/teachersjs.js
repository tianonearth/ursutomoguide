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



----------------------------------------------------------------------------------------------------- \\headerscript
// Sample Data
// Teacher Data
const teachers = {
  math: [
    { name: "Mr. Lee", specialty: "Algebra", image: "https://via.placeholder.com/70?text=Mr.Lee" },
    { name: "Ms. Yung", specialty: "Calculus", image: "https://via.placeholder.com/70?text=Ms.Yung" }
  ],
  biology: [
    { name: "Mr. Tom", specialty: "Genetics", image: "https://via.placeholder.com/70?text=Mr.Tom" },
    { name: "Ms. Gina", specialty: "Ecology", image: "https://via.placeholder.com/70?text=Ms.Gina" }
  ],
  // Add other subjects...
};

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const cardsContainer = document.getElementById('teacherCards');

// Load Teachers for a Subject
function loadTeachers(subject) {
  cardsContainer.innerHTML = '';
  
  if (teachers[subject]) {
    teachers[subject].forEach(teacher => {
      const card = document.createElement('div');
      card.className = 'teacher-card';
      card.innerHTML = `
        <img src="${teacher.image}" alt="${teacher.name}">
        <div>
          <h3>${teacher.name}</h3>
          <p>${teacher.specialty}</p>
        </div>
      `;
      cardsContainer.appendChild(card);
    });
  } else {
    cardsContainer.innerHTML = '<p>No teachers found for this subject.</p>';
  }
}

// Tab Click Event
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    loadTeachers(tab.dataset.subject);
  });
});

// Load default (Math)
loadTeachers('math');