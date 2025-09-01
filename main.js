// ====== Mobile Menu Toggle ======
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// ====== Typewriter Effect ======
const el = document.getElementById("typewriter");
const text = "Web Developer";
let i = 0, deleting = false;

function typeEffect() {
  el.textContent = deleting ? text.slice(0, --i) : text.slice(0, ++i);
  if (!deleting && i === text.length) {
    deleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }
  if (deleting && i === 0) deleting = false;
  setTimeout(typeEffect, deleting ? 80 : 100);
}

typeEffect();
