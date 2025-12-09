# Vertex

**Your AI-powered learning companion that maps the path to understanding.**

Vertex helps students and self-learners identify exactly what prerequisite knowledge they're missing when struggling with a topic. By generating visual dependency trees and personalized quizzes, Vertex pinpoints knowledge gaps and creates a tailored learning path—solving the "I don't even know what I don't know" problem.

## Features

- **Visual Knowledge Trees**: See the prerequisite concepts needed to master any topic
- **AI-Powered Assessments**: Quick quizzes identify your exact knowledge gaps
- **Personalized Learning Paths**: Get a customized roadmap with curated resources
- **Progress Tracking**: Monitor your learning journey as you build understanding
- **Multi-Subject Support**: Works across any academic domain

## Tech Stack

**Frontend:**
- React (JavaScript)
- TailwindCSS
- Lucide React (icons)
- React Router
- Vite

**Backend:**
- Node.js
- Express
- MongoDB + Mongoose
- JWT + bcrypt (authentication)
- HTTP-only cookies (session management)

**AI:**
- **Development**: Google Gemini 1.5 Flash
  - Free tier: 1,500 requests/day (no expiration, no credit card)
  - Fast, reliable JSON output
- **Production**: OpenAI GPT-4o-mini
  - Free tier: $5 credits (~33,000 calls for 3 months)
  - Industry standard, better for portfolio/resume
- **Premium**: Anthropic Claude Sonnet (optional)
  - Best quality, most expensive ($3/1M tokens)

**Deployment:**
- Frontend: Vercel (free)
- Backend: Render (free tier: 750 hrs/month)
- Database: MongoDB Atlas (free tier: 512MB)

*Split deployment approach: Vercel's global CDN optimizes frontend performance while Render handles API logic. This separation allows independent scaling, faster load times, and follows industry best practices for modern web applications.*

## UX Design

### Strategy Plane

#### Target Audience

**Primary Users:**
- **Undergraduate students** (18-24 years) struggling with complex STEM subjects who need to identify foundational gaps
- **Self-learners & bootcamp students** (20-35 years) transitioning careers and encountering prerequisite knowledge barriers
- **High school AP/IB students** (15-18 years) preparing for advanced coursework and wanting to ensure readiness

**Secondary Users:**
- **Graduate students** conducting interdisciplinary research requiring breadth across unfamiliar domains
- **Educators & tutors** seeking diagnostic tools to personalize instruction and identify student misconceptions
- **Lifelong learners** (35+ years) upskilling in new technical domains (AI, quantum computing, advanced mathematics)

**User Characteristics:**
- Motivated to learn but frustrated by unclear starting points
- Experience the "I don't understand why I don't understand" problem
- Prefer structured, step-by-step learning approaches
- Value time efficiency and targeted resource recommendations
- Comfortable with digital learning tools and self-assessment

#### Business Goals

**Core Objectives:**
1. **Solve a validated pain point**: Address the widespread "missing prerequisites" problem that causes 40%+ of MOOC dropouts
2. **Build a defensible AI product**: Demonstrate practical AI application beyond chatbots—creates value through intelligent structuring and personalization
3. **Portfolio differentiation**: Showcase full-stack skills with modern architecture (React, Node.js, MongoDB) and AI integration

**Success Metrics:**
- Demonstrate functional AI integration with accurate prerequisite mapping
- Achieve smooth user experience with <5 second tree generation
- Positive feedback from test users on clarity and usefulness of learning paths
- Successfully showcase full-stack architecture and modern development practices in portfolio

#### User Goals

**Immediate Needs:**
1. **Identify knowledge gaps**: "I'm stuck on Neural Networks—what am I missing?"
2. **Validate understanding**: "Do I actually understand linear algebra, or just think I do?"
3. **Get actionable next steps**: "What should I learn first to make this click?"
4. **Save time**: "Stop me from wasting hours on the wrong tutorials"

**Longer-term Goals:**
1. **Build confidence**: Transform "I'm not smart enough" into "I just need to learn X first"
2. **Learn efficiently**: Follow a structured path instead of random tutorial hopping
3. **Track progress**: See visual confirmation of growing knowledge (gamification element)
4. **Avoid imposter syndrome**: Normalize prerequisite gaps—everyone has them

**Emotional Outcomes:**
- Replace frustration with clarity and direction
- Experience "aha moments" when prerequisites unlock understanding
- Feel empowered rather than overwhelmed by complex topics
- Trust in having a reliable diagnostic tool for future learning challenges

**Functional Requirements:**
- Generate dependency trees in <5 seconds (maintain flow state)
- Quizzes that test understanding, not trivia memorization
- Resources that match user's current level (no overwhelming PhD papers for beginners)
- Mobile-responsive design for studying on-the-go
