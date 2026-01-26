# MASCOTIC - AI Meta Human for Education

> **AI Meta Human/Mascot cho việc Giáo dục**

Transform education with living virtual teaching assistants that listen, respond, and create magical learning experiences through real-time voice interaction.

## 🎯 Project Vision

MASCOTIC addresses the lack of "character soul" in digital education by creating AI mascots that can:
- **Listen & Respond** in real-time to children's questions
- **Generate Stories** from lesson topics with consistent narratives
- **Maintain Personality** across all educational modules for authentic bonding

### Key Metrics
- ⚡ **2.5s** Response Latency
- 🛡️ **100%** Safety Moderated
- 🌐 **24/7** AI Availability
- ∞ **Unlimited** Learning Possibilities

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
Mascotic_FE/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx          # Marketing landing page
│   │   ├── user/                     # User-facing pages
│   │   │   ├── UserDashboard.jsx    # Main dashboard
│   │   │   ├── MascotPersonaStudio.jsx  # Create/edit mascots
│   │   │   ├── EngagementAnalytics.jsx  # Learning insights
│   │   │   └── StorytellingMode.jsx     # Immersive interaction
│   │   └── admin/                    # Admin system
│   │       ├── AdminDashboard.jsx   # Admin overview
│   │       ├── UserManagement.jsx   # Manage users
│   │       ├── AITokenMonitoring.jsx    # API usage tracking
│   │       ├── MascotLibrary.jsx    # Template management
│   │       └── BusinessIntelligence.jsx # Analytics & reports
│   ├── App.jsx                      # Main app with routing
│   ├── index.css                    # Global styles
│   └── main.jsx                     # Entry point
├── public/                          # Static assets
├── REDESIGN_SUMMARY.md             # Detailed redesign documentation
└── README.md                        # This file
```

## 🎨 Design System

### Color Palette
- **Primary:** Purple (#9333EA) → Pink (#EC4899)
- **Secondary:** Blue (#3B82F6) → Cyan (#06B6D4)
- **Accent:** Orange (#F97316) → Red (#EF4444)
- **Success:** Green (#10B981)
- **Warning:** Yellow (#F59E0B)

### Key Components
- Gradient cards with hover effects
- Interactive charts and visualizations
- Voice-first interaction buttons
- Immersive dark mode for storytelling
- Child-friendly large touch targets

## 🗺️ Application Routes

### User Routes
- `/` - Landing Page
- `/dashboard` - User Dashboard
- `/dashboard/persona` - Mascot Persona Studio
- `/dashboard/analytics` - Engagement Analytics
- `/story` - Storytelling Mode
- `/story/:storyId` - Specific Story Session

### Admin Routes
- `/admin` - Admin Dashboard
- `/admin/users` - User Management
- `/admin/tokens` - AI Token Monitoring
- `/admin/library` - Mascot Library
- `/admin/bi` - Business Intelligence

## ✨ Core Features

### 1. Mascot Persona Studio
Create and customize AI mascots with:
- Custom name and role
- Voice tone selection
- Knowledge base configuration
- Personality traits
- Visual theme customization

### 2. Storytelling Mode
Immersive learning experience featuring:
- 3D mascot viewport
- Voice-to-voice interaction
- Real-time subtitles
- Natural conversation flow
- Fullscreen immersive mode

### 3. Engagement Analytics
Track learning progress with:
- Interaction metrics
- Daily activity charts
- Topic distribution
- Most asked questions
- Personalized insights

### 4. Admin System
Comprehensive management tools:
- User account management
- AI token usage monitoring
- Mascot template library
- Business intelligence reports
- System health tracking

## 🛠️ Tech Stack

- **Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Routing:** React Router DOM 7.12
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React 0.563
- **Language:** JavaScript (ES6+)

## 📊 Features Overview

### User Dashboard
- Quick access to all features
- Recent stories history
- Learning statistics
- Mascot management

### Mascot Persona Studio
- Create unlimited mascots
- Customize personality & voice
- Define knowledge domains
- Visual theme selection

### Storytelling Mode
- Immersive 3D environment
- Voice-activated interaction
- Real-time AI responses
- Conversation history

### Admin System
- User management
- API token monitoring
- Template library
- Business analytics

## 🔐 Non-Functional Requirements

### Performance
- Response latency ≤ 2.5 seconds
- Smooth 60fps animations
- Optimized bundle size

### Safety
- AI content filtering
- Inappropriate topic redirection
- Child-safe interactions

### Accessibility
- Large touch targets
- Voice-first navigation
- High contrast UI
- Screen reader support

## 🚧 Development Roadmap

### Phase 1: Frontend (Current)
- ✅ Redesigned UI/UX
- ✅ User Dashboard
- ✅ Storytelling Mode
- ✅ Admin System
- ✅ Analytics Pages

### Phase 2: Backend Integration (Next)
- [ ] User authentication
- [ ] Database integration
- [ ] Gemini API integration
- [ ] TTS/STT services
- [ ] Real-time WebSocket

### Phase 3: 3D & Voice (Future)
- [ ] 3D mascot renderer (Three.js)
- [ ] Lip-sync animation
- [ ] Voice recognition
- [ ] Speech synthesis
- [ ] Emotion detection

### Phase 4: Production (Final)
- [ ] Performance optimization
- [ ] Security hardening
- [ ] CI/CD pipeline
- [ ] Monitoring & logging
- [ ] Deployment

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

This is a capstone project for SWD392. For questions or suggestions, please contact the development team.

## 📄 License

Copyright © 2026 MASCOTIC Team. All rights reserved.

## 👥 Team

- **Project:** MASCOTIC - AI Meta Human for Education
- **Course:** SWD392
- **Semester:** SP26
- **Institution:** FPT University

---

**Built with ❤️ for young learners**

For detailed redesign documentation, see [REDESIGN_SUMMARY.md](./REDESIGN_SUMMARY.md)
