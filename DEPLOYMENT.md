# Deployment Guide

This guide covers deploying Rupee-Setu to various platforms.

## Prerequisites

Before deploying, ensure you have:
- A Supabase project set up
- Database migrations applied
- Environment variables ready

## Platform-Specific Guides

### 1. Vercel (Recommended)

**Steps:**

1. Install Vercel CLI (optional)
   ```bash
   npm i -g vercel
   ```

2. Deploy via CLI
   ```bash
   vercel
   ```

3. Or connect GitHub repository on [Vercel Dashboard](https://vercel.com)

4. Set environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

5. Deploy!

**Configuration:**
The `vercel.json` file is already configured with proper settings.

---

### 2. Netlify

**Steps:**

1. Install Netlify CLI (optional)
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy via CLI
   ```bash
   netlify deploy --prod
   ```

3. Or drag-and-drop `dist` folder on [Netlify Drop](https://app.netlify.com/drop)

4. Set environment variables in Netlify dashboard

**Configuration:**
The `netlify.toml` file is already configured.

---

### 3. GitHub Pages

**Steps:**

1. Add to `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/'
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Use GitHub Actions workflow (already in `.github/workflows/`)

4. Enable GitHub Pages in repository settings

**Note:** GitHub Pages doesn't support server-side redirects for SPAs by default. Consider using hash routing or a custom 404.html workaround.

---

### 4. Self-Hosted (Docker)

**Dockerfile:**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

**Build and run:**
```bash
docker build -t rupee-setu .
docker run -p 80:80 rupee-setu
```

---

## Environment Variables

Required for all deployments:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## Post-Deployment Checklist

- [ ] Verify environment variables are set
- [ ] Test authentication flow
- [ ] Check database connectivity
- [ ] Test PWA installation
- [ ] Verify responsive design
- [ ] Check console for errors
- [ ] Test all routes
- [ ] Verify analytics (if configured)
- [ ] Test offline functionality
- [ ] Check Lighthouse scores

## Performance Optimization

After deployment:

1. **Enable Compression**
   - Ensure gzip/brotli compression is enabled
   - Most platforms enable this by default

2. **CDN Configuration**
   - Configure CDN for static assets
   - Set proper cache headers

3. **Monitoring**
   - Set up error tracking (Sentry, etc.)
   - Configure analytics
   - Monitor Core Web Vitals

## Continuous Deployment

GitHub Actions workflow (`.github/workflows/ci.yml`) automatically:
- Runs tests
- Lints code
- Builds the project
- Can deploy to production (configure secrets)

## Troubleshooting

### Build Fails
- Check Node.js version (20+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

### Environment Variables Not Working
- Ensure they're prefixed with `VITE_`
- Rebuild after changing env vars
- Check platform-specific env var settings

### 404 on Refresh
- Configure redirects (already in `_redirects`, `netlify.toml`, `vercel.json`)
- Ensure SPA routing is properly configured

### PWA Not Installing
- Check manifest.json
- Verify HTTPS is enabled (required for PWA)
- Check service worker registration

## Security Notes

- Never commit `.env` file
- Rotate Supabase keys regularly
- Enable RLS policies in Supabase
- Use HTTPS in production
- Configure CORS properly
- Set up rate limiting if needed

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review the logs
3. Open an issue on GitHub

---

Happy deploying! 🚀
