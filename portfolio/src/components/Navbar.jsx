import { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px 40px' : '22px 40px',
      background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
      transition: 'all 0.4s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 20, fontWeight: 700, color: '#00f5ff', letterSpacing: 2 }}>
        &lt;DEV/&gt;
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 36, fontFamily: 'Space Mono, monospace', fontSize: 13 }}>
        {links.map(link => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: active === link ? '#00f5ff' : 'rgba(255,255,255,0.6)',
              fontFamily: 'Space Mono, monospace', fontSize: 13, letterSpacing: 1,
              position: 'relative', padding: '4px 0',
              transition: 'color 0.3s',
            }}
          >
            {active === link && (
              <span style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, #00f5ff, #a855f7)',
              }} />
            )}
            {link}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo('Contact')}
        style={{
          background: 'transparent', border: '1px solid #00f5ff', color: '#00f5ff',
          padding: '8px 24px', borderRadius: 4, cursor: 'pointer',
          fontFamily: 'Space Mono, monospace', fontSize: 12, letterSpacing: 1,
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.target.style.background = 'rgba(0,245,255,0.1)'; e.target.style.boxShadow = '0 0 20px rgba(0,245,255,0.3)'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.boxShadow = 'none'; }}
      >
        HIRE ME
      </button>
    </nav>
  );
}
