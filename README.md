# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

https://www.youtube.com/watch?v=bI1Ykn9vQ6g
https://templatesee.com/components/global/hero

---

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

---

## 🚀 Getting Started

### 1. Create project (Vite - compatible with Node 18)

```bash
npx create-vite@5.2.0 StunningEcommerceLandingPage
cd StunningEcommerceLandingPage
2. Install dependencies
npm install
3. Install Tailwind CSS (v3)
npm install -D tailwindcss@3.4.4 postcss autoprefixer
npx tailwindcss init -p
4. Run development server
npm run dev

👉 Open in browser:

http://localhost:5173
🔧 Git Setup & Push Code
git init
git add .
git commit -m "init React + Tailwind Ecommerce Landing Page"
git branch -M main
git remote add origin https://github.com/doanthanhminhk55-alt/ReactJS_TailwindCSS.git
git push -u origin main
🧹 Fix Issues (if needed)
rmdir /s /q node_modules
del package-lock.json
npm install
📁 Project Structure
src/
 ├── components/
 │    ├── Hero.jsx
 │    ├── CompanyLogo.jsx
 │    ├── Product.jsx
 │    ├── TechSection.jsx
 ├── App.jsx
 ├── main.jsx
🔥 Features
Fully responsive design
Modern UI (Tailwind CSS)
Product showcase
Tech gadgets section
Smooth hover effects
📜 Scripts
npm run dev      # start dev server
npm run build    # build for production
npm run preview  # preview build
💡 Notes
Using Vite 5 for Node 18 compatibility
Using Tailwind CSS v3 (not v4)
Avoid @tailwindcss/vite (requires Node 20+)
