# Vertex

**Your AI-powered learning companion that maps the path to understanding.**

Vertex helps students and self-learners identify exactly what prerequisite knowledge they're missing when struggling with a topic. By generating visual dependency trees and personalized quizzes, Vertex pinpoints knowledge gaps and creates a tailored learning path—solving the "I don't even know what I don't know" problem.

## 🚀 Live Demo

**Frontend:** https://vertex-eta-tawny.vercel.app/

---

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

**Testing:**
- **Frontend Testing**:
  - Vitest (unit tests)
  - React Testing Library (component tests)
  - Playwright (E2E tests - Sprint 5)
- **Backend Testing**:
  - node:test (unit tests)
  - Supertest (API endpoint testing)
  - MongoDB Memory Server (database mocking)
- **Quality Assurance**:
  - Lighthouse (performance & accessibility)

**AI:**
- **Development**: Google Gemini 1.5 Flash
  - Free tier: 1,500 requests/day (no expiration, no credit card)
- **Future**: OpenAI GPT-4o-mini
  - Free tier: $5 credits (~33,000 calls for 3 months)
- **Future**: Anthropic Claude Sonnet
  - Best quality, most expensive ($3/1M tokens)

**Deployment:**
- Frontend: Vercel (free)
- Backend: Render (free tier: 750 hrs/month)
- Database: MongoDB Atlas (free tier: 512MB)

**DevOps & Monitoring:**
- Git + GitHub (version control)
- Vercel Analytics (frontend monitoring)

## Deployment Notes

### Frontend (Vercel)
- Deployed automatically on every push to `main` branch
- Environment variables configured in Vercel dashboard
- Rollback available: Vercel dashboard → Deployments → Click previous deployment → Promote to Production

### Backend (Render)
- Deployed automatically on every push to `main` branch (connect GitHub repo)
- Environment variables configured in Render dashboard:
  - `MONGODB_URI` (MongoDB Atlas connection string)
  - `JWT_SECRET` (random string for token signing)
  - `GEMINI_API_KEY` (AI API key)
  - `NODE_ENV=production`
- Rollback available: Render dashboard → Service → Deployment History → Click previous deployment → Deploy
- **Note**: Free tier spins down after 15 min inactivity (first request takes 30-50s to wake up)

### Monitoring
- **Frontend**: View deployment logs and status on Vercel dashboard
- **Backend**: View logs in Render dashboard → Service → Logs

*Split deployment approach: Vercel's global CDN optimizes frontend performance while Render handles API logic. This separation allows independent scaling, faster load times, and follows industry best practices for modern web applications.*

## UX Design

### Strategy Plane
<details>
   <summary>Strategy plane considerations(expand for details)</summary>


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
2. **Portfolio differentiation**: Showcase full-stack skills with modern architecture (React, Node.js, MongoDB) and AI integration

**Success Metrics:**
- Demonstrate functional AI integration with accurate prerequisite mapping
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
- Generate dependency trees (maintain flow state)
- Quizzes that test understanding, not trivia memorization
- Resources that match user's current level (no overwhelming PhD papers for beginners)
- Mobile-responsive design for studying on-the-go

</details>

### Scope Plane

<details>
   <summary>Scope plane considerations(expand for details)</summary>

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

| # | Feature | User Impact (1-5) | Dev Effort (1-5) | Priority | Sprint | Status |
|---|---------|-------------------|------------------|----------|--------|--------|
| 1 | **Concept Input & Tree Generation** | 5 | 4 | **MUST HAVE** | Sprint 1 | ✅ Prototype |
| 2 | **Visual Dependency Tree Display** | 5 | 3 | **MUST HAVE** | Sprint 1 | ✅ Prototype |
| 3 | **AI-Powered Quiz Generation** | 5 | 4 | **MUST HAVE** | Sprint 2 | ✅ Prototype |
| 4 | **Quiz Taking & Answer Validation** | 5 | 3 | **MUST HAVE** | Sprint 2 | ✅ Prototype |
| 5 | **Resource Recommendation Engine** | 5 | 3 | **MUST HAVE** | Sprint 2 | 🚧 In Progress |
| 6 | **Education Level Selection** | 4 | 2 | **MUST HAVE** | Sprint 1 | ✅ Prototype |
| 7 | **User Authentication (Sign up/Login)** | 4 | 3 | **MUST HAVE** | Sprint 3 | Planned |
| 8 | **Basic Progress Persistence** | 4 | 3 | **MUST HAVE** | Sprint 3 | Planned |
| 9 | **Mobile Responsive Design** | 4 | 3 | **MUST HAVE** | Sprint 4 | Planned |
| 10 | **Error Handling & Loading States** | 4 | 2 | **MUST HAVE** | Sprint 4 | Planned |
| 11 | **Backend API Setup** | 5 | 3 | **MUST HAVE** | Sprint 3 | Planned |
| 12 | **Database Schema & Models** | 5 | 3 | **MUST HAVE** | Sprint 3 | Planned |
| 13 | **AI Service Integration (Gemini)** | 5 | 3 | **MUST HAVE** | Sprint 1 | ✅ Prototype |
| 14 | **Session Management** | 4 | 2 | **MUST HAVE** | Sprint 3 | Planned |
| 15 | **Multi-Topic Dashboard** | 4 | 3 | **SHOULD HAVE** | Sprint 5 | Post-MVP |
| 16 | **Concept Status Indicators** | 4 | 2 | **SHOULD HAVE** | Sprint 4 | Planned |
| 17 | **Progress Analytics & Insights** | 3 | 3 | **SHOULD HAVE** | Sprint 5 | Post-MVP |
| 18 | **Learning Path History** | 3 | 2 | **SHOULD HAVE** | Sprint 5 | Post-MVP |
| 19 | **Resource Quality Ratings** | 3 | 3 | **SHOULD HAVE** | Post-MVP | Future |
| 20 | **Spaced Repetition System** | 4 | 4 | **COULD HAVE** | Post-MVP | Future |
| 21 | **Social Sharing Features** | 2 | 3 | **COULD HAVE** | Post-MVP | Future |
| 22 | **Custom Prerequisite Editing** | 2 | 3 | **COULD HAVE** | Post-MVP | Future |
| 23 | **PDF/Image Export** | 2 | 3 | **COULD HAVE** | Post-MVP | Future |
| 24 | **Multi-language Support** | 3 | 5 | **COULD HAVE** | Post-MVP | Future |
| 25 | **Video Resource Prioritization** | 2 | 2 | **COULD HAVE** | Post-MVP | Future |
| 26 | **Educator Dashboard** | 3 | 4 | **COULD HAVE** | Post-MVP | Future |
| 27 | **Dark Mode** | 2 | 2 | **COULD HAVE** | Post-MVP | Future |
| 28 | **Deployment Configuration** | 4 | 3 | **MUST HAVE** | Sprint 5 | Planned |
| 29 | **Testing & Bug Fixes** | 5 | 3 | **MUST HAVE** | Sprint 5 | Planned |

