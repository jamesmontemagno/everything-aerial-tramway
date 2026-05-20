const jumpChips = document.querySelectorAll(".jump-chip");
const timelineCards = document.querySelectorAll(".timeline-card");

function setActiveMilestone(targetId) {
  jumpChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.target === targetId);
  });

  timelineCards.forEach((card) => {
    card.classList.toggle("active", card.id === targetId);
  });
}

jumpChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const targetId = chip.dataset.target;
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    setActiveMilestone(targetId);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      setActiveMilestone(visibleEntry.target.id);
    }
  },
  {
    rootMargin: "-20% 0px -45% 0px",
    threshold: [0.35, 0.6, 0.9],
  }
);

timelineCards.forEach((card) => observer.observe(card));
