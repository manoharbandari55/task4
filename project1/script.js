document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach(el => {
    setTimeout(() => {
      el.classList.add("show");
    }, 200);
  });
});

const hoverCards = document.querySelectorAll(".hover-card, .icon-card");

hoverCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