**Scoring Guide:**
- **User Impact**: 1=Nice to have, 3=Valuable, 5=Critical to core value
- **Dev Effort**: 1=Few hours, 3=1-2 days, 5=1+ week

**Priority Definitions:**
- **MUST HAVE**: Core features required for MVP; without these, the product doesn't solve the core problem
- **SHOULD HAVE**: Important features that significantly enhance value but aren't critical for launch
- **COULD HAVE**: Nice-to-have features that can wait for future iterations based on user feedback

</details>

### Structure Plane

<details>
   <summary>Structure plane considerations(expand for details)</summary>

#### Information Architecture

**Site Map:**

```
┌─────────────────────────────────────────────────────────────┐
│                         Landing Page                        │
│                    (Unauthenticated View)                   │
│  - Hero section with value proposition                      │
│  - Concept Mapper (default in Guest mode)                   │
│  - How it works (3-step visual guide)                       │
│  - CTA: "Register" (redirects to signup)                    │
└───────────────────────┬─────────────────────────────────────┘
                        │
        ┌───────────────┴───────────────┐
        │                               │
┌───────▼────────┐           ┌─────────▼─────────┐
│  Sign Up/Login │           │  Concept Mapper   │
│                │           │  (Guest Mode)     │
│  - Email/Pass  │           │  - Single session │
│  - Form valid. │           │  - No persistence │
│  - Error msgs  │           │  - Full features  │
└───────┬────────┘           └───────────────────┘
        │
        │
┌───────▼──────────────────────────────────────────────────────┐
│                      Main Dashboard                          │
│                   (Authenticated View)                       │
│  - Header: Logo, User menu (Profile, Logout)                 │
│  - Concept Mapper                                            │
│  - Learning Paths grid (cards with status indicators)        │
│  - Quick stats: Concepts mapped, Quizzes passed              │
└───────┬──────────────────────────────────────────────────────┘
        │
        │
┌───────▼──────────────────────────────────────────────────────┐
│                  Concept Mapping Flow                         │
│                                                               │
│  Step 1: Input Form                                          │
│    - Concept name (required)                                 │
│    - Subject (optional)                                      │
│    - Education level (dropdown)                              │
│    - "Generate Tree" button                                  │
│                                                               │
│  Step 2: Visual Tree Display                                 │
│    - Interactive node graph                                  │
│    - Color-coded status (untested/passed/failed)             │
│    - "Test Knowledge" buttons on each node                   │
│    - Progress indicator (X/Y concepts tested)                │
│                                                               │
│  Step 3: Quiz Interface                     │
│    - Question counter (1/3, 2/3, 3/3)                       │
│    - Multiple choice options                                 │
│    - Progress bar                                            │
│    - "Submit Answer" button                                  │
│                                                               │
│  Step 4: Results & Learning Path                             │
│    - Assessment summary (concepts passed/failed)             │
│    - Prioritized learning path (failed concepts first)       │
│    - Study resources for each failed concept                 │
│    - "Save Learning Path" button                             │
│    - "Start Over" / "Map Another Concept" buttons            │
└───────┬──────────────────────────────────────────────────────┘
        │
        │
┌───────▼──────────────────────────────────────────────────────┐
│                     User Profile                              │
│                                                               │
│  - Account settings (email, password)                        │
│  - Learning statistics                                       │
│  - Preferences (future: notifications, AI model choice)      │
└───────────────────────────────────────────────────────────────┘
```

**Navigation Structure:**
- **Primary Navigation** (Authenticated):
  - Dashboard (home icon)
  - New Concept Map (+ icon, prominent)
  - Profile (user avatar)
  
- **Secondary Navigation**:
  - Learning path cards → Individual tree view
  - Tree nodes → Quiz modal
  - Results → Resource details (expandable sections)

**Content Organization Principles:**
- **Progressive Disclosure**: Show complexity gradually (input → tree → quiz → resources)
- **Task-Oriented Flow**: Linear path for first-time users, dashboard for returning users
- **Status Visibility**: Color coding and icons make progress immediately visible
- **Contextual Actions**: Buttons appear where/when needed (e.g., "Test Knowledge" on each node)

---

#### Interaction Design

**User Flow Diagrams:**

**Core Flow: First-Time User**
```
1. Land on homepage
   ↓
2. Start Mapping (Guest mode) or "Sign Up"
   ↓
3. Enter concept details (name, level)
   ↓
4. View generated prerequisite tree
   ↓
5. Click "Test Knowledge" on first prerequisite node
   ↓
6. Answer quiz questions
   ↓
7. See result (passed/failed) reflected on tree
   ↓
8. Repeat steps 5-7 for remaining nodes
   ↓
9. Click "View Learning Path"
   ↓
10. See personalized study resources
    ↓
11. Prompted to sign up to save progress
```

**Core Flow: Returning User**
```
1. Login
   ↓
2. View dashboard with saved learning paths
   ↓
3. Click existing path → Resume where left off
   OR
   Click "New Concept Map" → Start fresh assessment
```

**Interaction Patterns:**

1. **Concept Input**
   - **Pattern**: Form with instant validation
   - **Feedback**: Disabled "Generate" button until concept name entered
   - **Loading State**: Animated spinner + "Analyzing dependencies..." text
   - **Error Handling**: Inline error messages (e.g., "Failed to generate. Try again.")

2. **Tree Navigation**
   - **Pattern**: Hierarchical tree with expandable branches
   - **Visual Hierarchy**: Indentation shows dependency depth, lines connect nodes
   - **Affordance**: "Test Knowledge" buttons use action color (blue)
   - **State Changes**: Node color changes immediately after quiz completion

3. **Quiz Taking**
   - **Pattern**: Modal overlay (maintains context without page change)
   - **Progress**: Question counter (1/3, 2/3, 3/3) + progress bar
   - **Interaction**: Single-select radio buttons → "Next" button
   - **Feedback**: No immediate answer feedback (prevents retake gaming)
   - **Completion**: Modal closes automatically, tree updates

4. **Results Display**
   - **Pattern**: Accordion-style resource cards (collapsed by default)
   - **Prioritization**: Failed concepts listed first
   - **Visual Hierarchy**: Numbered steps (1, 2, 3...) show recommended order
   - **Resource Cards**: Expandable with icon-coded resource types (video/article/interactive)

**Micro-Interactions:**

| Element | Trigger | Animation | Purpose |
|---------|---------|-----------|---------|
| Quiz button hover | Mouse over | Scale 1.05 + shadow | Affordance |
| Node status change | Quiz completion | Color fade transition (0.3s) | Smooth feedback |
| Loading spinner | API call start | Rotate 360° infinite | Processing indicator |
| Success message | Save action | Slide in from top + fade out after 3s | Confirmation |
| Resource card expand | Click | Height transition (0.2s ease) | Progressive disclosure |
| Form validation | Input blur | Red border + error text fade in | Error prevention |

