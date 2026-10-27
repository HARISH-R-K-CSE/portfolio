# Harish R K — Interactive Developer & Researcher Portfolio

A modern, high-performance portfolio website engineered for **Harish R K** (Computer Science & Engineering undergraduate at Chennai Institute of Technology).

Designed with a dual-view interface:
1. **Interactive OLED Terminal View** inspired by `akashr.dev`: Features a retro laptop bezel, zsh shell prompt, ASCII art header, command history, tab autocomplete, mechanical keyboard SFX synthesizer, and Matrix digital rain mode.
2. **Executive Modern Portfolio View**: Tailored for LinkedIn recruiters, engineering managers, and academic researchers with Bento grids, verified LeetCode rating analytics, research paper showcases, and interactive project highlights.

---

## ⚡ Quick Architecture Overview

```
harish-portfolio/
├── .github/workflows/deploy.yml   # Automatic GitHub Pages CI/CD deployment
├── public/                        # Static assets & downloadable resume
│   └── Harish_RK_Resume.docx
├── src/
│   ├── components/
│   │   ├── TerminalView.jsx       # OLED Laptop Terminal (Zsh shell & commands)
│   │   ├── ExecutiveView.jsx      # Modern LinkedIn Recruiter UI
│   │   ├── MatrixRain.jsx         # Canvas Matrix digital rain animation
│   │   └── SocialIcons.jsx        # SVG Brand Icons
│   ├── data/
│   │   └── portfolioData.js       # ⭐ SINGLE SOURCE OF TRUTH (Update everything here!)
│   ├── utils/
│   │   └── soundEffects.js        # Web Audio API mechanical keypress synthesizer
│   ├── App.jsx                    # Dual-mode switcher & state
│   ├── index.css                  # Tailwind styles & OLED glow
│   └── main.jsx
├── vercel.json                    # 1-Click Vercel hosting config
├── netlify.toml                   # 1-Click Netlify hosting config
├── vite.config.js                 # Portable base config for zero-error deployments
└── package.json
```

---

## 🚀 How to Host This Website Live (Free Public URL)

### Option 1: GitHub Pages (Recommended — 100% Free Forever)
1. Initialize a git repository and push this folder to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of interactive portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
2. Go to your GitHub repository **Settings** → **Pages** → under **Build and deployment**, select **Source: GitHub Actions**.
3. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build and publish your website to:
   `https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/`

### Option 2: Vercel (Instant Deploy with Custom Domain)
1. In the terminal run:
   ```bash
   npx vercel
   ```
2. Follow the 2 prompts. Vercel will immediately output a live production URL (e.g., `https://harish-portfolio.vercel.app`).

### Option 3: Netlify
1. In the terminal run:
   ```bash
   npx netlify deploy --prod
   ```

---

## ✏️ How to Update Your Portfolio in the Future

Whenever you learn a new technology, launch a project, solve more LeetCode problems, or publish a paper:
1. Open [`src/data/portfolioData.js`](src/data/portfolioData.js).
2. Edit the corresponding section (`personal`, `projects`, `skills`, `publications`, `certifications`, `leetcodeStats`).
3. Save the file. Both the **Terminal View** and the **Executive Modern View** will update automatically!

---

## 💻 Local Development

```bash
# Run local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
