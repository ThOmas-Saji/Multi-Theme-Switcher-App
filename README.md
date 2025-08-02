# 🎨 Multi-Theme Switcher App

A responsive React + TypeScript application with a dynamic theme switcher supporting three distinct UI themes, built with Tailwind CSS and React Router.

## 🔥 Live Demo

👉 [View Live on Vercel](https://your-vercel-url.vercel.app)

## 🧰 Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS, Scss
- React Router
- Context API
- Axios
- Google Fonts

## 📦 Features

- 🌗 Theme switcher with 3 themes:
  - Theme 1: Light & Minimal (sans-serif)
  - Theme 2: Dark Mode with Sidebar (sans-serif bold)
  - Theme 3: Colorful, Grid-based (Pacifico)
- 🎯 Data from [FakeStoreAPI](https://fakestoreapi.com/products)
- 💾 Theme persists using localStorage
- 🔁 Responsive layout
- 🔐 Secure and accessible

## 🛠️ Setup Instructions

```bash
git clone https://github.com/yourusername/multi-theme-switcher-app.git
cd multi-theme-switcher-app
npm install
npm run dev

src/
│
├── assets/         # svg, images
├── components/     # Header, SidBar UI components
├── context/        # Theme Context Provider
├── pages/          # Home, About, Contact
├── styles/         # Tailwind + Google Fonts + Scss
├── App.tsx         # Main App
├── main.tsx        # App entry
└── index.css       # Global styles