**Accessibility Considerations:**
- **Keyboard Navigation**: Tab order follows visual hierarchy (input → generate → tree nodes → quiz)
- **Screen Readers**: ARIA labels on all interactive elements (e.g., "Test your knowledge of Linear Algebra")
- **Focus Indicators**: Blue outline on focused elements (2px solid)
- **Color Blindness**: Status uses icons + text labels, not color alone (✓ passed, ✗ failed, ? untested)
- **Touch Targets**: Minimum 44×44px for mobile buttons

---

#### Technical Architecture

**System Architecture Diagram:**

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              React Application (Vite)                     │  │
│  │  ┌────────────┐  ┌──────────────┐  ┌─────────────────┐  │  │
│  │  │   Pages    │  │  Components  │  │   State Mgmt    │  │  │
│  │  │            │  │              │  │                 │  │  │
│  │  │ - Landing  │  │ - TreeView   │  │ - Redux         │  │  │
│  │  │ - Dashboard│  │ - Quiz       │  │                 │  │  │
│  │  │ - Mapper   │  │ - NodeCard   │  │ - Local State   │  │  │
│  │  │ - Profile  │  │ - ResourceCard│  │                │  │  │
│  │  └────────────┘  └──────────────┘  └─────────────────┘  │  │
│  │                                                           │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │           API Client (Fetch)                      │   │  │
│  │  │  - Authentication requests                        │   │  │
│  │  │  - AI API calls (concept mapping, quizzes, etc.)  │   │  │
│  │  │  - User data CRUD operations                      │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                             │                                   │
│                             │ HTTPS (JWT in HTTP-only cookie)   │
└─────────────────────────────┼───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SERVER (Node.js + Express)                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    API Routes                             │  │
│  │  ┌──────────┐  ┌───────────┐  ┌──────────────────────┐  │  │
│  │  │  /auth   │  │  /trees   │  │  /ai                 │  │  │
│  │  │          │  │           │  │                      │  │  │
│  │  │ - POST   │  │ - GET     │  │ - POST /generate-tree│  │  │
│  │  │   /signup│  │   /:id    │  │ - POST /generate-quiz│  │  │
│  │  │ - POST   │  │ - POST    │  │ - POST /resources    │  │  │
│  │  │   /login │  │   /create │  │                      │  │  │
│  │  │ - POST   │  │ - PATCH   │  │                      │  │  │
│  │  │   /logout│  │   /:id    │  │                      │  │  │
│  │  └──────────┘  └───────────┘  └──────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    Middleware                             │  │
│  │  - CORS configuration                                     │  │
│  │  - JWT authentication (verify token from cookie)         │  │
│  │  - Request logging (Morgan)                              │  │
│  │  - Error handling (centralized error middleware)         │  │
│  │  - Rate limiting (express-rate-limit)                    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               AI Service Integration Layer                │  │
│  │  - API key management (environment variables)            │  │
│  │  - Request formatting (prompt templates)                 │  │
│  │  - Response parsing (JSON extraction & validation)       │  │
│  │  - Error handling (fallback messages, retry logic)       │  │
│  │  - Rate limit monitoring                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                             │                                   │
│                             │ Mongoose ODM                      │
└─────────────────────────────┼───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  DATABASE (MongoDB Atlas)                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                     Collections                           │  │
│  │                                                           │  │
│  │  users {                                                  │  │
│  │    _id: ObjectId,                                         │  │
│  │    email: String (unique, indexed),                       │  │
│  │    passwordHash: String,                                  │  │
│  │    createdAt: Date,                                       │  │
│  │    lastLogin: Date                                        │  │
│  │  }                                                        │  │
│  │                                                           │  │
│  │  learningPaths {                                          │  │
│  │    _id: ObjectId,                                         │  │
│  │    userId: ObjectId (indexed, ref: 'User'),              │  │
│  │    concept: String,                                       │  │
│  │    subject: String,                                       │  │
│  │    level: String (enum),                                  │  │
│  │    treeData: Object (full prerequisite tree JSON),       │  │
│  │    quizResults: Map<nodeId, Boolean>,                    │  │
│  │    studyResources: Map<nodeId, Object>,                  │  │
│  │    createdAt: Date (indexed),                            │  │
│  │    updatedAt: Date                                        │  │
│  │  }                                                        │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              EXTERNAL SERVICES (Third-Party APIs)                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  AI Model APIs                                            │  │
│  │  - Google Gemini 1.5 Flash (development)                 │  │
│  │  - OpenAI GPT-4o-mini (optional)                       │  │
│  │  - Anthropic Claude Sonnet (optional)           │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**Data Flow Examples:**

**1. User Creates Concept Map (Authenticated)**
```
1. User submits concept form → React component
   ↓
2. API client sends POST /trees/create { concept, level, subject }
   ↓
3. Express route handler validates JWT from cookie
   ↓
4. Server calls AI service layer → POST to Gemini API
   ↓
5. AI returns prerequisite tree JSON
   ↓
6. Server saves tree to MongoDB (learningPaths collection)
   ↓
7. Server responds with tree data + _id
   ↓
8. React updates state, renders TreeView component
```

**2. User Takes Quiz (Session State)**
```
1. User clicks "Test Knowledge" → QuizModal opens
   ↓
2. API client sends POST /ai/generate-quiz { concept, description, level }
   ↓
3. Server calls Gemini API with quiz prompt
   ↓
4. AI returns 3 quiz questions (JSON)
   ↓
5. Server sends quiz to client (does NOT save yet)
   ↓
6. React stores quiz in local state (not persisted)
   ↓
7. User answers all 3 questions
   ↓
8. React calculates pass/fail (2/3 threshold)
   ↓
9. API client sends PATCH /trees/:id { quizResults: { nodeId: true/false } }
   ↓
10. Server updates learningPath document in MongoDB
    ↓
11. React updates TreeView with new node status
```

**Component Communication Patterns:**

| Pattern | Use Case | Implementation |
|---------|----------|----------------|
| **Props Down** | Parent → Child data flow | `<TreeView tree={treeData} />` |
| **Callbacks Up** | Child → Parent events | `<QuizModal onComplete={(result) => ...} />` |
| **Context** | Global auth state | `AuthContext.Provider` wraps app |
| **Local State** | Component-specific data | `useState()` for form inputs, quiz state |
| **API State** | Server data caching | Custom hooks like `useLearningPaths()` |

**State Management Strategy:**

```javascript
// Global State (React Context)
AuthContext {
  user: { id, email } | null,
  login: (credentials) => Promise,
  logout: () => Promise,
  isAuthenticated: boolean
}

// Local State (useState)
ConceptMapperPage {
  concept: string,
  subject: string,
  level: string,
  tree: TreeData | null,
  loading: boolean,
  error: string | null
}

QuizModal {
  currentQuestionIndex: number,
  answers: boolean[],
  showResults: boolean
}

// Server State (Fetched via API)
Dashboard {
  learningPaths: LearningPath[], // Fetched from GET /trees
  loading: boolean,
  error: string | null
}
```

**API Contract Examples:**

