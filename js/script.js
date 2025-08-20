const images = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.1 });

images.forEach(img => observer.observe(img));