# Contributing to Rupee-Setu

Thank you for your interest in contributing to Rupee-Setu! 🎉

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/RUPEE-SETU.git
   cd RUPEE-SETU
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript
- Strict mode is enabled
- Avoid using `any` type
- Prefer interfaces over type aliases for object shapes
- Use proper typing for all props and functions

### React
- Use functional components with hooks
- Follow the single responsibility principle
- Keep components small and focused
- Use proper prop validation

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design for all components

### Testing
- Write unit tests for utilities and helpers
- Write integration tests for complex features
- Aim for >80% code coverage
- Run tests before submitting PR: `npm test`

## Commit Messages

Follow conventional commits format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add expense category filter`

## Pull Request Process

1. Create a feature branch: `git checkout -b feat/your-feature-name`
2. Make your changes
3. Run linter: `npm run lint`
4. Run tests: `npm test`
5. Build the project: `npm run build`
6. Commit with clear messages
7. Push and create a PR
8. Wait for review and address feedback

## Code Review

All PRs require:
- Passing CI/CD checks
- Code review approval
- No merge conflicts
- Updated documentation (if needed)

## Questions?

Feel free to open an issue for discussion!
