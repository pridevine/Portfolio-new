import { useInView } from 'react-intersection-observer';
import FadeIn from './FadeIn';
import GlowCard from './GlowCard';

const skillGroups = [
  {
    label: 'Frontend',
    color: '#00f5ff',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind / Framer', level: 88 },
      { name: 'Vue.js', level: 72 },
    ],
  },
  {
    label: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js / Express', level: 93 },
      { name: 'GraphQL / REST', level: 90 },
      { name: 'Python / FastAPI', level: 78 },
      { name: 'Go', level: 60 },
    ],
  },
  {
    label: 'Database & DevOps',
    color: '#10b981',
    skills: [
      { name: 'PostgreSQL / MongoDB', level: 88 },
      { name: 'Redis / Elasticsearch', level: 80 },
      { name: 'Docker / Kubernetes', level: 82 },
      { name: 'AWS / GCP / Vercel', level: 85 },
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'GraphQL',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS',
  'Git', 'Linux', 'Tailwind', 'Framer Motion', 'Prisma', 'tRPC',
  'Jest', 'Vite', 'Webpack', 'CI/CD', 'Supabase', 'Stripe',
];

function SkillBar({ name, level, color, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{name}</span>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 2,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          width: inView ? `${level}%` : '0%',
          transition: `width 1.2s ease ${delay}s`,
          boxShadow: `0 0 8px ${color}`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 10, padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 12, color: '#00f5ff', letterSpacing: 4, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 30, height: 1, background: '#00f5ff', display: 'inline-block' }} />
              03. SKILLS
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', lineHeight: 1.1 }}>
              My Tech<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(16,185,129,0.6)' }}>Arsenal</span>
            </h2>
          </div>
        </FadeIn>

        {/* Skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28, marginBottom: 60 }}>
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.1}>
              <GlowCard>
                <div style={{ padding: '28px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                    <div style={{ width: 3, height: 24, background: group.color, borderRadius: 2, boxShadow: `0 0 8px ${group.color}` }} />
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>{group.label}</h3>
                  </div>
                  {group.skills.map((s, si) => (
                    <SkillBar key={s.name} {...s} color={group.color} delay={gi * 0.15 + si * 0.1} />
                  ))}
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>

        {/* Tech tag cloud */}
        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, marginBottom: 28 }}>
              TECHNOLOGIES I WORK WITH
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'Space Mono, monospace', fontSize: 11, letterSpacing: 1,
                    color: i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? 'rgba(168,85,247,0.8)' : 'rgba(16,185,129,0.8)',
                    background: i % 3 === 0 ? 'rgba(0,245,255,0.06)' : i % 3 === 1 ? 'rgba(168,85,247,0.06)' : 'rgba(16,185,129,0.06)',
                    border: `1px solid ${i % 3 === 0 ? 'rgba(0,245,255,0.15)' : i % 3 === 1 ? 'rgba(168,85,247,0.15)' : 'rgba(16,185,129,0.15)'}`,
                    padding: '8px 16px', borderRadius: 4,
                    transition: 'transform 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.target.style.transform = 'none'}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
