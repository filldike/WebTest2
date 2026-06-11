const counters = document.querySelectorAll("[data-count]");

const animateCounter = (element) => {
  const target = Number(element.dataset.count);
  const duration = 900;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => observer.observe(counter));

document.querySelector("#sparkButton").addEventListener("click", (event) => {
  const rect = event.currentTarget.getBoundingClientRect();

  for (let index = 0; index < 22; index += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 180}px`;
    spark.style.top = `${rect.top + rect.height / 2 + (Math.random() - 0.5) * 30}px`;
    spark.style.background = index % 2 === 0 ? "var(--cyan)" : "var(--pink)";
    document.body.append(spark);
    setTimeout(() => spark.remove(), 720);
  }
});
