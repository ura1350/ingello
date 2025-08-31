# Roksolana Design — GH Pages Ready (Vite + React + TS + Tailwind)

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1) Create repo on GitHub: `REPO_NAME`  
2) Edit `package.json` → `"homepage": "https://GITHUB_USER.github.io/REPO_NAME"`  
3) Push code:
```bash
git init
git branch -M main
git remote add origin https://github.com/GITHUB_USER/REPO_NAME.git
git add .
git commit -m "init"
git push -u origin main
```
4) Publish:
```bash
npm install
npm run build
npm run deploy
```
Your site → `https://GITHUB_USER.github.io/REPO_NAME`

Notes: `base: './'` set in Vite; `postbuild` copies SPA fallback (404.html) and creates `.nojekyll`.
