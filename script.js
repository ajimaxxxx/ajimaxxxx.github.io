// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Skills show/hide
function toggleSkills() {
  document.getElementById("skillList").classList.toggle("hidden");
}

// Read More / Less with smooth slide
function toggleMore(btn) {
  const container = btn.previousElementSibling;
  container.classList.toggle("show");
  btn.textContent = container.classList.contains("show") ? "Read Less" : "Read More";
}