```typescript
// POST /auth/signup
Request: { email: string, password: string }
Response: { user: { id, email }, token: string }

// POST /trees/create
Request: { concept: string, subject?: string, level: string }
Response: { 
  _id: string,
  treeData: { target: string, prerequisites: Node[] },
  createdAt: Date
}

// GET /trees
Response: LearningPath[] (user's saved trees)

// PATCH /trees/:id
Request: { quizResults?: Map, studyResources?: Map }
Response: { success: boolean, updatedPath: LearningPath }
```

**Security Considerations:**

- **Authentication**: JWT stored in HTTP-only cookie (prevents XSS attacks)
- **Authorization**: Middleware verifies userId from token matches resource owner
- **Input Validation**: Joi schemas validate request bodies before processing
- **Rate Limiting**: 100 requests/15 min per IP (prevents API abuse)
- **CORS**: Whitelist only frontend domain (Vercel URL)
- **Environment Variables**: API keys never exposed to client
- **Password Security**: bcrypt with 10 salt rounds

**Performance Optimizations:**

- **Frontend**:
  - Code splitting by route (React.lazy)
  - Tree virtualization for large graphs (react-window)
  - Debounce concept input (reduce API calls)
  - Optimistic UI updates (quiz results show immediately)

- **Backend**:
  - MongoDB indexes on userId, createdAt (fast queries)
  - Response compression (gzip)
  - AI response caching (same concept → cached tree for 24h)

- **Deployment**:
  - Vercel Edge Network (CDN for static assets)
  - Render auto-scaling (handles traffic spikes)

**Error Handling Strategy:**

```javascript
// Client-side
try {
  const tree = await generateTree(concept);
  setTree(tree);
} catch (error) {
  if (error.status === 401) {
    // Redirect to login
  } else if (error.status === 429) {
    showError("Too many requests. Try again in 1 minute.");
  } else {
    showError("Failed to generate tree. Please try again.");
  }
}

// Server-side
app.use((error, req, res, next) => {
  logger.error(error);
  
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }
  
  if (error.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // Generic fallback
  res.status(500).json({ error: 'Internal server error' });
});
```

---
</details>

### Skeleton plane

<details>
   <summary>Skeleton plane considerations(expand for details)</summary>

#### Wireframes & Interface Design

**Design Principles:**
- **Mobile-First**: Wireframes prioritize mobile layout, then scale up to tablet/desktop
- **Progressive Disclosure**: Information revealed as needed, avoiding cognitive overload
- **Consistent Patterns**: Reusable UI components across all screens
- **Visual Hierarchy**: Size, color, and spacing guide user attention
- **Touch-Friendly**: Minimum 44×44px touch targets on mobile

---

#### 1. Landing Page (Unauthenticated)

**Desktop View (1200px+)**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] Vertex                    [Features] [How It Works] [Login] [Sign Up]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              [Brain Icon]                                       │
│         Map Your Learning Journey                               │
│    Discover exactly what you need to learn first               │
│                                                                 │
│         [Start Mapping Free] [Watch Demo →]                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                    How It Works                                 │
│                                                                 │
│   [1️⃣]              [2️⃣]              [3️⃣]                       │
│ Enter Concept     Test Knowledge    Get Learning Path          │
│   [Input icon]     [Quiz icon]      [Path icon]                │
│  "Neural Networks"  Quick 3-min quiz  Personalized resources   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│              Sample Concept Tree Preview                        │
│                                                                 │
│              [Neural Networks (Target)]                         │
│                        ↑                                        │
│              [Backpropagation] ← Interactive demo               │
│                  ↑         ↑                                    │
│        [Calculus] [Linear Algebra]                              │
│                                                                 │
│           [Try It Yourself →]                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Footer: About | Privacy | Contact                             │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile View (375px)**
```
┌───────────────────────┐
│ ☰  Vertex        [CTA]│
├───────────────────────┤
│                       │
│    [Brain Icon]       │
│                       │
│   Map Your Learning   │
│       Journey         │
│                       │
│ Discover what you need│
│    to learn first     │
│                       │
│ [Start Mapping Free]  │
│   [Watch Demo ↓]      │
│                       │
├───────────────────────┤
│    How It Works       │
│                       │
│   [1️⃣ Input icon]     │
│   Enter Concept       │
│   "Neural Networks"   │
│                       │
│   [2️⃣ Quiz icon]      │
│   Test Knowledge      │
│   Quick 3-min quiz    │
│                       │
│   [3️⃣ Path icon]      │
│   Get Learning Path   │
│   Personalized tips   │
│                       │
├───────────────────────┤
│  Sample Tree Preview  │
│  [View Full Tree →]   │
│                       │
├───────────────────────┤
│  [About] [Privacy]    │
└───────────────────────┘
```

---

#### 2. Sign Up / Login Page

**Desktop & Mobile (Centered Card)**
```
┌─────────────────────────────────┐
│        [Back ←] Vertex          │
├─────────────────────────────────┤
│                                 │
│     Create Your Account         │
│  Start mapping your learning    │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Email                   │   │
│  │ [__________________]    │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Password (min 8 chars)  │   │
│  │ [__________________] 👁  │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Confirm Password        │   │
│  │ [__________________] 👁  │   │
│  └─────────────────────────┘   │
│                                 │
│  [ ] I agree to Terms & Privacy│
│                                 │
│  [    Create Account    ]       │
│                                 │
│  ─────────── OR ───────────     │
│                                 │
│  Already have account? [Login]  │
│                                 │
└─────────────────────────────────┘

**Login Variant:**
- Same layout, only 2 fields (email, password)
- "Forgot password?" link below fields
- "Don't have account? [Sign Up]" at bottom
```

**Error States:**
```
┌─────────────────────────────────┐
│ Email                           │
│ [invalid@email] ⚠️               │
│ ↳ Please enter valid email      │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Password                        │
│ [********] ⚠️                    │
│ ↳ Password must be 8+ characters│
└─────────────────────────────────┘
```

---

#### 3. Concept Input Form (Authenticated & Guest Mode)

**Desktop View**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] Dashboard  [+ New Map]  [Profile ▼]                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              [Brain Icon]                                       │
│         What concept are you struggling with?                   │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Concept (required)                                        │ │
│  │ [_____________________________________]  0/100            │ │
│  │ e.g., Neural Networks, Quantum Mechanics, Calculus        │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌──────────────────────────┐  ┌───────────────────────────┐  │
│  │ Subject (optional)       │  │ Your Level               │  │
│  │ [___________________]    │  │ [Undergraduate ▼]        │  │
│  │ e.g., Computer Science   │  │  • High School           │  │
│  └──────────────────────────┘  │  • Undergraduate         │  │
│                                 │  • Graduate              │  │
│                                 └───────────────────────────┘  │
│                                                                 │
│              [   Generate Knowledge Tree   ]                    │
│                  (disabled until concept entered)               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  💡 Tip: Be specific! "Backpropagation in neural networks"     │
│     works better than just "Machine Learning"                   │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile View**
```
┌───────────────────────┐
│ ☰  Vertex     [Profile]│
├───────────────────────┤
│                       │
│   [Brain Icon]        │
│                       │
│ What concept are you  │
│   struggling with?    │
│                       │
│ ┌───────────────────┐ │
│ │ Concept (required)│ │
│ │ [______________] │ │
│ │ e.g., Neural Nets │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ Subject (optional)│ │
│ │ [______________] │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ Your Level        │ │
│ │ [Undergraduate ▼] │ │
│ └───────────────────┘ │
│                       │
│ [Generate Tree]       │
│                       │
│ 💡 Tip: Be specific!  │
└───────────────────────┘
```

