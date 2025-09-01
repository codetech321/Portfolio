// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active"); // icon change ke liye
});

//typewriter
const el = document.getElementById("typewriter");
const text = "Web Developer";

let i = 0;
let deleting = false;

function typeEffect() {
  if (!deleting) {
    // typing
    el.textContent = text.slice(0, ++i);
    if (i === text.length) {
      deleting = true;
      setTimeout(typeEffect, 2000); // 2 sec pause after complete
      return;
    }
  } else {
    // deleting
    el.textContent = text.slice(0, --i);
    if (i === 0) {
      deleting = false;
    }
  }
  setTimeout(typeEffect, deleting ? 80 : 100); // typing / deleting speed
}

typeEffect();

