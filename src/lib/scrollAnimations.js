// Intersection Observer for scroll animations
export const observeElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-observe attribute
  const elementsToObserve = document.querySelectorAll("[data-observe]");
  elementsToObserve.forEach((el) => observer.observe(el));

  return observer;
};

// Custom hook for scroll animations
export const useScrollAnimation = () => {
  if (typeof window !== "undefined") {
    const observer = observeElements();
    return () => observer.disconnect();
  }
};