**Loading State:**
```
┌───────────────────────┐
│    [Spinner Icon]     │
│                       │
│  Analyzing concept    │
│   dependencies...     │
│                       │
│    ████░░░░░ 45%     │
└───────────────────────┘
```

---

#### 4. Knowledge Tree Display

**Desktop View**
```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back] Target: Neural Networks                [View Path]     │
├─────────────────────────────────────────────────────────────────┤
│  Click "Test Knowledge" on each concept to assess understanding  │
│                                                                 │
│  Legend: [✓ Passed] [✗ Failed] [? Untested]                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 🎯 Neural Networks                              [Target] │  │
│  │ The goal concept you want to understand                  │  │
│  │                                              [? Untested] │  │
│  └──────────────────────────────────────────────────────────┘  │
│         │                                                        │
│         ├────────────────────────────────────────┐              │
│         │                                        │              │
│  ┌──────▼──────────────────┐            ┌──────▼──────────┐   │
│  │ Backpropagation         │            │ Gradient Descent│   │
│  │ Algorithm to train NNs  │            │ Optimization... │   │
│  │             [✗ Failed]  │            │    [✓ Passed]   │   │
│  │   [Retake Quiz]         │            │                 │   │
│  └──────┬──────────────────┘            └─────────────────┘   │
│         │                                                        │
│         ├──────────┬─────────────┐                              │
│         │          │             │                              │
│  ┌──────▼───┐  ┌──▼──────┐  ┌──▼──────────┐                   │
│  │ Calculus │  │ Linear  │  │ Chain Rule  │                   │
│  │ [✓]      │  │ Algebra │  │ [?]         │                   │
│  │          │  │ [✗]     │  │ [Test Now]  │                   │
│  └──────────┘  └─────────┘  └─────────────┘                   │
│                     │                                            │
│              ┌──────┴──────┐                                    │
│              │             │                                    │
│        ┌─────▼────┐  ┌────▼─────┐                             │
│        │ Matrices │  │ Vectors  │                             │
│        │ [?]      │  │ [?]      │                             │
│        └──────────┘  └──────────┘                             │
│                                                                 │
│  Progress: 2/7 concepts tested (29%)                           │
│                                                                 │
│  [View Learning Path] (available after testing)                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile View (Collapsible Tree)**
```
┌───────────────────────┐
│ ← Neural Networks     │
│ Progress: 2/7 (29%)   │
├───────────────────────┤
│                       │
│ 🎯 Neural Networks    │
│ [? Untested]          │
│                       │
│ ▼ Prerequisites (2)   │
│                       │
│ ┌───────────────────┐ │
│ │ Backpropagation   │ │
│ │ [✗ Failed]        │ │
│ │ [Retake Quiz]     │ │
│ └───────────────────┘ │
│                       │
│ ▼ Needs first (3):    │
│   • Calculus [✓]     │
│   • Linear Alg [✗]   │
│   • Chain Rule [?]   │
│                       │
│ ┌───────────────────┐ │
│ │ Gradient Descent  │ │
│ │ [✓ Passed]        │ │
│ └───────────────────┘ │
│                       │
└───────────────────────┘
```

---

#### 5. Quiz Modal

**Desktop Overlay**
```
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║ Testing: Linear Algebra                         [✕ Close] ║  │
│  ║───────────────────────────────────────────────────────────║  │
│  ║                                                           ║  │
│  ║  Question 1 of 3                                          ║  │
│  ║  ████████░░░░░ 33%                                        ║  │
│  ║                                                           ║  │
│  ║  What is the result of multiplying a 2×3 matrix by a     ║  │
│  ║  3×2 matrix?                                              ║  │
│  ║                                                           ║  │
│  ║  ┌───────────────────────────────────────────────────┐   ║  │
│  ║  │ ○ A) A 2×2 matrix                                 │   ║  │
│  ║  └───────────────────────────────────────────────────┘   ║  │
│  ║                                                           ║  │
│  ║  ┌───────────────────────────────────────────────────┐   ║  │
│  ║  │ ○ B) A 3×3 matrix                                 │   ║  │
│  ║  └───────────────────────────────────────────────────┘   ║  │
│  ║                                                           ║  │
│  ║  ┌───────────────────────────────────────────────────┐   ║  │
│  ║  │ ○ C) A 2×3 matrix                                 │   ║  │
│  ║  └───────────────────────────────────────────────────┘   ║  │
│  ║                                                           ║  │
│  ║  ┌───────────────────────────────────────────────────┐   ║  │
│  ║  │ ○ D) Not possible                                 │   ║  │
│  ║  └───────────────────────────────────────────────────┘   ║  │
│  ║                                                           ║  │
│  ║                                    [    Next Question →]  ║  │
│  ║                                                           ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile Full-Screen**
```
┌───────────────────────┐
│ [✕] Linear Algebra    │
├───────────────────────┤
│ Question 1 of 3       │
│ ████████░░░░░ 33%    │
│                       │
│ What is the result of │
│ multiplying a 2×3     │
│ matrix by a 3×2       │
│ matrix?               │
│                       │
│ ┌───────────────────┐ │
│ │ ○ A) 2×2 matrix   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ ○ B) 3×3 matrix   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ ○ C) 2×3 matrix   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ ○ D) Not possible │ │
│ └───────────────────┘ │
│                       │
├───────────────────────┤
│ [  Next Question →  ] │
└───────────────────────┘
```

**Quiz Completion (Auto-closes, updates tree)**
```
┌───────────────────────┐
│  Results: 2/3 Correct │
│                       │
│  ✓ Question 1         │
│  ✓ Question 2         │
│  ✗ Question 3         │
│                       │
│  [✓ Passed]           │
│                       │
│  Closing in 2s...     │
└───────────────────────┘
```

---

#### 6. Learning Path Results

