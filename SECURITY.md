# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Rupee-Setu, please report it responsibly:

1. **DO NOT** open a public issue
2. Email the details to the project maintainer
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Best Practices

### Authentication
- Uses Supabase Authentication with secure session management
- Sessions stored in localStorage with automatic refresh
- Row Level Security (RLS) enabled on all database tables

### Data Protection
- All data is encrypted in transit (HTTPS)
- Database encryption at rest via Supabase
- User data isolated via RLS policies
- No sensitive data in client-side logs

### Environment Variables
- Never commit `.env` files
- Use `.env.example` as template
- Validate all environment variables at startup
- Rotate credentials regularly

### Code Security
- TypeScript strict mode enabled
- Regular dependency updates via Dependabot
- ESLint security rules enabled
- Code review required for all PRs

### PWA Security
- Content Security Policy headers
- X-Frame-Options to prevent clickjacking
- X-Content-Type-Options to prevent MIME sniffing
- Referrer Policy for privacy

### Known Security Measures

1. **Input Validation**
   - Zod schema validation for all forms
   - XSS prevention via React's built-in escaping
   - SQL injection prevention via Supabase prepared statements

2. **Authentication**
   - Secure password requirements
   - Email verification
   - Session timeout

3. **API Security**
   - Rate limiting on API calls
   - CORS configuration
   - API key rotation

## Dependency Management

- Run `npm audit` regularly
- Update dependencies monthly
- Monitor security advisories

## Responsible Disclosure

We appreciate responsible disclosure and will:
- Acknowledge your report within 48 hours
- Provide regular updates on progress
- Credit you in security fixes (if desired)
- Work to fix issues promptly

Thank you for helping keep Rupee-Setu secure!
