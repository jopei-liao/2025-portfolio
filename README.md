# 🚀 2025 Personal Portfolio Main Site

![Deploy Status](https://github.com/jopei-liao/2025-portfolio/actions/workflows/static.yml/badge.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This is my personal portfolio website, built with React and Vite. In addition to showcasing my resume and technical skills, this project serves as a gateway to multiple sub-projects, managed through a precise CI/CD workflow for multiple independent applications under a single domain.

🔗 **[Visit My Portfolio](https://jopei-liao.github.io/)**

---

## 🛠️ Technical Architecture

### Frontend Development

- **Core Framework**: React 19
- **Build Tool**: Vite (providing ultra-fast development experience and optimized bundle size)
- **Styling**: Tailwind CSS (responsive design and rapid UI iteration)
- **Routing**: React Router (SPA client-side routing)

### Automation & Deployment (DevOps)

- **CI/CD**: GitHub Actions
- **Hosting Platform**: GitHub Pages
- **Cross-Repo Deployment**: Compiles static files and pushes them to the dedicated `jopei-liao.github.io` repository via GitHub Actions.

---

## 🏗️ Project Architecture & Sub-project Management

To maintain clean and modular code, I have adopted an **"Independent Repositories, Unified Domain"** architecture. The main site and sub-projects are stored in different repositories but share the same GitHub Pages domain:

- **Main Site (This Repo)**: Deployed at the root directory `/`
- **Lost and Found (Sub-project)**: Deployed at the sub-directory `/lostandfound/` [View Source](https://github.com/jopei-liao/lostandfound)

### Deployment Protection Mechanism

The GitHub Actions script for the main site includes a `clean-exclude` configuration. This ensures that when the main site is updated, other projects located in sub-directories (such as `lostandfound`) are not accidentally deleted, achieving an automated maintenance process where multiple projects coexist without interference.

---

## 🚀 Quick Start

1. **Install Dependencies**
   `npm install`

2. **Local Development**
   `npm run dev`

3. **Production Build**
   `npm run build`

---

## 📂 Project Structure

```text
.
├── .github/workflows/         # CI/CD automation scripts
├── public/                    # Static public assets
├── src/
│   ├── assets/
│   │   ├── css/               # Global CSS
│   │   ├── images/            # Image assets
│   │   ├── json/              # Static JSON data (e.g. projectsData.json)
│   │   └── sass/              # Shared SASS variables/mixins/layout
│   ├── components/            # Reusable UI components
│   │   ├── Footer/
│   │   ├── Loading/
│   │   ├── Nav/
│   │   ├── ProjectLightbox/
│   │   └── Scroll/
│   ├── pages/                 # Route-level pages
│   │   ├── Home/
│   │   └── Projects/
│   ├── tests/                 # Unit/component tests and test setup
│   │   ├── components/
│   │   ├── mock/
│   │   ├── utils/
│   │   └── setup.js
│   ├── App.jsx                # Root app component
│   └── main.jsx               # App bootstrap entry
├── index.html
├── eslint.config.js
├── package.json
└── vite.config.js             # Vite configuration (deployment path, build options)
```

---

## 📄 License

This project is licensed under the ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg).

---

## 👤 Contact

**Jopei Liao**

- GitHub: [jopei-liao](https://github.com/jopei-liao)
- Email: [jopei.liao@gmaiol.com](jopei.liao@gmaiol.com)
- Portfolio: [jopei-liao.github.io](https://jopei-liao.github.io/)

```

```
