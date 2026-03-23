import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const coordsRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      coordsRef.current.mx = e.clientX;
      coordsRef.current.my = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animRing = () => {
      const { mx, my, rx, ry } = coordsRef.current;
      coordsRef.current.rx = rx + (mx - rx) * 0.12;
      coordsRef.current.ry = ry + (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = coordsRef.current.rx + 'px';
        ringRef.current.style.top = coordsRef.current.ry + 'px';
      }

      requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animFrame = requestAnimationFrame(animRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const handleHoverEnter = () => {
    if (cursorRef.current && ringRef.current) {
      cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
      ringRef.current.style.width = '56px';
      ringRef.current.style.height = '56px';
    }
  };

  const handleHoverLeave = () => {
    if (cursorRef.current && ringRef.current) {
      cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      ringRef.current.style.width = '36px';
      ringRef.current.style.height = '36px';
    }
  };

  return {
    cursorRef,
    ringRef,
    handleHoverEnter,
    handleHoverLeave,
  };
}
