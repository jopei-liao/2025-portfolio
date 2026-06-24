# 🚀 2025 Personal Portfolio Website

![Deploy Status](https://github.com/jopei-liao/2025-portfolio/actions/workflows/static.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This is my personal portfolio website, refactored into **TypeScript** for optimal type safety and robust code maintainability. Transitioning from legacy static JSON storage, the portfolio now dynamically fetches content from **Hygraph CMS via a GraphQL API**, managed efficiently through Apollo Client.

In addition to showcasing my resume and technical skills, this project serves as a gateway to multiple sub-projects, managed through a precise CI/CD workflow for multiple independent applications under a single domain.

🔗 **[Visit My Portfolio](https://jopei-liao.github.io/)**

---

## 🛠️ Technical Architecture

### Frontend Development

- **Language**: TypeScript (Strict type-checking and self-documenting code)
- **Core Framework**: React 19 (SPA client-side application)
- **Data Fetching & State**: Apollo Client & GraphQL (Dynamic queries from Headless CMS)
- **Content Management**: Hygraph (Formerly GraphCMS, decoupled content infrastructure)
- **Build Tool**: Vite (Providing ultra-fast development experience and optimized bundle size)
- **Styling**: Tailwind CSS (Responsive design and rapid UI iteration)
- **Routing**: React Router (Declarative routing with support for nested components)

### Automation & Deployment (DevOps)

- **CI/CD**: GitHub Actions (Automated type checking, testing, and compilation)
- **Hosting Platform**: GitHub Pages
- **Cross-Repo Deployment**: Compiles static files and injects production environment variables (`VITE_GRAPHQL_URI`), pushing them safely to the dedicated `jopei-liao.github.io` repository via GitHub Actions.

---

## 🏗️ Project Architecture & Sub-project Management

To maintain clean and modular code, I have adopted an **"Independent Repositories, Unified Domain"** architecture. The main site and sub-projects are stored in different repositories but share the same GitHub Pages domain:

- **Main Site (This Repo)**: Deployed at the root directory `/`
- **Lost and Found (Sub-project)**: Deployed at the sub-directory `/lostandfound/` [View Source](https://github.com/jopei-liao/lostandfound)

### Deployment Protection Mechanism

The GitHub Actions script for the main site includes a `clean-exclude` configuration. This ensures that when the main site is updated, other projects located in sub-directories (such as `lostandfound`) are not accidentally deleted, achieving an automated maintenance process where multiple projects coexist without interference.

---

## 📂 Project Structure

```text
.
├── .github/workflows/         # CI/CD automation and build scripts
├── public/                    # Static public assets
├── src/
│   ├── assets/
│   │   ├── css/               # Global CSS
│   │   ├── images/            # Image assets
│   │   └── sass/              # Shared SASS variables/mixins/layout
│   ├── components/            # Reusable UI components
│   │   ├── Footer/
│   │   ├── Loading/
│   │   ├── Nav/
│   │   ├── ProjectLightbox/   # Popup for displaying selected project details via slug
│   │   └── Scroll/
│   ├── graphql/               # GraphQL query definitions for remote fetching
│   ├── pages/                 # Route-level pages
│   │   ├── Home/
│   │   └── Projects/          # Main project list page integrated with Apollo useQuery
│   ├── tests/                 # Unit/component testing with Vitest and React Testing Library
│   │   ├── components/
│   │   ├── mock/              # Local JSON fallbacks for test isolation
│   │   └── utils/
│   ├── App.tsx                # Root app component with global Loading Context and hooks
│   ├── main.tsx               # Entry point (initializes ApolloClient and mounts React)
│   └── types.ts               # Shared TypeScript interface and type declarations
├── index.html
├── eslint.config.js
├── package.json
├── tsconfig.json              # TypeScript compilation configurations
└── vite.config.ts             # Vite configuration (deployment path, build options)

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

```
