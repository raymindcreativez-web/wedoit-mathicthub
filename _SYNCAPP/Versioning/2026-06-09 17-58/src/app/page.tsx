'use client';

import Link from 'next/link';
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-6 lg:px-0">
        <Features />
        <GettingStarted />
      </main>
      <Footer />
    </main>
  );
}

/* ---------------------------
   Navbar
   - Sticky, accessible, mobile-friendly
   --------------------------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-indigo-700">
          MathICT Hub
        </Link>

        <ul className="hidden md:flex gap-6 items-center text-sm">
          <li>
            <Link href="/dashboard" className="nav-link hover:text-indigo-600">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/math-tracker" className="nav-link hover:text-indigo-600">
              Math Tracker
            </Link>
          </li>
          <li>
            <Link href="/ict-helpdesk" className="nav-link hover:text-indigo-600">
              ICT Helpdesk
            </Link>
          </li>
          <li>
            <Link href="/resources" className="nav-link hover:text-indigo-600">
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow-sm hover:bg-indigo-700"
              aria-label="Sign in to MathICT Hub"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m12 0l-4-4m4 4l-4 4" />
              </svg>
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 text-sm hover:bg-indigo-50"
              aria-label="Create a new account"
            >
              Register
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Open menu"
          onClick={() => {
            // Minimal placeholder for mobile menu toggle; replace with real state in app
            alert("Open mobile menu");
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

/* ---------------------------
   Hero
   - Full-bleed gradient, headline, CTAs, illustration placeholder
   --------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="container mx-auto px-6 lg:px-0 py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Empower Learning with AI
            </h1>
            <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto lg:mx-0 opacity-95">
              Track progress, generate lessons, and support ICT needs in one hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold shadow hover:opacity-95"
                aria-label="Get started with MathICT Hub"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/60 text-white bg-white/10 hover:bg-white/20"
                aria-label="Explore features of MathICT Hub"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mx-auto max-w-md bg-white/10 rounded-xl p-6">
              <div
                role="img"
                aria-label="Illustration showing AI and education"
                className="h-56 bg-white/5 rounded-md flex items-center justify-center text-white/70"
              >
                Illustration Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   Features grid
   - Icon, title, description, hover lift
   --------------------------- */
function Features() {
  const cards = [
    {
      title: "Math Tracker",
      desc: "Track student progress in mathematics concepts and skills with detailed analytics and reporting.",
      icon: <IconChart />,
      href: "/math-tracker",
    },
    {
      title: "AI-Powered Tools",
      desc: "Generate lesson plans, quizzes, and intervention plans using AI technology.",
      icon: <IconRobot />,
      href: "/dashboard", // Link to dashboard since AI tools are accessible from there
    },
    {
      title: "Teaching Resources",
      desc: "Access lesson plans, worksheets, multimedia content, and other teaching materials.",
      icon: <IconBook />,
      href: "/resources",
    },
    {
      title: "ICT Helpdesk",
      desc: "Manage technical support tickets for students and staff with priority tracking and resolution workflows.",
      icon: <IconSupport />,
      href: "/ict-helpdesk",
    },
    {
      title: "Settings & Configuration",
      desc: "Configure your profile, preferences, and system settings for an optimal experience.",
      icon: <IconCog />,
      href: "/dashboard", // Link to dashboard since settings would be accessible from there
    },
    {
      title: "Sign In",
      desc: "Access your personalized dashboard and start using MathICT Hub features.",
      icon: <IconLogin />,
      href: "/login",
    },
  ];

  return (
    <section id="features" className="py-12">
      <h2 className="text-2xl font-bold mb-6">What you can do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article
            key={c.title}
            className="bg-white rounded-lg p-5 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1"
            aria-labelledby={`card-${c.title}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                {c.icon}
              </div>
              <div>
                <h3 id={`card-${c.title}`} className="font-semibold text-lg">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                <Link
                  className="text-indigo-600 text-sm mt-3 inline-block"
                  href={c.href}
                  >
                  Learn more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------
   Getting Started
   - Visual 3-step onboarding with CTAs
   --------------------------- */
function GettingStarted() {
  const steps = [
    {
      title: "Sign In",
      desc: "Access your account or create a new one to personalize your dashboard.",
      cta: { label: "Sign In", href: "/login" },
    },
    {
      title: "Explore Modules",
      desc: "Open Math Tracker, AI Tools, Resources, and ICT Helpdesk to see what fits your workflow.",
      cta: null,
    },
    {
      title: "Start Using",
      desc: "Track progress, manage tickets, and generate AI-powered lesson plans.",
      cta: null,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                {s.cta && (
                  <Link
                    className="inline-block mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md"
                    href={s.cta.href}
                  >
                    {s.cta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------
   Footer
   --------------------------- */
function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-700">MathICT Hub—Powered by wedoIT™solutions 2016-2026</div>
        <div className="flex gap-4 text-sm">
          <Link href="/docs" className="text-gray-700 hover:text-indigo-600">
            Docs
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-700 hover:text-indigo-600">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------
   Small inline SVG icons (kept minimal and accessible)
   Replace with your design system icons as needed
   --------------------------- */
function IconChart() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 5v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconRobot() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconSupport() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 8v6a6 6 0 0012 0V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconCog() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 014.27 16.9l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82L4.27 4.27A2 2 0 017.1 1.44l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09c.12.6.56 1.09 1.16 1.28.6.19 1.24.02 1.7-.4l.06-.06A2 2 0 0119.73 7.1l-.06.06a1.65 1.65 0 00-.33 1.82v.01c.19.6.56 1.09 1.16 1.28.6.19 1.24.02 1.7-.4l.06-.06A2 2 0 0120.73 11.1l-.06.06a1.65 1.65 0 00-.33 1.82z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
function IconLogin() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 17l5-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}