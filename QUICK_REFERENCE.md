# Quick Reference Guide

Quick commands and configurations for Rupee-Setu developers.

## 🚀 Quick Start

```bash
# Clone and setup
git clone <your-repo>
cd RUPEE-SETU
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

## 📦 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:8080) |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests (watch mode) |
| `npm run test:ui` | Open Vitest UI |
| `npm run test:coverage` | Generate coverage report |
| `npm run version:update` | Update version info |

## 📂 Key File Locations

```
src/
├── components/
│   ├── ErrorBoundary.tsx      # Error boundary component
│   ├── LoadingSkeleton.tsx    # Loading states
│   ├── ui/                    # shadcn/ui components
│   └── dashboard/             # Dashboard components
├── lib/
│   ├── helpers.ts             # Utility functions
│   ├── constants.ts           # App constants
│   ├── performance.ts         # Performance monitoring
│   └── utils.ts               # Class name utilities
├── config/
│   └── env.ts                 # Environment validation
├── hooks/
│   ├── useAuth.tsx            # Authentication hook
│   └── useFinanceData.tsx     # Data fetching hook
└── test/
    ├── setup.ts               # Test configuration
    └── *.test.tsx             # Test files
```

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build config |
| `vitest.config.ts` | Test configuration |
| `tsconfig.json` | TypeScript config |
| `tailwind.config.ts` | Tailwind CSS config |
| `eslint.config.js` | Linting rules |
| `.prettierrc` | Code formatting |
| `components.json` | shadcn/ui config |

## 🌍 Environment Variables

```env
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJxxx...
```

## 🎨 UI Components

Import from `@/components/ui/`:
```typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
// ... and more
```

## 🪝 Custom Hooks

```typescript
// Authentication
const { user, signIn, signOut, loading } = useAuth();

// Finance Data
const {
  incomeData,
  expenseData,
  addIncomeMutation,
  addExpenseMutation,
  updateIncomeMutation,
  deleteIncomeMutation,
} = useFinanceData();
```

## 🛠️ Utility Functions

```typescript
import {
  formatCurrency,
  formatDate,
  calculatePercentage,
  truncateText,
} from '@/lib/helpers';

formatCurrency(1000); // ₹1,000
formatDate(new Date()); // Jan 15, 2024
calculatePercentage(50, 100); // 50
```

## 📊 Constants

```typescript
import {
  EXPENSE_CATEGORIES,
  INCOME_SOURCES,
  CHART_COLORS,
  ROUTES,
} from '@/lib/constants';
```

## 🧪 Writing Tests

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

## 🔐 Supabase Integration

```typescript
import { supabase } from '@/integrations/supabase/client';

// Query data
const { data, error } = await supabase
  .from('expenses')
  .select('*')
  .order('date', { ascending: false });

// Insert data
const { data, error } = await supabase
  .from('expenses')
  .insert({ user_id, amount, category });
```

## 🎯 React Query Usage

```typescript
// Fetch data
const { data, isLoading, error } = useQuery({
  queryKey: ['expenses', userId],
  queryFn: fetchExpenses,
});

// Mutate data
const mutation = useMutation({
  mutationFn: addExpense,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['expenses'] });
  },
});
```

## 🏗️ Adding New Pages

1. Create page in `src/pages/YourPage.tsx`
2. Add lazy import in `App.tsx`:
   ```typescript
   const YourPage = lazy(() => import('./pages/YourPage'));
   ```
3. Add route:
   ```typescript
   <Route path="/your-path" element={<YourPage />} />
   ```

## 🎨 Styling Quick Reference

```tsx
// Tailwind utilities
<div className="flex items-center justify-between p-4">

// Using cn() for conditional classes
<Button className={cn("bg-primary", isActive && "ring-2")}>

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🚨 Debugging

```typescript
// Development only logging
if (import.meta.env.DEV) {
  console.log('Debug:', data);
}

// Performance monitoring
import { logPerformanceMetrics } from '@/lib/performance';
logPerformanceMetrics();
```

## 📱 PWA Features

```typescript
// Check if running as PWA
const isPWA = window.matchMedia('(display-mode: standalone)').matches;

// Prompt installation (handled by components/pwa/InstallPrompt.tsx)
```

## 🔍 Common Issues

| Issue | Solution |
|-------|----------|
| TypeScript errors | Run `npm install`, restart TS server |
| Build fails | Clear `node_modules`, reinstall |
| Tests fail | Check test setup, mock dependencies |
| Styles not applying | Rebuild, check Tailwind config |
| 404 on refresh | Check `_redirects` and router config |

## 📚 Documentation Links

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/docs)
- [React Query](https://tanstack.com/query/latest)
- [Vitest](https://vitest.dev/)

## 🤝 Need Help?

- Check [README.md](README.md) for setup
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Read [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guides
- See [SECURITY.md](SECURITY.md) for security practices
- Check [CHANGELOG.md](CHANGELOG.md) for version history

---

**Pro Tip:** Keep this file bookmarked for quick reference! 📖
