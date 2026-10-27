import React, { useEffect, useRef } from 'react';

export default function MatrixRain({ active, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const letters = '01HARISHRK0123456789ABCDEF01010101 CIT CHENNAI CSE AI DSA LEETCODE 1679';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 7, 12, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#10b981'; // emerald green
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none bg-black/60 backdrop-blur-sm transition-opacity">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-6 right-6 pointer-events-auto">
        <button
          onClick={onClose}
          className="px-4 py-1.5 bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-mono rounded hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2"
        >
          <span>✕ Exit Matrix Mode (ESC or Click)</span>
        </button>
      </div>
    </div>
  );
}
