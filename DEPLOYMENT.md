# Deployment Guide 🚀

This guide will help you deploy your Portfolio Dashboard to various platforms.

## Quick Start

Your dashboard is already running locally at [http://localhost:3000](http://localhost:3000)

## Prerequisites

Before deploying, make sure you have:
- ✅ A GitHub account
- ✅ Git installed on your computer
- ✅ Your code pushed to a GitHub repository

## 🌐 Deploy to Vercel (Easiest & Recommended)

Vercel is the platform created by the makers of Next.js and offers the best integration.

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio Dashboard"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/dashboard-ui.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click **"New Project"**
4. Import your `dashboard-ui` repository
5. Click **"Deploy"** (no configuration needed!)
6. Wait ~2 minutes for deployment
7. Get your live URL: `https://your-project.vercel.app`

**That's it!** Your dashboard is now live. Every push to `main` will auto-deploy.

## 🦊 Deploy to Netlify

### Option 1: Drag & Drop (Fastest)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://app.netlify.com)
3. Drag the `.next` folder to the upload area
4. Your site is live!

### Option 2: GitHub Integration (Auto-deploy)

1. Go to [netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**

## 🐙 Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d out"
   }
   ```

3. Update `next.config.js`:
   ```javascript
   module.exports = {
     output: 'export',
     basePath: '/dashboard-ui',
     images: {
       unoptimized: true,
     },
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to your repo settings
   - Navigate to **Pages**
   - Select `gh-pages` branch
   - Your site: `https://USERNAME.github.io/dashboard-ui`

## 🔧 Environment Variables

If you need environment variables:

### Vercel
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add your variables
4. Redeploy

### Netlify
1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Trigger a new deploy

## 📊 Custom Domain

### Vercel
1. Go to **Project Settings** → **Domains**
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to **Domain settings**
2. Add custom domain
3. Update DNS records

## 🔄 Continuous Deployment

Once connected to GitHub:
- **Every push to `main`** triggers automatic deployment
- Pull requests get preview deployments
- Instant rollbacks if needed

## 📈 Monitoring

### Vercel Analytics
- Free analytics included
- Real-time visitor data
- Performance insights

### Netlify Analytics
- Available in paid plans
- Server-side analytics
- No client-side scripts needed

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill the process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🎉 Post-Deployment Checklist

- [ ] Test all features on mobile and desktop
- [ ] Update personal information in the dashboard
- [ ] Add your real projects and skills
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)
- [ ] Share your live URL!

## 🔗 Helpful Links

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Guide](https://pages.github.com/)

---

Need help? Open an issue on GitHub or reach out to the community!

**Happy Deploying! 🎊**
