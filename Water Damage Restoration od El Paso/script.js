// call button
function call_now() {
  window.location.href = "tel:+1 (915) 350-9289";
}

// fade in effect
document.addEventListener("scroll", function() {
  const items = document.querySelectorAll(".fade_in");
  items.forEach(item => {
    const box = item.getBoundingClientRect();
    if (box.top < window.innerHeight - 50) {
      item.classList.add("visible");
    }
  });
});

// animated counters
const counters = document.querySelectorAll(".counter");
let startedCounters = false;

function startCounters() {
  if (startedCounters) return;
  startedCounters = true;

  counters.forEach(counter => {
    let target = Number(counter.dataset.target);
    let current = 0;
    let speed = target / 80;

    let timer = setInterval(() => {
      current += speed;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 20);
  });
}

window.addEventListener("load", startCounters);


window.addEventListener("scroll", function() {
  const section = document.querySelector(".trust_section");
  if (!section) return;

  const position = section.getBoundingClientRect().top;
  if (position < window.innerHeight - 100) {
    startCounters();
  }
});
function toggleMenu() {
  const menu = document.getElementById("mobileNav");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("show");
}
