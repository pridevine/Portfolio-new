require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' },
});
app.use(limiter);

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'Contact form limit reached. Please try again in an hour.' },
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Portfolio data endpoint
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    bio: 'Building immersive digital experiences with clean code and creative interfaces.',
    email: 'alex@devfolio.io',
    github: 'https://github.com/alexchen-dev',
    linkedin: 'https://linkedin.com/in/alexchen-dev',
    stats: {
      experience: '5+',
      projects: '40+',
      clients: '15+',
      satisfaction: '99%',
    },
    projects: [
      {
        id: 1,
        title: 'NeuralDash',
        description: 'Real-time analytics dashboard with WebSockets and D3.js',
        tags: ['React', 'Node.js', 'WebSocket', 'D3.js', 'PostgreSQL'],
        github: 'https://github.com/alexchen-dev/neuraldash',
        demo: 'https://neuraldash.demo',
        year: '2024',
        featured: true,
      },
      {
        id: 2,
        title: 'CloudSync API',
        description: 'RESTful & GraphQL API gateway with JWT auth and rate limiting',
        tags: ['Node.js', 'GraphQL', 'Redis', 'Docker', 'Kubernetes'],
        github: 'https://github.com/alexchen-dev/cloudsync',
        demo: 'https://cloudsync.demo',
        year: '2024',
        featured: true,
      },
    ],
    skills: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'GraphQL', 'Python', 'Go'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      devops: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD'],
    },
  });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars).' });
  }

  try {
    // In production, configure nodemailer with real SMTP credentials:
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Portfolio inquiry from ${name}`,
    //   html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message}</p>`,
    // });

    console.log(`📬 New contact from ${name} <${email}>:\n${message}`);

    res.json({
      success: true,
      message: 'Your message has been received! I\'ll get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Portfolio API running on http://localhost:${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
