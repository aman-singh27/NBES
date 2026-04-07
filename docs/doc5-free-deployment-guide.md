# NBES — Free Deployment Guide

This guide shows how to deploy the NBES Next.js site for free using Vercel.

## What you need

- A GitHub account
- A Vercel account
- Your project pushed to a Git repository
- Environment variables, if your app uses any

## Why Vercel

- It supports Next.js natively
- The free plan is enough for a small business website
- Git-based deployments are simple
- Every push to your main branch can trigger an automatic redeploy

## Step by Step

### 1. Prepare the project locally

1. Make sure the app builds successfully.
2. Use `cmd` for npm commands in this workspace if PowerShell gives you trouble.
3. Run the production build locally:

```bash
npm run build
```

4. Fix any errors before you deploy.

### 2. Put the project on GitHub

1. Create a new GitHub repository.
2. Add your project to git if it is not already tracked.
3. Commit your latest changes.
4. Push the code to GitHub.

Example:

```bash
git add .
git commit -m "Prepare NBES for deployment"
git push origin main
```

### 3. Create a Vercel account

1. Go to Vercel.
2. Sign in with GitHub.
3. Allow Vercel to access your repositories.

### 4. Import the repository

1. In Vercel, click New Project.
2. Select the NBES repository.
3. Vercel should detect that this is a Next.js app automatically.
4. Keep the default build settings unless you changed something unusual.

Typical defaults:

- Framework Preset: Next.js
- Build Command: npm run build
- Output Directory: leave empty for Next.js
- Install Command: npm install

### 5. Add environment variables if needed

If your app uses secret values later, add them before deployment.

1. Open the project settings in Vercel.
2. Go to Environment Variables.
3. Add each variable name and value.
4. Redeploy after adding them.

If the site does not use any environment variables, skip this step.

### 6. Deploy

1. Click Deploy.
2. Wait for Vercel to finish the build.
3. Open the generated preview URL.
4. Check the home page, navigation links, contact page, and any forms.

### 7. Verify the live site

Check these items after deployment:

1. The home page loads without errors.
2. Images and favicon load correctly.
3. All navigation links work.
4. The contact page works.
5. The site looks correct on mobile and desktop.
6. No console errors appear in the browser.

### 8. Connect the main branch for automatic deploys

1. Make sure the production branch is set to `main`.
2. Every future push to `main` will trigger a new deployment.
3. Use preview deployments for testing changes before merging.

## Free plan limits to know

- The free plan is fine for a brochure-style business site.
- Projects may sleep when inactive.
- You may hit bandwidth or build limits if traffic grows.
- For a larger production rollout, you may eventually need a paid plan.

## Common problems

### Build fails on Vercel

- Run `npm run build` locally first.
- Fix TypeScript or lint errors.
- Make sure all imports resolve.
- Check that your app does not depend on local-only files.

### Page works locally but not on Vercel

- Compare environment variables between local and Vercel.
- Make sure any API URLs are correct for production.
- Check for browser-only code running on the server.

### Favicon or assets do not show

- Confirm assets are committed to git.
- Make sure files are in the correct public or app asset location.
- Rebuild and redeploy after fixing the asset path.

## Recommended deployment flow for NBES

1. Finish the latest code changes.
2. Run `npm run build` locally.
3. Push to GitHub.
4. Deploy on Vercel.
5. Test the live URL on desktop and mobile.
6. Share the live link once everything passes.

## Best choice for this project

For NBES, Vercel is the simplest free deployment option because it is built for Next.js and requires very little setup.
