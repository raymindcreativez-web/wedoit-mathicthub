# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev` (runs on http://localhost:3000 by default)
- Build for production: `npm run build`
- Start production server: `npm run start`
- Lint code: `npm run lint` (uses ESLint)

## Project Structure

```
src/
├── app/                  # Next.js 13+ app directory
│   ├── api/             # API routes
│   │   ├── ai/          # AI-related endpoints (Gemini integration)
│   │   ├── config/      # Runtime configuration
│   │   ├── tickets/     # Support ticket management
│   │   └── ...          # Other API routes
│   ├── (feature)/       # Feature pages (dashboard, login, etc.)
│   ├── layout.tsx       # Root layout with font initialization
│   └── globals.css      # Global styles
├── components/          # Reusable UI components
├── context/             # React contexts (AuthContext)
├── lib/                 # Utility libraries (Firebase, Gemini)
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── types/               # Additional type definitions
```

## Key Features & Architecture

1. **Authentication**: Firebase Authentication with AuthContext for session management
2. **Database**: Cloud Firestore for data storage (users, classes, students, tickets, etc.)
3. **AI Integration**: Google Gemini API for generating intervention plans, lessons, and quizzes
4. **State Management**: React Context API for authentication state
5. **Styling**: Tailwind CSS for utility-first styling
6. **Runtime Configuration**: Dynamic configuration via Firestore

## Important Files

- `src/lib/firebase.ts` - Firebase initialization and configuration
- `src/lib/gemini.ts` - Gemini AI service wrapper
- `src/lib/firestore.ts` - Firestore CRUD operations for all entities
- `src/context/AuthContext.tsx` - Authentication context provider
- `src/app/layout.tsx` - Root layout with Geist font initialization
- `src/app/page.tsx` - Home page
- `src/app/dashboard/page.tsx` - Teacher dashboard
- `src/app/login/page.tsx` - Login page
- `src/app/register/page.tsx` - Registration page

## API Routes

All API routes are located in `src/app/api/` and follow Next.js 13+ route handlers:
- `POST /app/api/ai/generate-intervention` - Generate intervention plans using Gemini
- `POST /app/api/ai/generate-lesson` - Generate lesson plans
- `POST /app/api/ai/generate-quiz` - Generate quizzes
- `POST /app/api/tickets` - Create support tickets
- `POST /app/api/ict-tickets` - Create ICT support tickets
- `POST /app/api/config/runtime` - Get/set runtime configuration

## Data Models

TypeScript interfaces are defined in `src/types/`:
- User, Student, Teacher, Class
- MathScore, Assessment, AssessmentResult
- Ticket, ICTTicket (support tickets)
- InterventionPlan, MathAnalysis
- Resource, NotebookRef (educational resources)
- Report, AiLog (analytics and logging)
- RuntimeConfig

## Environment Variables

Required environment variables in `.env.local`:
- Firebase configuration keys (NEXT_PUBLIC_FIREBASE_*)
- Gemini API key (GEMINI_API_KEY)

## Common Development Tasks

1. **Adding a new page**: Create a file in `src/app/[route]/page.tsx`
2. **Adding an API route**: Create a route.ts file in `src/app/api/[resource]/route.ts`
3. **Adding a new component**: Create a component in `src/components/`
4. **Adding Firebase operations**: Add functions to `src/lib/firestore.ts`
5. **Adding new types**: Define interfaces in `src/types/` and export from `src/types/index.ts`
6. **Updating styles**: Modify `src/app/globals.css` or use Tailwind classes directly

## Best Practices

1. Always check if Firebase is configured before using database operations (mock data fallback implemented)
2. Use TypeScript interfaces for all data structures
3. Handle loading and error states in UI components
4. Follow Next.js 13+ app directory conventions
5. Keep API routes focused and secure
6. Use environment variables for configuration secrets
7. Implement proper error logging for AI service calls