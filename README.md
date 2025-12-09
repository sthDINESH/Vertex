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


### Scope Plane

#### User Stories

**MVP (Minimum Viable Product)**

*Core Learning Journey:*
1. **As a** struggling student, **I want to** enter a topic I'm finding difficult, **so that I can** see what prerequisite knowledge I might be missing.
2. **As a** learner, **I want to** view a visual tree of prerequisite concepts, **so that I can** understand the learning dependencies at a glance.
3. **As a** student, **I want to** take quick quizzes on prerequisite concepts, **so that I can** identify exactly which foundational topics I need to review.
4. **As a** self-learner, **I want to** receive personalized resource recommendations, **so that I can** efficiently fill my knowledge gaps without wasting time searching.
5. **As a** user, **I want to** specify my current education level, **so that I can** receive appropriately challenging content.

*Account & Progress:*
6. **As a** returning user, **I want to** create an account and log in, **so that I can** save my learning progress across sessions.
7. **As a** registered user, **I want to** see my quiz results (passed/failed/untested), **so that I can** track which prerequisites I've validated.

*Usability:*
8. **As a** mobile user, **I want to** access the platform on my phone, **so that I can** learn on-the-go during commutes or breaks.
9. **As a** user, **I want to** receive fast responses (<5 seconds), **so that I can** maintain my learning flow without frustration.

**Post-MVP (Future Enhancements)**

*Enhanced Progress Tracking:*
10. **As a** motivated learner, **I want to** see a dashboard of all my learning paths, **so that I can** visualize my overall progress across multiple topics.
11. **As a** goal-oriented student, **I want to** mark concepts as "mastered" and unlock dependent topics, **so that I can** experience gamification and stay motivated.
12. **As a** user, **I want to** see timestamps of when I completed assessments, **so that I can** know when I might need to refresh my knowledge.

*Advanced Features:*
13. **As a** learner, **I want to** receive spaced repetition reminders, **so that I can** retain prerequisite knowledge long-term.
14. **As a** educator, **I want to** generate learning paths for my students, **so that I can** provide personalized remediation plans.
15. **As a** collaborative learner, **I want to** share my learning tree with peers, **so that I can** study together and compare understanding.
16. **As a** user, **I want to** rate resource quality and quiz fairness, **so that I can** help improve content for future learners.
17. **As a** advanced user, **I want to** manually add custom prerequisites or resources, **so that I can** personalize my learning path based on my unique needs.

*Platform Expansion:*
18. **As a** non-English speaker, **I want to** use the platform in my native language, **so that I can** access prerequisite mapping without language barriers.
19. **As a** visual learner, **I want to** see video resources prioritized, **so that I can** learn in my preferred format.
20. **As a** power user, **I want to** export my learning tree as PDF/image, **so that I can** reference it offline or share it in assignments.

#### Feature Prioritization Matrix

| # | Feature | User Impact (1-5) | Dev Effort (1-5) | Priority | Status |
|---|---------|-------------------|------------------|----------|--------|
| 1 | **Concept Input & Tree Generation** | 5 | 4 | **MUST HAVE** | MVP |
| 2 | **Visual Dependency Tree Display** | 5 | 3 | **MUST HAVE** | MVP |
| 3 | **AI-Powered Quiz Generation** | 5 | 4 | **MUST HAVE** | MVP |
| 4 | **Quiz Taking & Answer Validation** | 5 | 3 | **MUST HAVE** | MVP |
| 5 | **Resource Recommendation Engine** | 5 | 3 | **MUST HAVE** | MVP |
| 6 | **Education Level Selection** | 4 | 2 | **MUST HAVE** | MVP |
| 7 | **User Authentication (Sign up/Login)** | 4 | 3 | **MUST HAVE** | MVP |
| 8 | **Basic Progress Persistence** | 4 | 3 | **MUST HAVE** | MVP |
| 9 | **Mobile Responsive Design** | 4 | 3 | **MUST HAVE** | MVP |
| 10 | **Error Handling & Loading States** | 4 | 2 | **MUST HAVE** | MVP |
| 11 | **Multi-Topic Dashboard** | 4 | 3 | **SHOULD HAVE** | Post-MVP |
| 12 | **Concept Status Indicators** | 4 | 2 | **SHOULD HAVE** | Post-MVP |
| 13 | **Progress Analytics & Insights** | 3 | 3 | **SHOULD HAVE** | Post-MVP |
| 14 | **Learning Path History** | 3 | 2 | **SHOULD HAVE** | Post-MVP |
| 15 | **Resource Quality Ratings** | 3 | 3 | **SHOULD HAVE** | Post-MVP |
| 16 | **Spaced Repetition System** | 4 | 4 | **COULD HAVE** | Post-MVP |
| 17 | **Social Sharing Features** | 2 | 3 | **COULD HAVE** | Post-MVP |
| 18 | **Custom Prerequisite Editing** | 2 | 3 | **COULD HAVE** | Post-MVP |
| 19 | **PDF/Image Export** | 2 | 3 | **COULD HAVE** | Post-MVP |
| 20 | **Multi-language Support** | 3 | 5 | **COULD HAVE** | Post-MVP |
| 21 | **Video Resource Prioritization** | 2 | 2 | **COULD HAVE** | Post-MVP |
| 22 | **Educator Dashboard** | 3 | 4 | **COULD HAVE** | Post-MVP |
| 23 | **Dark Mode** | 2 | 2 | **COULD HAVE** | Post-MVP |

**Scoring Guide:**
- **User Impact**: 1=Nice to have, 3=Valuable, 5=Critical to core value
- **Dev Effort**: 1=Few hours, 3=1-2 days, 5=1+ week

**Priority Definitions:**
- **MUST HAVE**: Core features required for MVP; without these, the product doesn't solve the core problem
- **SHOULD HAVE**: Important features that significantly enhance value but aren't critical for launch
- **COULD HAVE**: Nice-to-have features that can wait for future iterations based on user feedback


