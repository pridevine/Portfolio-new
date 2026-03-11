# 🚀 Full Stack Portfolio — React + Node.js

A dark, futuristic full stack portfolio featuring **React Bits**-style animated components, glassmorphism cards, particle effects, and a Node.js/Express backend.

---

## ✨ Features

- **Aurora Background** — animated radial glow canvas (React Bits inspired)
- **Typewriter hero** — cycling role titles with cursor blink
- **GlowCard** — animated conic-gradient rotating border cards
- **ShimmerText** — gradient shimmer text animation
- **ClickSpark** — particle burst on click (React Bits ClickSpark style)
- **FadeIn** — scroll-triggered entrance animations
- **Animated skill bars** — fill on scroll into view
- **Working contact form** connected to Node.js API
- **Rate limited** Express backend with CORS & Helmet

---

## 📁 Project Structure

```
portfolio/           ← React frontend
  src/
    components/
      AuroraBackground.jsx   ← Canvas particle background
      ShimmerText.jsx        ← Gradient text shimmer
      GlowCard.jsx           ← Rotating border card
      ClickSpark.jsx         ← Click particle burst
      FadeIn.jsx             ← Scroll reveal wrapper
      AnimatedCounter.jsx    ← Count-up animation
      Navbar.jsx
      Hero.jsx
      About.jsx
      Projects.jsx
      Skills.jsx
      Contact.jsx
    App.jsx
    index.js

portfolio-backend/   ← Node.js API
  server.js          ← Express app
  .env.example       ← Environment variables template
```

---

## 🛠 Setup

### Frontend

```bash
cd portfolio
npm install
npm start           # Dev server → http://localhost:3000
npm run build       # Production build
```

### Backend

```bash
cd portfolio-backend
npm install
cp .env.example .env
# Edit .env with your SMTP credentials
npm run dev         # Dev server → http://localhost:5000
npm start           # Production
```

---

## 🎨 React Bits Components Used

These components are **hand-crafted inline** based on the [React Bits](https://reactbits.dev) design philosophy (copy-paste pattern, no npm package needed):

| Component | React Bits Inspiration |
|-----------|----------------------|
| `AuroraBackground` | Aurora / Orb backgrounds |
| `GlowCard` | StarBorder / Electric Border |
| `ClickSpark` | ClickSpark |
| `ShimmerText` | Shimmer / Gradient text |
| `FadeIn` | FadeContent / AnimatedContent |

To add more React Bits components, visit [reactbits.dev](https://reactbits.dev), pick a component, click **Manual** tab, and copy the source into `src/components/`.

---

## 🔌 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Server health check |
| GET | `/api/portfolio` | Portfolio data (projects, skills, bio) |
| POST | `/api/contact` | Submit contact form (rate limited: 5/hr) |

### Contact request body
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I'd love to work with you!"
}
```

---

## 🚢 Deployment

**Frontend** → Vercel / Netlify  
```bash
cd portfolio && npm run build
# Deploy the `build/` folder
```

**Backend** → Railway / Render / Fly.io  
```bash
cd portfolio-backend
# Set environment variables in your platform dashboard
# Deploy server.js
```

Update `CLIENT_URL` in `.env` to your deployed frontend URL.

---

## 🎨 Customization Checklist

- [ ] Replace `Alex Chen` with your name in `Hero.jsx` and `About.jsx`
- [ ] Update projects in `Projects.jsx`
- [ ] Adjust skill percentages in `Skills.jsx`
- [ ] Set your email/social links in `Contact.jsx` and `About.jsx`
- [ ] Configure SMTP in `.env` for real email delivery
- [ ] Update `portfolio data` in `server.js`

---

Built with React 18 · Node.js · Express · Framer Motion · React Intersection Observer
