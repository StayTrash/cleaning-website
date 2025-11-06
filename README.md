# 🧹 True Clean - Landing Page

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/Frontend-Only-3178C6?style=for-the-badge)

**A modern, responsive landing page built with Next.js for showcasing professional cleaning services**

[Live Demo](https://cleaning-website-phi.vercel.app/)

</div>

---

## 📋 Overview

True Clean is a **frontend-only** landing page project designed to showcase a beautiful, interactive cleaning service website. Built with Next.js 16 and React 19, this project demonstrates modern web development practices with smooth animations, responsive design, and an intuitive user interface.

> **⚠️ Important:** This is a **frontend-only showcase project**. All forms are in demo mode with simulated responses. No backend or database is required to run this project.

---

## ✨ Features

### 🎨 Design & UI
- **Modern & Responsive** - Fully responsive design that works seamlessly on all devices
- **Smooth Animations** - Beautiful animations and transitions using Framer Motion
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Custom Components** - Reusable, well-structured React components

### 📱 Sections
- 🏠 **Hero Section** - Eye-catching landing section with call-to-action
- ⭐ **Services Overview** - Comprehensive service showcase
- 💡 **Why Choose Us** - Feature highlights and benefits
- 📖 **Our Story** - Brand narrative and mission
- 💬 **Testimonials** - Customer reviews with infinite scroll carousel
- ❓ **FAQ Section** - Expandable accordion with common questions
- 📞 **Contact Form** - Interactive contact form (demo mode)
- 📊 **Booking Calculator** - Service booking calculator (demo mode)

### 🚀 Technical Features
- **Server-Side Rendering (SSR)** - Fast initial page loads with Next.js
- **Optimized Images** - Next.js Image component for performance
- **Smooth Scrolling** - Custom navigation with smooth section scrolling
- **Form Validation** - Client-side form validation
- **Demo Mode** - All forms show success messages without API calls

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 |
| **Library** | React 19.2.0 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Fonts** | Google Fonts (Poppins, Work Sans, Source Serif 4) |
| **Package Manager** | npm / yarn / pnpm |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/true-clean.git
   cd true-clean
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📁 Project Structure

```
true-clean/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.js         # Root layout with fonts and providers
│   │   ├── page.js           # Landing page entry point
│   │   └── globals.css       # Global styles and Tailwind imports
│   │
│   ├── Components/           # React components
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactUs.jsx
│   │   ├── BookingCalculator.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   └── Icons/            # SVG icon components
│   │
│   ├── screens/              # Page screens
│   │   └── LandingPage.jsx   # Main landing page composition
│   │
│   ├── contexts/             # React contexts
│   │   └── LoadingContext.jsx
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── useLoadingManager.jsx
│   │
│   ├── utils/                # Utility functions
│   │   └── navigation.js     # Navigation helpers
│   │
│   └── data/                 # Static data files
│       └── servicesData.js
│
├── public/                   # Static assets
│   └── Images/               # Image files
│
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

---