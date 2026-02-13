# Rupee-Setu

**Your Money, Your Control** - A modern, secure personal finance tracker for students

[![CI/CD](https://github.com/your-username/RUPEE-SETU/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/your-username/RUPEE-SETU/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## About

Rupee-Setu is a production-ready web-based expense and income tracking application designed specifically for students. Built with modern web technologies, it provides a secure, fast, and intuitive interface to manage your finances with confidence.

## ✨ Features

- 💰 **Track income and expenses** with detailed categorization
- 📊 **Visual analytics** with interactive charts and summaries
- 🔐 **Secure authentication** with Supabase and Row-Level Security
- 📱 **Progressive Web App** - Install on mobile and desktop
- 🎨 **Modern UI** with shadcn/ui components and Tailwind CSS
- ⚡ **Optimized performance** with code splitting and lazy loading
- 🌙 **Error boundaries** for graceful error handling
- 🧪 **Fully tested** with Vitest and React Testing Library
- 🔒 **Security headers** and best practices implemented
- 🚀 **CI/CD ready** with GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript (Strict Mode)
- **Build Tool**: Vite 5 with SWC
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Backend**: Supabase (PostgreSQL + Authentication)
- **State Management**: TanStack React Query + Context API
- **Form Handling**: React Hook Form + Zod validation
- **Routing**: React Router DOM v6
- **Testing**: Vitest + React Testing Library
- **PWA**: Vite PWA Plugin with Workbox

## 📋 Prerequisites

- Node.js 20+ and npm
- Supabase account and project
- Git

## 🚀 Quick Start

1. **Clone and install**
   ```bash
   git clone https://github.com/your-username/RUPEE-SETU.git
   cd RUPEE-SETU
   npm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

3. **Database setup**
   - Open Supabase SQL Editor
   - Run the migration from `supabase/migrations/`

4. **Start development**
   ```bash
   npm run dev
   ```
   
   App runs at `http://localhost:8080`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build with optimizations |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |
| `npm run test:ui` | Open Vitest UI |

## 📁 Project Structure

```
RUPEE-SETU/
├── .github/
│   └── workflows/        # CI/CD pipelines
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── dashboard/   # Dashboard components
│   │   └── layout/      # Layout components
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and helpers
│   ├── config/          # App configuration
│   ├── types/           # TypeScript definitions
│   ├── integrations/    # Third-party integrations
│   └── test/            # Test files and setup
├── supabase/            # Database migrations
└── public/              # Static assets
```

## 🧪 Testing

We maintain high code quality with comprehensive testing:

```bash
# Run tests
npm test

# Generate coverage report
npm run test:coverage

# Open interactive UI
npm run test:ui
```

## 🔒 Security

- TypeScript strict mode enabled
- Environment variable validation
- Row Level Security (RLS) on all database tables
- Security headers configured
- XSS protection via React
- CSRF protection via Supabase
- Regular dependency audits

See [SECURITY.md](SECURITY.md) for details.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Backend by [Supabase](https://supabase.com/)

---

Made with ❤️ for students everywhere
