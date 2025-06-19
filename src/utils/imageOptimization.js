/**
 * Utilitaire d'optimisation des images
 * Ce fichier contient des fonctions pour précharger et optimiser les images
 */

// Précharge les images importantes au démarrage de l'application
export const preloadCriticalImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(
      (src) => 
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );
};

// Charge progressivement les images non critiques
export const lazyLoadImage = (src, imgRef) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = src;
          observer.unobserve(imgRef.current);
        }
      });
    }, { rootMargin: '100px' });
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  } else {
    // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
    if (imgRef.current) {
      imgRef.current.src = src;
    }
  }
};