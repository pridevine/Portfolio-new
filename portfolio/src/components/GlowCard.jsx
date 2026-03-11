import { useRef, useEffect } from 'react';

const css = `
@keyframes border-rotate {
  0% { --angle: 0deg; }
  100% { --angle: 360deg; }
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.glow-card-wrapper {
  position: relative;
  border-radius: 16px;
  padding: 1px;
  background: conic-gradient(from var(--angle), transparent 70%, #00f5ff, #a855f7, transparent);
  animation: border-rotate 4s linear infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.glow-card-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,245,255,0.15);
}
.glow-card-inner {
  background: rgba(3,7,18,0.95);
  border-radius: 15px;
  backdrop-filter: blur(12px);
  width: 100%;
  height: 100%;
}
`;

export default function GlowCard({ children, className = '', style = {} }) {
  useEffect(() => {
    if (!document.getElementById('glowcard-style')) {
      const el = document.createElement('style');
      el.id = 'glowcard-style';
      el.textContent = css;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <div className={`glow-card-wrapper ${className}`} style={style}>
      <div className="glow-card-inner">
        {children}
      </div>
    </div>
  );
}
