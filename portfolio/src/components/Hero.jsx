import { useEffect, useRef, useState } from 'react';
import ShimmerText from './ShimmerText';
import ClickSpark from './ClickSpark';
import FadeIn from './FadeIn';

const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Engineer', 'API Architect', 'UI Craftsman'];

function TypeWriter({ words, speed = 80, pause = 2000 }) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timer;
    if (!deleting && charIdx <= word.length) {
      timer = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (deleting && charIdx >= 0) {
      timer = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    }
    if (charIdx === word.length && !deleting) {
      timer = setTimeout(() => setDeleting(true), pause);
    }
    if (charIdx === 0 && deleting) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplayed(word.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return (
    <span style={{ color: '#00f5ff', fontFamily: 'Space Mono, monospace' }}>
      {displayed}
      <span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid #00f5ff', marginLeft: 2 }} />
    </span>
  );
}

// Grid dot background
function GridOverlay() {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1,
      backgroundImage: `
        linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      pointerEvents: 'none',
    }} />
  );
}

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes orbit { 0%{transform:rotate(0deg) translateX(120px) rotate(0deg)} 100%{transform:rotate(360deg) translateX(120px) rotate(-360deg)} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:0.8} 100%{transform:scale(2);opacity:0} }
      `}</style>
      <GridOverlay />

      {/* Decorative orbiting dots */}
      <div style={{ position: 'absolute', right: '15%', top: '30%', width: 240, height: 240, zIndex: 2 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            position: 'absolute', top: '50%', left: '50%',
            width: 8, height: 8, borderRadius: '50%',
            background: i === 0 ? '#00f5ff' : i === 1 ? '#a855f7' : '#10b981',
            animation: `orbit ${3 + i * 0.8}s linear infinite`,
            animationDelay: `${i * 1.2}s`,
            marginTop: -4, marginLeft: -4,
          }} />
        ))}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 60, height: 60, borderRadius: '50%',
          border: '1px solid rgba(0,245,255,0.3)',
          transform: 'translate(-50%,-50%)',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 120, height: 120, borderRadius: '50%',
          border: '1px solid rgba(168,85,247,0.2)',
          transform: 'translate(-50%,-50%)',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 240, height: 240, borderRadius: '50%',
          border: '1px solid rgba(16,185,129,0.1)',
          transform: 'translate(-50%,-50%)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 3, maxWidth: 900, padding: '0 40px', textAlign: 'left' }}>
        <FadeIn delay={0}>
          <div style={{
            fontFamily: 'Space Mono, monospace', fontSize: 13, color: '#00f5ff',
            letterSpacing: 4, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 40, height: 1, background: '#00f5ff', display: 'inline-block' }} />
            HELLO WORLD
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1.05,
            color: '#ffffff', marginBottom: 16,
          }}>
            I'm <ShimmerText>Alex Chen</ShimmerText>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 style={{
            fontFamily: 'Space Mono, monospace', fontSize: 'clamp(18px, 3vw, 28px)',
            color: 'rgba(255,255,255,0.7)', marginBottom: 32, fontWeight: 400,
          }}>
            <TypeWriter words={roles} />
          </h2>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p style={{
            fontFamily: 'Syne, sans-serif', fontSize: 18, lineHeight: 1.8,
            color: 'rgba(255,255,255,0.5)', maxWidth: 540, marginBottom: 52,
          }}>
            Building immersive digital experiences with clean code and creative interfaces.
            Passionate about React, Node.js, and everything in between.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <ClickSpark count={12}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                  border: 'none', color: '#030712', padding: '16px 40px',
                  borderRadius: 4, cursor: 'pointer', fontFamily: 'Space Mono, monospace',
                  fontSize: 13, fontWeight: 700, letterSpacing: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 0 30px rgba(0,245,255,0.3)',
                }}
                onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 50px rgba(0,245,255,0.5)'; }}
                onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 0 30px rgba(0,245,255,0.3)'; }}
              >
                VIEW PROJECTS
              </button>
            </ClickSpark>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)', padding: '16px 40px', borderRadius: 4,
                cursor: 'pointer', fontFamily: 'Space Mono, monospace', fontSize: 13, letterSpacing: 2,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = '#00f5ff'; e.target.style.color = '#00f5ff'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              CONTACT ME
            </button>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.75}>
          <div style={{ display: 'flex', gap: 48, marginTop: 72, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[['5+', 'Years Exp.'], ['40+', 'Projects'], ['15+', 'Clients'], ['99%', 'Satisfaction']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 32, fontWeight: 800, color: '#00f5ff' }}>{num}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
