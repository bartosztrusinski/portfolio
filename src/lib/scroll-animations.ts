const animatedElements = document.querySelectorAll('.slide-up');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '-10% 0px -12% 0px' },
  );
  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add('is-visible'));
}
