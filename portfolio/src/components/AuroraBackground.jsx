import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrameId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const orbs = [
      { x: 0.2, y: 0.3, r: 0.4, color: '0,245,255', speed: 0.0008 },
      { x: 0.8, y: 0.6, r: 0.35, color: '139,92,246', speed: 0.0006 },
      { x: 0.5, y: 0.1, r: 0.3, color: '16,185,129', speed: 0.001 },
      { x: 0.1, y: 0.8, r: 0.25, color: '0,245,255', speed: 0.0007 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb, i) => {
        const x = (orb.x + Math.sin(t * orb.speed * 1000 + i * 2) * 0.15) * canvas.width;
        const y = (orb.y + Math.cos(t * orb.speed * 1000 + i * 1.5) * 0.12) * canvas.height;
        const radius = orb.r * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.15)`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.06)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      t += 1;
      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none'
      }}
    />
  );
}
