import { useState, useCallback } from 'react';

function Spark({ x, y, angle, color }) {
  return (
    <div style={{
      position: 'fixed', left: x, top: y, pointerEvents: 'none', zIndex: 9999,
      width: 6, height: 6, borderRadius: '50%', background: color,
      transform: `rotate(${angle}deg)`,
      animation: 'spark-fly 0.6s ease-out forwards',
    }} />
  );
}

const sparkCSS = `
@keyframes spark-fly {
  0% { transform: translate(0,0) scale(1); opacity: 1; }
  100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
}
`;

let sparkStyleAdded = false;

export default function ClickSpark({ children, color = '#00f5ff', count = 8 }) {
  const [sparks, setSparks] = useState([]);

  if (!sparkStyleAdded && typeof document !== 'undefined') {
    const el = document.createElement('style');
    el.textContent = sparkCSS;
    document.head.appendChild(el);
    sparkStyleAdded = true;
  }

  const handleClick = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    const colors = ['#00f5ff', '#a855f7', '#10b981', '#ffffff'];
    const newSparks = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x, y,
      angle: (360 / count) * i,
      color: colors[i % colors.length],
    }));
    setSparks(prev => [...prev, ...newSparks]);
    setTimeout(() => setSparks(prev => prev.filter(s => !newSparks.find(ns => ns.id === s.id))), 700);
  }, [count]);

  return (
    <div onClick={handleClick} style={{ display: 'contents' }}>
      {children}
      {sparks.map(s => <Spark key={s.id} {...s} />)}
    </div>
  );
}
