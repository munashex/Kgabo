# 🏔️ Kgabo Mokgatla Group Website

> Official website for Kgabo Mokgatla Group - A 100% black-owned South African mining company specializing in exploration, project development, and technical advisory services.

[![Live Website](https://img.shields.io/badge/Live-kgmgroup.co.za-blue?style=for-the-badge)](https://kgmgroup.co.za)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [SEO Optimization](#seo-optimization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 About

Kgabo Mokgatla Group is a leading 100% black-owned mining company based in Pretoria, South Africa. This website serves as the company's digital presence, showcasing:

- **Active Mining Operations**: BenK Colliery, Rooipoort Colliery, Chrome Wash Plant
- **Exploration Portfolio**: 9,237 hectares across 5 provinces
- **Commodities**: Coal, Chrome, Iron Ore, Limestone, Platinum, Manganese
- **Geographic Reach**: Mpumalanga, Gauteng, North West, Limpopo, Northern Cape

### Company Leadership

- **Molefe H. Ratsela** - Chairman & Managing Director
  - Electrical Engineer (B.Eng); Master Installation Electricians (MIE)
  - 12+ years in mining and industrial sector

- **Reolebogile H. Phenya** - CEO & Managing Director
  - BSc (Hons.) Geology; MSc. Mineral Resource Management
  - Registered Professional Natural Scientist (Pr.Nat.Sci.)
  - 6+ years in coal mining sector

---

## ✨ Features

### 🎨 Design & UX
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, professional aesthetic
- ✅ Smooth animations and transitions
- ✅ Intuitive navigation with dropdown menus
- ✅ Auto-scrolling commodity showcase
- ✅ Interactive hover effects

### 🔍 SEO Optimized
- ✅ Comprehensive meta tags
- ✅ Open Graph & Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ XML sitemap
- ✅ robots.txt configured
- ✅ Google Search Console ready
- ✅ Optimized page titles and descriptions

### 📱 Performance
- ✅ Fast loading times with Vite
- ✅ Optimized images
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Lighthouse score optimized

### 🗺️ Key Sections
- ✅ Homepage with hero section
- ✅ About page with company history
- ✅ Operations showcase
- ✅ Exploration projects by province
- ✅ Commodities overview
- ✅ Team/Leadership profiles
- ✅ Contact page with Google Maps
- ✅ Custom 404 page

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

### SEO & Analytics
- **Google Search Console** - Search performance monitoring
- **Structured Data** - Schema.org markup
- **Meta Tags** - Open Graph, Twitter Cards
- **Sitemap** - XML sitemap for search engines

### Deployment
- **Vercel** - Hosting platform
- **GoDaddy** - Domain registration
- **GitHub** - Version control

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/munashex/kgabo-mokgatla-group.git
   cd kgabo-mokgatla-group
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
kgabo-mokgatla-group/
├── public/
│   ├── index.html              # HTML template with SEO meta tags
│   ├── sitemap.xml             # XML sitemap for search engines
│   ├── robots.txt              # Crawling instructions
│   └── assets/                 # Static assets
│
├── src/
│   ├── Pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── About.jsx           # About page
│   │   ├── Operations.jsx      # Mining operations
│   │   ├── Exploration.jsx     # Exploration projects
│   │   ├── Commodities.jsx     # Commodities overview
│   │   ├── OurTeam.jsx         # Leadership team
│   │   ├── Contact.jsx         # Contact page
│   │   └── NotFound.jsx        # 404 error page
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Seo.jsx             # SEO meta tags component
│   │   ├── Commodities.jsx     # Commodity carousel
│   │   ├── Values.jsx          # Company values
│   │   ├── ValuesHero.jsx      # Values hero section
│   │   ├── OperationsStats.jsx # Operations statistics
│   │   └── GetInTouch.jsx      # CTA component
│   │
│   ├── constants/
│   │   └── seo.js              # SEO configuration
│   │
│   ├── imgs/                   # Image assets
│   │   ├── home/
│   │   ├── about/
│   │   ├── operations/
│   │   ├── exploration/
│   │   ├── team/
│   │   └── contact/
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
│
├── .gitignore
├── package.json
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md
```

---

## 📄 Pages Overview

### 🏠 Home (`/`)
- Hero section with company overview
- Commodity showcase with auto-scroll
- Core values display
- Operations statistics
- Call-to-action sections

### ℹ️ About (`/about`)
- Company mission and story
- Leadership profiles with photos
- Core focus areas (Exploration, Development, Advisory, Operations)
- Scrolling commodity spectrum
- Key statistics

### ⚙️ Operations (`/operations`)
- BenK Colliery details
- Rooipoort Colliery information
- Chrome Wash Plant overview
- Production capacity
- Location maps

### 🔍 Exploration (`/exploration`)
- Provincial footprint breakdown
- Commodity focus by region
- Regional presence across 5 provinces
- Exploration portfolio statistics

### 💎 Commodities (`/commodities`)
- Grid display of all commodities
- Individual commodity cards with images
- Strategic commodity approach
- Market focus areas

### 👥 Team (`/team`)
- Executive leadership profiles
- Qualifications and experience
- Role descriptions
- Management structure overview

### 📞 Contact (`/contact`)
- Contact information (email, phone, address)
- Embedded Google Maps
- Business hours
- Department directory
- Contact form (optional)

### ❌ 404 Page
- Custom error page
- Navigation back to home
- Quick links to main pages

---

## 🔍 SEO Optimization

### Meta Tags
```html

Kgabo Mokgatla Group | Mining, Exploration & Technical Advisory