**Desktop View**
```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back to Tree] Your Personalized Learning Path               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📚 Based on your assessment, focus on these concepts first:   │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 1️⃣ Linear Algebra                              [Advanced]│  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ Mathematical study of vectors, matrices, and linear      │  │
│  │ transformations                                          │  │
│  │                                                          │  │
│  │ 💡 Study Tip: Focus on matrix multiplication rules      │  │
│  │    and eigenvector concepts first                        │  │
│  │                                                          │  │
│  │ 🏷️ Key Topics: Matrices • Vectors • Eigenvalues         │  │
│  │                                                          │  │
│  │ 📚 Recommended Resources:                               │  │
│  │                                                          │  │
│  │ ┌────────────────────────────────────────────────────┐  │  │
│  │ │ 🎥 3Blue1Brown - Essence of Linear Algebra         │  │  │
│  │ │    Visual intro perfect for intuitive understanding│  │  │
│  │ │    YouTube • 2 hours total                         │  │  │
│  │ └────────────────────────────────────────────────────┘  │  │
│  │                                                          │  │
│  │ ┌────────────────────────────────────────────────────┐  │  │
│  │ │ 📄 Khan Academy - Linear Algebra Course            │  │  │
│  │ │    Step-by-step lessons with practice problems    │  │  │
│  │ │    Khan Academy • Self-paced                       │  │  │
│  │ └────────────────────────────────────────────────────┘  │  │
│  │                                                          │  │
│  │ ┌────────────────────────────────────────────────────┐  │  │
│  │ │ 💻 MIT OCW 18.06 - Linear Algebra                  │  │  │
│  │ │    Comprehensive university-level course           │  │  │
│  │ │    MIT OpenCourseWare • 35 lectures                │  │  │
│  │ └────────────────────────────────────────────────────┘  │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 2️⃣ Chain Rule                                  [Foundational]│  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ Calculus technique for differentiating composite        │  │
│  │ functions                                                │  │
│  │                                                          │  │
│  │ 💡 Study Tip: Practice with nested functions first      │  │
│  │                                                          │  │
│  │ 📚 Recommended Resources: ...                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ ℹ️ Next Steps: Master these concepts in order, then    │   │
│  │   retake quizzes for dependent concepts. Your           │   │
│  │   understanding will improve from the foundation up!    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [  Save Learning Path  ]  [  Map Another Concept  ]           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile View (Collapsible Cards)**
```
┌───────────────────────┐
│ ← Your Learning Path  │
├───────────────────────┤
│ 📚 Focus on these     │
│    concepts first:    │
│                       │
│ ┌───────────────────┐ │
│ │ 1️⃣ Linear Algebra │ │
│ │ [Advanced]        │ │
│ │                   │ │
│ │ Mathematical study│ │
│ │ of vectors...     │ │
│ │                   │ │
│ │ ▼ Study Tip       │ │
│ │ ▼ Key Topics (3)  │ │
│ │ ▼ Resources (3)   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ 2️⃣ Chain Rule    │ │
│ │ [Foundational]    │ │
│ └───────────────────┘ │
│                       │
├───────────────────────┤
│ [Save Learning Path]  │
│ [Map Another Concept] │
└───────────────────────┘
```

---

#### 7. Dashboard (Authenticated)

**Desktop View**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] Vertex    [+ New Concept Map]           [Profile ▼]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Welcome back, Alex!                                            │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │ 🎯 5         │  │ ✓ 12         │  │ 📚 3         │        │
│  │ Concepts     │  │ Quizzes      │  │ Active       │        │
│  │ Mapped       │  │ Passed       │  │ Paths        │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Your Learning Paths                     [Sort: Recent ▼]      │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Neural Networks                                    📊 65% │  │
│  │ Computer Science • Undergraduate                          │  │
│  │ Created: 2 days ago • Last activity: 1 hour ago          │  │
│  │                                                          │  │
│  │ Progress: ████████████░░░░                               │  │
│  │ ✓ 4 passed • ✗ 2 need review • ? 1 untested            │  │
│  │                                                          │  │
│  │ [Resume Learning] [View Tree]                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Quantum Mechanics                                 📊 40% │  │
│  │ Physics • Graduate                                        │  │
│  │ Created: 1 week ago • Last activity: 3 days ago         │  │
│  │                                                          │  │
│  │ Progress: ████████░░░░░░░░                               │  │
│  │ ✓ 2 passed • ✗ 3 need review • ? 2 untested            │  │
│  │                                                          │  │
│  │ [Resume Learning] [View Tree]                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ ✅ Calculus                                       📊 100%│  │
│  │ Mathematics • Undergraduate                              │  │
│  │ Completed: 2 weeks ago                                   │  │
│  │                                                          │  │
│  │ Progress: ████████████████████                          │  │
│  │ ✓ All 5 concepts mastered!                              │  │
│  │                                                          │  │
│  │ [View Tree] [Export PDF]                                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile View**
```
┌───────────────────────┐
│ ☰  Vertex      [+ New]│
├───────────────────────┤
│ Welcome back, Alex!   │
│                       │
│ ┌─────┐ ┌─────┐ ┌───┐│
│ │🎯 5 │ │✓ 12│ │📚3││
│ │Maps │ │Pass│ │Act││
│ └─────┘ └─────┘ └───┘│
│                       │
├───────────────────────┤
│ Your Learning Paths   │
│ [Sort: Recent ▼]      │
│                       │
│ ┌───────────────────┐ │
│ │ Neural Networks   │ │
│ │ CS • Undergrad    │ │
│ │ ████████░░ 65%   │ │
│ │ ✓4 ✗2 ?1         │ │
│ │ Updated: 1h ago   │ │
│ │                   │ │
│ │ [Resume] [View]   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ Quantum Mechanics │ │
│ │ Physics • Grad    │ │
│ │ ████░░░░░░ 40%   │ │
│ │ ✓2 ✗3 ?2         │ │
│ │ Updated: 3d ago   │ │
│ │                   │ │
│ │ [Resume] [View]   │ │
│ └───────────────────┘ │
│                       │
│ ┌───────────────────┐ │
│ │ ✅ Calculus       │ │
│ │ Math • Undergrad  │ │
│ │ ██████████ 100%  │ │
│ │ Completed ✓       │ │
│ │ [View]            │ │
│ └───────────────────┘ │
│                       │
└───────────────────────┘
```

---

#### 8. User Profile / Settings

**Desktop View**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo] Dashboard  [+ New Map]  [Profile ▼]                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌────────────────────────────────────────┐  │
│  │              │  │  Account Settings                      │  │
│  │ Account      │  │                                        │  │
│  │              │  │  ┌──────────────────────────────┐     │  │
│  │ [Profile]    │  │  │ Email                        │     │  │
│  │              │  │  │ [alex@example.com]  [Change] │     │  │
│  │ Statistics   │  │  └──────────────────────────────┘     │  │
│  │              │  │                                        │  │
│  │ Preferences  │  │  ┌──────────────────────────────┐     │  │
│  │              │  │  │ Password                     │     │  │
│  │ [Logout]     │  │  │ [••••••••]  [Change Password]│     │  │
│  └──────────────┘  │  └──────────────────────────────┘     │  │
│                    │                                        │  │
│                    │  ┌──────────────────────────────┐     │  │
│                    │  │ Member Since                 │     │  │
│                    │  │ January 15, 2025             │     │  │
│                    │  └──────────────────────────────┘     │  │
│                    │                                        │  │
│                    │  [Delete Account]                      │  │
│                    │                                        │  │
│                    └────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Navigation Design

**Global Navigation Patterns:**

1. **Unauthenticated Header**
```
[Logo] Vertex    [Features] [How It Works]    [Login] [Sign Up]
```

2. **Authenticated Header**
```
[Logo] [Dashboard]    [+ New Concept Map]    [Profile ▼ Dropdown]
                                              ├─ Profile
                                              ├─ Settings
                                              └─ Logout
