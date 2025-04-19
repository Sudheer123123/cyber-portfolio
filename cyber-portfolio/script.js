// Typing effect for About section
const roles = [
    "Cybersecurity Analyst",
    "Python Security Scripter",
    "Threat Detection Specialist",
    "SIEM Engineer",
    "Risk Assessor"
  ];
  let i = 0, j = 0, current = "", isDeleting = false;
  
  function typeEffect() {
    const element = document.getElementById("typed-text");
    if (!element) return;
  
    if (isDeleting) {
      current = roles[i].substring(0, j--);
    } else {
      current = roles[i].substring(0, j++);
    }
  
    element.innerHTML = `<span class="highlight">${current}</span>`;
  
    if (!isDeleting && j === roles[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(typeEffect, 200);
    } else {
      setTimeout(typeEffect, isDeleting ? 60 : 100);
    }
  }
  typeEffect();
  
  // DARK MODE TOGGLE
const toggle = document.getElementById("toggle-dark");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});


// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
