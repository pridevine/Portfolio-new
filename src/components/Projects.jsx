import { useState } from 'react';
import FadeIn from './FadeIn';
import GlowCard from './GlowCard';
import ClickSpark from './ClickSpark';

const projects = [
  {
    title: 'NeuralDash',
    desc: 'Real-time analytics dashboard powered by WebSockets and D3.js visualizations. Handles 100k+ concurrent data streams with sub-50ms latency.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js', 'PostgreSQL'],
    color: '#00f5ff',
    year: '2024',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'CloudSync API',
    desc: 'RESTful & GraphQL API gateway with JWT auth, rate limiting, and multi-cloud storage orchestration. Deployed on Kubernetes.',
    tags: ['Node.js', 'GraphQL', 'Redis', 'Docker', 'K8s'],
    color: '#a855f7',
    year: '2024',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'PixelForge',
    desc: 'Browser-based design tool for creating UI mockups with an AI assist. 3k+ active monthly users.',
    tags: ['React', 'Canvas API', 'OpenAI', 'Tailwind', 'Supabase'],
    color: '#10b981',
    year: '2023',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'DevPulse',
    desc: 'CLI tool + web dashboard for monitoring developer productivity metrics across GitHub, Jira, and Slack integrations.',
    tags: ['TypeScript', 'CLI', 'Express', 'MongoDB', 'OAuth'],
    color: '#f59e0b',
    year: '2023',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'ShopStream',
    desc: 'Headless e-commerce engine with SSR, edge caching, and real-time inventory sync across multiple storefronts.',
    tags: ['Next.js', 'Stripe', 'Vercel', 'Prisma', 'tRPC'],
    color: '#00f5ff',
    year: '2023',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'AuthVault',
    desc: 'Open-source OAuth 2.0 + PKCE authentication library for Node.js with TypeScript support and 400+ GitHub stars.',
    tags: ['TypeScript', 'OAuth 2.0', 'JWT', 'Node.js', 'OSS'],
    color: '#a855f7',
    year: '2022',
    link: '#',
    github: '#',
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.08} direction="up">
      <GlowCard style={{ height: '100%' }}>
        <div
          style={{ padding: '28px 28px 24px', height: '100%', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Top bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `rgba(${project.color === '#00f5ff' ? '0,245,255' : project.color === '#a855f7' ? '168,85,247' : project.color === '#10b981' ? '16,185,129' : '245,158,11'},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href={project.github} style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = project.color}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href={project.link} style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = project.color}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 10, color: project.color, letterSpacing: 2, marginBottom: 10 }}>{project.year}</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 12 }}>{project.title}</h3>
          <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>{project.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'Space Mono, monospace', fontSize: 10, letterSpacing: 1,
                color: project.color, background: `rgba(${project.color === '#00f5ff' ? '0,245,255' : project.color === '#a855f7' ? '168,85,247' : project.color === '#10b981' ? '16,185,129' : '245,158,11'},0.1)`,
                padding: '4px 10px', borderRadius: 3, border: `1px solid ${project.color}22`,
              }}>{tag}</span>
            ))}
          </div>

          {/* hover glow overlay */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 15,
            background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)`,
            opacity: hovered ? 1 : 0, transition: 'opacity 0.4s', pointerEvents: 'none',
          }} />
        </div>
      </GlowCard>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 10, padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color: '#00f5ff', letterSpacing: 4, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 30, height: 1, background: '#00f5ff', display: 'inline-block' }} />
                02. PROJECTS
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
                Things I've<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(168,85,247,0.6)' }}>Built</span>
              </h2>
            </div>
            <ClickSpark>
              <button style={{
                background: 'transparent', border: '1px solid rgba(0,245,255,0.3)', color: '#00f5ff',
                padding: '12px 28px', borderRadius: 4, cursor: 'pointer',
                fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: 2,
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                VIEW ALL ON GITHUB →
              </button>
            </ClickSpark>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
