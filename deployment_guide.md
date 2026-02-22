# 🚀 Netlify Deployment Guide

Follow these steps to deploy your portfolio to Netlify:

## 1. Connect Repository
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Choose **GitHub** and select your `portfilio` repository.

## 2. Configure Build Settings
The settings should be automatically detected due to the `netlify.toml` I created:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## 3. Set Environment Variables (CRITICAL)
Before clicking deploy, go to **"Site configuration"** -> **"Environment variables"**:
1. Click **"Add a variable"**.
2. **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
3. **Value**: `6817b6f3-3929-4b4c-84d9-6857af65a8c7`

## 4. Deploy
1. Click **"Deploy site"**.
2. Netlify will build and provide you with a live URL (e.g., `your-site.netlify.app`).

## 5. Verify
Once the build is "Published":
- Visit the URL.
- Test the "Archive Node Sync" (DetailedProjects) scroll.
- Test the Contact Form.
