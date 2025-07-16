// Lazy loading utility for images
export const lazyLoadImage = (imgElement) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    imageObserver.observe(imgElement);
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    imgElement.src = imgElement.dataset.src;
    imgElement.classList.remove('lazy');
  }
};

// Initialize lazy loading for all images with data-src attribute
export const initLazyLoading = () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(lazyLoadImage);
};

// Add loading="lazy" attribute to images
export const addLazyLoading = () => {
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.dataset.src) {
      img.loading = 'lazy';
    }
  });
}; 