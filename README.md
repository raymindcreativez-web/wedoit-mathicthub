# MathICT Hub

An integrated platform for Mathematics and ICT education management built with Next.js.

## Features

- **Math Tracker**: Monitor student progress in mathematics concepts and skills
- **ICT Helpdesk**: Manage technical support tickets for students and staff
- **Teaching Resources**: Access lesson plans, worksheets, and multimedia content
- **AI-Powered Tools**: Generate lesson plans, quizzes, and intervention plans using Google Gemini AI
- **Authentication**: Secure login system with Firebase
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- Google Gemini API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with your environment variables:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id_here
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id_here

   # Google Gemini AI API Key
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── login/                # Login page
│   ├── dashboard/            # Dashboard overview
│   ├── math-tracker/         # Math tracking functionality
│   ├── ict-helpdesk/         # Support ticket system
│   ├── resources/            # Teaching resources library
│   └── api/                  # API routes
│       ├── ai/               # AI-powered endpoints
│       │   ├── generate-lesson/
│       │   ├── generate-quiz/
│       │   └── generate-intervention/
│       ├── tickets/          # Ticket management API
│       └── config/           # System configuration
├── components/               # Reusable UI components
│   ├── Navbar.tsx            # Navigation bar
│   ├── DashboardCard.tsx     # Dashboard cards
│   ├── TicketForm.tsx        # Support ticket form
│   └── MathScoreForm.tsx     # Math score recording form
├── lib/                      # Firebase and AI integration
│   ├── firebase.ts           # Firebase initialization
│   ├── firestore.ts          # Firestore operations
│   ├── gemini.ts             # Gemini AI integration
│   └── auth.ts               # Authentication helpers
├── types/                    # TypeScript interfaces
│   ├── user.ts               # User-related types
│   ├── math.ts               # Math tracking types
│   ├── ticket.ts             # Ticket system types
│   └── config.ts             # Configuration types
└── utils/                    # Utility functions
    ├── calculateMastery.ts   # Mastery calculation helpers
    └── anonymizeStudents.ts  # Student data privacy helpers
```

## Available Pages

- `/` - Home page with overview of all features
- `/login` - User authentication page
- `/dashboard` - Main dashboard with quick access to all modules
- `/math-tracker` - Mathematics progress tracking
- `/ict-helpdesk` - ICT support ticket management
- `/resources` - Teaching resources library

## API Endpoints

- `POST /api/ai/generate-lesson` - Generate lesson plans using AI
- `POST /api/ai/generate-quiz` - Generate quizzes using AI
- `POST /api/ai/generate-intervention` - Generate intervention plans using AI
- `GET /api/tickets` - Retrieve support tickets
- `POST /api/tickets` - Create new support ticket
- `GET /api/config/runtime` - Get system configuration

## Development

### Running Tests

```bash
# No tests configured yet - this is an MVP
```

### Building for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Firebase for authentication and database
- Google Gemini AI for AI-powered features
- Tailwind CSS for styling