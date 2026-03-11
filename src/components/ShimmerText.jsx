import { useEffect, useRef } from 'react';

const style = `
@keyframes shimmer-move {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.shimmer-text {
  background: linear-gradient(
    90deg,
    #00f5ff 0%, #00f5ff 30%,
    #ffffff 45%, #ffffff 50%,
    #a855f7 60%, #a855f7 70%,
    #00f5ff 85%, #00f5ff 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer-move 4s linear infinite;
}
`;

export default function ShimmerText({ children, className = '' }) {
  const styleRef = useRef(null);
  useEffect(() => {
    if (!document.getElementById('shimmer-style')) {
      const el = document.createElement('style');
      el.id = 'shimmer-style';
      el.textContent = style;
      document.head.appendChild(el);
    }
  }, []);

  return <span className={`shimmer-text ${className}`}>{children}</span>;
}
