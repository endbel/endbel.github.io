import { useEffect, useRef, useState } from 'react';

export function useRevealOnScroll(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Animar skill bars si existen
            const fillBars = entry.target.querySelectorAll('.skill-bar-fill');
            if (fillBars.length > 0) {
              fillBars.forEach((bar) => {
                const width = bar.dataset.width;
                if (width) {
                  bar.style.width = width + '%';
                }
              });
            }

            // Disconnect después de que se hace visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
