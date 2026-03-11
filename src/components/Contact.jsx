import { useState } from 'react';
import FadeIn from './FadeIn';
import GlowCard from './GlowCard';
import ClickSpark from './ClickSpark';

const socials = [
  { label: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z', color: '#00f5ff' },
  { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: '#a855f7' },
  { label: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: '#10b981' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputStyle = (field) => ({
    width: '100%', background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? '#00f5ff' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 6, padding: '14px 18px', color: '#fff',
    fontFamily: 'Syne, sans-serif', fontSize: 15,
    outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s',
    boxShadow: focused === field ? '0 0 20px rgba(0,245,255,0.08)' : 'none',
  });

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 10, padding: '120px 40px 80px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: 80, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color: '#00f5ff', letterSpacing: 4, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              <span style={{ width: 30, height: 1, background: '#00f5ff', display: 'inline-block' }} />
              04. CONTACT
              <span style={{ width: 30, height: 1, background: '#00f5ff', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Let's Build Something<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(0,245,255,0.6)' }}>Together</span>
            </h2>
            <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
              Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }}>
          {/* Left info */}
          <FadeIn delay={0.1} direction="left">
            <div>
              {[
                { label: 'EMAIL', value: 'alex@devfolio.io', color: '#00f5ff' },
                { label: 'PHONE', value: '+1 (415) 555-0192', color: '#a855f7' },
                { label: 'TIMEZONE', value: 'PST (UTC-8)', color: '#10b981' },
                { label: 'RESPONSE TIME', value: 'Within 24 hours', color: '#f59e0b' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 32, paddingLeft: 20, borderLeft: `2px solid ${item.color}44` }}>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: item.color, letterSpacing: 3, marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.75)' }}>{item.value}</div>
                </div>
              ))}

              <div style={{ marginTop: 48 }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, marginBottom: 20 }}>FIND ME ON</div>
                <div style={{ display: 'flex', gap: 16 }}>
                  {socials.map(s => (
                    <a key={s.label} href="#" style={{
                      width: 44, height: 44, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.4)', transition: 'all 0.3s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; e.currentTarget.style.boxShadow = `0 0 20px ${s.color}33`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.2} direction="right">
            <GlowCard>
              <div style={{ padding: '36px 36px' }}>
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✨</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#00f5ff', marginBottom: 8 }}>Message Sent!</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>I'll get back to you soon.</div>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, display: 'block', marginBottom: 8 }}>NAME</label>
                        <input
                          style={inputStyle('name')}
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused('')}
                          placeholder="Alex Chen"
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, display: 'block', marginBottom: 8 }}>EMAIL</label>
                        <input
                          style={inputStyle('email')}
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused('')}
                          placeholder="alex@example.com"
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2, display: 'block', marginBottom: 8 }}>MESSAGE</label>
                      <textarea
                        rows={5}
                        style={{ ...inputStyle('message'), resize: 'none' }}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <ClickSpark count={10}>
                      <button
                        onClick={handleSubmit}
                        style={{
                          width: '100%', background: 'linear-gradient(135deg, #00f5ff22, #a855f722)',
                          border: '1px solid rgba(0,245,255,0.4)', color: '#00f5ff',
                          padding: '16px', borderRadius: 6, cursor: 'pointer',
                          fontFamily: 'Space Mono, monospace', fontSize: 13, fontWeight: 700, letterSpacing: 3,
                          transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #00f5ff33, #a855f733)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,255,0.2)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #00f5ff22, #a855f722)'; e.currentTarget.style.boxShadow = 'none'; }}
                      >
                        SEND MESSAGE →
                      </button>
                    </ClickSpark>
                  </>
                )}
              </div>
            </GlowCard>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <div style={{
            marginTop: 100, paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
          }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 14, color: '#00f5ff', letterSpacing: 2 }}>
              &lt;DEV/&gt;
            </div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>
              Crafted with React & Node.js — {new Date().getFullYear()}
            </div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
              ↑ <span style={{ cursor: 'pointer', color: 'rgba(0,245,255,0.5)' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
