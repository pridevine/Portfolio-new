import FadeIn from './FadeIn';
import GlowCard from './GlowCard';

const timeline = [
  { year: '2019', role: 'Junior Developer', company: 'TechStartup Co.', desc: 'Started building React frontends and REST APIs.' },
  { year: '2021', role: 'Mid-level Full Stack', company: 'ProductLab Inc.', desc: 'Led a team of 3 to ship a SaaS product with 10k users.' },
  { year: '2023', role: 'Senior Full Stack', company: 'CloudScale Ltd.', desc: 'Architected microservices handling 1M+ requests/day.' },
  { year: '2024', role: 'Freelance & Open Source', company: 'Self-Employed', desc: 'Building products, contributing to OSS, and consulting.' },
];

export default function About() {
  return (
    <section id="about" style={{ minHeight: '100vh', position: 'relative', zIndex: 10, padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color: '#00f5ff', letterSpacing: 4, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 30, height: 1, background: '#00f5ff', display: 'inline-block' }} />
              01. ABOUT
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
              Crafting Digital<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,245,255,0.6)' }}>Experiences</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Left: Bio */}
          <div>
            <FadeIn delay={0.1} direction="left">
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', marginBottom: 32 }}>
                I'm a full stack developer with over 5 years of experience building web applications from the ground up. I specialize in <span style={{ color: '#00f5ff' }}>React</span>, <span style={{ color: '#a855f7' }}>Node.js</span>, and <span style={{ color: '#10b981' }}>cloud infrastructure</span>.
              </p>
              <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', marginBottom: 48 }}>
                When I'm not coding, I'm contributing to open source, writing technical articles, or exploring the intersection of design and engineering.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
                {[
                  ['Location', 'San Francisco, CA'],
                  ['Available', 'Freelance / Full-time'],
                  ['Email', 'alex@devfolio.io'],
                  ['GitHub', '@alexchen-dev'],
                ].map(([label, val]) => (
                  <div key={label} style={{ borderLeft: '2px solid rgba(0,245,255,0.3)', paddingLeft: 16 }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{val}</div>
                  </div>
                ))}
              </div>

              <button style={{
                background: 'transparent', border: '1px solid rgba(0,245,255,0.4)',
                color: '#00f5ff', padding: '12px 32px', borderRadius: 4,
                cursor: 'pointer', fontFamily: 'Space Mono, monospace', fontSize: 12, letterSpacing: 2,
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                DOWNLOAD CV
              </button>
            </FadeIn>
          </div>

          {/* Right: Timeline */}
          <div>
            <FadeIn delay={0.2} direction="right">
              <div style={{ position: 'relative', paddingLeft: 24 }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg, #00f5ff, #a855f7, transparent)' }} />
                {timeline.map((item, i) => (
                  <div key={i} style={{ position: 'relative', marginBottom: 40 }}>
                    <div style={{
                      position: 'absolute', left: -28, top: 4, width: 10, height: 10,
                      borderRadius: '50%', background: '#00f5ff',
                      boxShadow: '0 0 12px #00f5ff',
                    }} />
                    <GlowCard style={{ marginBottom: 0 }}>
                      <div style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: '#00f5ff', letterSpacing: 2 }}>{item.year}</span>
                          <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(168,85,247,0.8)', letterSpacing: 1 }}>{item.company}</span>
                        </div>
                        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 6 }}>{item.role}</div>
                        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </GlowCard>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
