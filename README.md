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

#### Business goals

#### User goals

### Scope Plane

### Structure Plane

### Skeleton Plane

### Surface Plane