```

3. **Mobile Navigation (Hamburger)**
```
☰ Menu                              [Logo] Vertex           [Profile Icon]

When opened:
┌───────────────────┐
│ [✕] Menu          │
├───────────────────┤
│ Dashboard         │
│ + New Concept Map │
│ ─────────────     │
│ Profile           │
│ Settings          │
│ Logout            │
└───────────────────┘
```

---

#### Information Design

**Visual Hierarchy Principles:**

1. **Typography Scale:**
   - H1 (Page Titles): 36px / 600 weight
   - H2 (Section Titles): 24px / 600 weight
   - H3 (Card Titles): 18px / 600 weight
   - Body: 16px / 400 weight
   - Small/Meta: 14px / 400 weight

2. **Color System:**
   - Primary (CTA): Indigo 600 (`#4F46E5`)
   - Success: Green 600 (`#10B981`)
   - Error: Red 600 (`#EF4444`)
   - Warning: Yellow 600 (`#F59E0B`)
   - Neutral: Gray 900-100 scale

3. **Spacing System:**
   - Base unit: 4px
   - Component padding: 16px (4 units)
   - Section spacing: 32px (8 units)
   - Page margins: 24px mobile / 48px desktop

4. **Interactive States:**
   - Default: Base color
   - Hover: Slightly darker + shadow
   - Active: Scale 0.98
   - Focus: 2px outline, indigo color
   - Disabled: 50% opacity

---

#### Component Library

**Reusable UI Components Referenced in Wireframes:**

| Component | Usage | Variants |
|-----------|-------|----------|
| **Button** | Primary actions | Primary, Secondary, Text, Disabled |
| **Input Field** | Form inputs | Text, Password, Number, Error state |
| **Select Dropdown** | Option selection | Default, Open, Selected |
| **Card** | Content containers | Default, Hoverable, Selected |
| **Modal** | Overlays | Full-screen (mobile), Centered (desktop) |
| **Progress Bar** | Visual progress | Percentage, Multi-segment |
| **Status Badge** | Quiz results | Passed (green), Failed (red), Untested (gray) |
| **Tree Node** | Prerequisite display | Default, Expanded, Collapsed |
| **Toast Notification** | Feedback messages | Success, Error, Info |
| **Loading Spinner** | Async operations | Small, Medium, Large |

---

**Design System Reference:**
- All wireframes follow Material Design 3 spacing and elevation principles
- Touch targets: Minimum 44×44px on mobile
- Text contrast: Minimum WCAG AA (4.5:1 for body text)
- Focus indicators: 2px solid outline, never removed

---
</details>

## Agile methodology

#### Sprint Planning (5 Sprints)

**Sprint 1: Core AI Foundation with Backend**
*Goal: Build full-stack AI-powered concept mapping with secure API integration*

<details>
   <summary>Expand for details</summary>

**Frontend Features:**
- [ ] Project setup (Vite + React + TailwindCSS)
- [ ] Basic UI layout with concept input form
- [ ] Education level selection dropdown
- [ ] API client for backend communication
- [ ] Visual tree display component (basic version)
- [ ] Loading states for API calls
- [ ] Error handling and user-friendly error messages
- [ ] Environment variable setup (.env for backend URL)

**Backend Features:**
- [ ] Node.js + Express server setup
- [ ] `/api/trees/generate` POST endpoint for tree generation
- [ ] Google Gemini API integration (secure, server-side)
- [ ] Prompt engineering for prerequisite tree generation
- [ ] JSON parsing and validation from AI responses
- [ ] Error handling middleware (malformed responses, API failures)
- [ ] Rate limiting to prevent abuse
- [ ] Environment variable setup (.env with GEMINI_API_KEY)
- [ ] CORS configuration for frontend domain
- [ ] Basic logging/debugging

**Architecture:**
```
Frontend (React)
  ├─ ConceptInputForm → POST /api/trees/generate
  └─ TreeDisplay ← receives treeData JSON

Backend (Express)
  ├─ POST /api/trees/generate
  │  ├─ Validate input (concept, subject, level)
  │  ├─ Call Gemini API with prompt template
  │  ├─ Parse JSON response
  │  └─ Return treeData to frontend
  └─ Middleware (CORS, error handling, logging)

Gemini API (Secure, Server-Side)
  └─ API key never exposed to frontend
```

**Testing:**
- [ ] Manual testing of tree generation with various concepts
- [ ] Test edge cases (empty input, special characters, very long concept names)
- [ ] Verify JSON parsing handles malformed AI responses
- [ ] Test loading states and error messages display correctly
- [ ] Test backend error handling (API failures, timeouts)
- [ ] Test CORS configuration (prevent unauthorized requests)
- [ ] Test rate limiting (verify limits work)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

**Deployment:**
- [ ] Deploy backend to Render (connect GitHub repo, free tier)
- [ ] Configure environment variables on Render (GEMINI_API_KEY)
- [ ] Deploy frontend to Vercel (connect GitHub repo)
- [ ] Configure frontend environment variables on Vercel (BACKEND_URL)
- [ ] Test full flow: Vercel frontend → Render backend → Gemini API
- [ ] Verify no API keys are exposed in browser network requests
- [ ] Monitor API usage on Render logs

**Deliverable:** Full-stack application with frontend deployed on Vercel and backend on Render, both accessible via public URLs

**Success Criteria:**
- User can input a concept and see a dependency tree generated via backend
- Tree generation takes <5 seconds (backend processes AI response)
- Gemini API key is never visible in browser/network requests
- App is accessible via public URLs (Vercel frontend + Render backend)
- No console errors or unhandled API failures
- Rate limiting prevents abuse from same IP
- All data flows securely between frontend ↔ backend ↔ Gemini
</details>

---

**Sprint 2: Assessment System (Week 2)**
*Goal: Build quiz generation and validation logic*

<details>
   <summary>Expand for details</summary>

**Features:**
- [ ] Quiz generation prompt engineering
- [ ] Quiz UI component with multiple-choice questions
- [ ] Answer validation logic
- [ ] Quiz state management (current question, answers, scoring)
- [ ] Pass/fail determination (2/3 correct)
- [ ] Visual status indicators (passed/failed/untested)
- [ ] Resource recommendation AI prompts
- [ ] Study resource display component
- [ ] Quiz progress indicator
- [ ] Retake quiz functionality

**Testing:**
- [ ] Test quiz generation for all prerequisite levels (foundational/intermediate/advanced)
- [ ] Verify answer validation logic (correct/incorrect scoring)
- [ ] Test pass/fail threshold (2/3 correct)
- [ ] Test quiz state persistence during session
- [ ] Verify resource generation matches failed concepts
- [ ] Test "Retake Quiz" functionality resets state correctly
- [ ] Mobile responsiveness testing for quiz UI

