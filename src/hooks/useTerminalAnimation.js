import { useEffect, useRef, useState } from 'react';

const TERM_LINES = [
  { type: 'cmd', prompt: '$ ', text: 'whoami' },
  { type: 'out', text: 'Belén — Junior Developer' },
  { type: 'cmd', prompt: '$ ', text: 'cat skills.txt' },
  { type: 'out', text: 'HTML · CSS · JavaScript' },
  { type: 'out', text: 'React · Node.js · Python' },
  { type: 'out', text: 'Java · MySQL · Git' },
  { type: 'cmd', prompt: '$ ', text: 'echo $STATUS' },
  { type: 'val', text: 'AVAILABLE FOR HIRE ✓' },
  { type: 'cmd', prompt: '$ ', text: 'echo $ENGLISH' },
  { type: 'val', text: 'Intermediate B1 ✓' },
  { type: 'cmd', prompt: '$ ', text: '_' },
];

export function useTerminalAnimation() {
  const [lines, setLines] = useState([]);
  const termBodyRef = useRef(null);
  const lineIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const isTypingRef = useRef(false);
  const animationStartedRef = useRef(false);

  useEffect(() => {
    const typeLine = () => {
      if (lineIdxRef.current >= TERM_LINES.length) {
        return;
      }

      const line = TERM_LINES[lineIdxRef.current];

      // Línea final con solo cursor
      if (line.type === 'cmd' && line.text === '_') {
        setLines((prev) => [
          ...prev,
          {
            id: lineIdxRef.current,
            type: 'cmd',
            prompt: '$ ',
            text: '',
          },
        ]);
        return;
      }

      // Líneas de salida
      if (line.type === 'out' || line.type === 'val') {
        setLines((prev) => [
          ...prev,
          {
            id: lineIdxRef.current,
            type: line.type,
            text: line.text,
          },
        ]);
        lineIdxRef.current++;
        setTimeout(typeLine, 120);
        return;
      }

      // Líneas de comando con typing
      if (!isTypingRef.current) {
        isTypingRef.current = true;
        charIdxRef.current = 0;
        setLines((prev) => [
          ...prev,
          {
            id: lineIdxRef.current,
            type: 'cmd',
            prompt: line.prompt,
            text: '',
            isTyping: true,
          },
        ]);
      }

      // Animar caracteres
      if (charIdxRef.current < line.text.length) {
        charIdxRef.current++;
        setLines((prev) => {
          const updated = [...prev];
          const lastLine = updated[updated.length - 1];
          if (lastLine && lastLine.isTyping) {
            lastLine.text = line.text.slice(0, charIdxRef.current);
          }
          return updated;
        });
        setTimeout(typeLine, 60);
      } else {
        // Terminar de tipear esta línea
        isTypingRef.current = false;
        lineIdxRef.current++;
        setLines((prev) => {
          const updated = [...prev];
          const lastLine = updated[updated.length - 1];
          if (lastLine) {
            lastLine.isTyping = false;
          }
          return updated;
        });
        setTimeout(typeLine, 300);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStartedRef.current) {
            animationStartedRef.current = true;
            setTimeout(typeLine, 600);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (termBodyRef.current) {
      observer.observe(termBodyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { termBodyRef, lines };
}
