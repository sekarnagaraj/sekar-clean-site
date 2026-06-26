# Sekar Nagaraj Professional Portfolio

A clean static professional portfolio website for Sekar Nagaraj.

## Why this version

This is intentionally static HTML/CSS/JS. No Next.js, no npm install, no build command and no import alias issues.

## Deploy on Vercel

Use these Vercel settings:

- Framework Preset: Other
- Build Command: leave empty
- Output Directory: .

## Files

- `index.html` - page structure
- `styles.css` - design and responsive layout
- `script.js` - rendering, filtering and modal interactions
- `content-data.js` - all portfolio content, projects, blogs and skills
- `assets/profile.jpg` - profile photo
- `docs/ADD_CONTENT_GUIDE.md` - how to add new skills, projects and blogs

## How to update the site

Edit `content-data.js`, save, commit and push to GitHub.
Vercel will redeploy automatically.

```bash
git add .
git commit -m "Update portfolio content"
git push
```