**Deployment:**
- [ ] Deploy updated frontend to Vercel (automatic via Git push)
- [ ] Smoke test: Complete full assessment flow in production
- [ ] Monitor Gemini API usage/rate limits
- [ ] Test resource rendering on different screen sizes

**Deliverable:** Complete assessment flow from tree → quiz → resources deployed and accessible

**Success Criteria:**
- Users can take quizzes on any prerequisite concept
- Quiz results correctly identify knowledge gaps (validated with test cases)
- Personalized resources are generated for failed concepts
- No regression in tree generation from Sprint 1

</details>

---

**Sprint 3: Backend & Authentication (Week 3)**
*Goal: Build server infrastructure and user accounts*
<details>
   <summary>Expand for details</summary>

**Features:**
- [ ] Node.js + Express server setup
- [ ] MongoDB Atlas configuration (free tier)
- [ ] User schema (username, email, password hash)
- [ ] Learning path schema (concept, tree data, quiz results, timestamps)
- [ ] JWT authentication middleware
- [ ] Sign up endpoint with password hashing (bcrypt)
- [ ] Login endpoint with JWT generation
- [ ] Protected routes for user data
- [ ] HTTP-only cookie configuration
- [ ] Logout functionality
- [ ] Frontend auth context/state management
- [ ] Login/signup UI components
- [ ] Save learning path to database
- [ ] Retrieve user's learning paths

**Testing:**
- [ ] Unit tests for authentication endpoints (signup, login, logout)
- [ ] Test password hashing (verify bcrypt integration)
- [ ] Test JWT generation and validation
- [ ] Test protected routes reject unauthenticated requests
- [ ] Test database CRUD operations (create user, save learning path, retrieve data)
- [ ] Test HTTP-only cookie security (inspect in DevTools)
- [ ] Integration test: Full signup → login → save data → logout → login → retrieve data flow
- [ ] Test error handling (duplicate email, wrong password, invalid tokens)
- [ ] Test session persistence across page refreshes

**Deployment:**
- [ ] Deploy backend to Render (free tier)
- [ ] Configure MongoDB Atlas production cluster
- [ ] Set environment variables on Render (JWT_SECRET, MONGO_URI, etc.)
- [ ] Configure CORS for Vercel frontend domain
- [ ] Update frontend API calls to use Render backend URL
- [ ] Deploy updated frontend to Vercel

- [ ] Test authentication flow in production (signup, login, logout)
- [ ] Verify data persistence in MongoDB Atlas

**Deliverable:** Full-stack app with user authentication, both frontend and backend deployed

**Success Criteria:**
- Users can create accounts and log in via public URLs
- Authentication persists across page refreshes
- User data is securely stored in MongoDB
- Learning paths are saved and retrievable after login
- No authentication bypass vulnerabilities

</details>

---

**Sprint 4: Polish & UX Refinement (Week 4)**
*Goal: Enhance usability, responsiveness, and user experience*

<details>
   <summary>Expand for details</summary>

**Features:**
- [ ] Mobile-responsive design (Tailwind breakpoints)
- [ ] Tablet optimization
- [ ] Enhanced error handling (network failures, API errors)
- [ ] User-friendly error messages
- [ ] Loading skeleton components
- [ ] Improved visual hierarchy and spacing
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Status indicators on tree nodes
- [ ] Progress tracking UI (dashboard showing all learning paths)
- [ ] Smooth transitions and animations
- [ ] Empty states and onboarding hints
- [ ] Toast notifications for success/error states

**Testing:**
- [ ] Responsive design testing (mobile: 375px, tablet: 768px, desktop: 1920px)
- [ ] Test on real devices (iOS Safari, Android Chrome)
- [ ] Accessibility audit (Lighthouse, WAVE, keyboard-only navigation)
- [ ] Test error states (network offline, API timeout, 500 errors)
- [ ] Test loading skeletons during slow API calls
- [ ] User testing with 3-5 target users (record feedback)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance testing (Lighthouse score >90)

**Deployment:**
- [ ] Deploy UI improvements to Vercel
- [ ] Test on multiple devices in production
- [ ] Monitor error logs (Vercel logs, Sentry optional)
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Run Lighthouse audit on production URL
- [ ] Fix any critical accessibility issues found

**Deliverable:** Production-ready UI/UX with polished design and accessibility compliance

**Success Criteria:**
- App works seamlessly on mobile, tablet, and desktop
- All error cases are handled gracefully with helpful messages
- Lighthouse accessibility score >90
- User testing shows intuitive navigation (average 4/5 rating)
- No console errors or warnings

</details>

---

**Sprint 5: Final Polish & Portfolio Prep (Week 5)**
*Goal: Production hardening and portfolio presentation*

<details>
   <summary>Expand for details</summary>

**Features:**
- [ ] API rate limiting (prevent abuse)
- [ ] Security headers (helmet.js)
- [ ] Input sanitization (prevent XSS, SQL injection)
- [ ] Comprehensive error logging
- [ ] Analytics setup (optional: PostHog, Plausible)
- [ ] Performance optimization (bundle size reduction)
- [ ] SEO meta tags and Open Graph images
- [ ] Custom domain setup (optional)
- [ ] Demo video/screenshots for portfolio
- [ ] README with setup instructions
- [ ] Code comments and documentation

**Testing:**
- [ ] End-to-end testing of all critical user flows (Playwright/Cypress optional)
- [ ] Security testing (check for common vulnerabilities)
- [ ] Load testing (simulate 50+ concurrent users with k6 or Artillery)
- [ ] Final cross-browser and cross-device testing
- [ ] Regression testing (verify all Sprint 1-4 features still work)
- [ ] User acceptance testing with fresh users (record walkthrough videos)
- [ ] Test error monitoring system (trigger errors, verify logs)

**Deployment:**
- [ ] Production optimization build
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring/alerting (UptimeRobot for backend health checks)
- [ ] Final security audit (check CORS, cookies, headers)
- [ ] Create staging environment for future changes
- [ ] Document deployment process
- [ ] Test rollback procedure

**Deliverable:** Live, production-ready MVP with portfolio presentation materials

**Success Criteria:**
- App is accessible at public URLs with 99.9% uptime
- All core features work in production
- No critical bugs or security vulnerabilities
- Portfolio-ready demo video and documentation
- Passed security checklist (OWASP top 10)

</details>

---

#### Post-MVP Roadmap

**Phase 2: Enhanced Learning Experience (Sprints 6-8)**
- Multi-topic dashboard with progress overview
- Learning path history and timestamps
- Progress analytics (time spent, concepts mastered)
- Improved resource curation (user ratings, better filtering)

**Phase 3: Advanced Features (Sprints 9-12)**
- Spaced repetition reminders
- Custom prerequisite editing
- Social features (share learning paths)
- Export functionality (PDF/image)
- Educator tools (student progress tracking)

**Phase 4: Scale & Optimize (Sprints 13+)**
- Multi-language support
- Video resource prioritization
- Premium AI model options (GPT-4o-mini, Claude)
- Performance optimization for large concept trees



