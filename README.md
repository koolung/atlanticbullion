# Atlantic Bullion - Business Website

A modern, responsive business website built with Next.js featuring smooth scrolling and mobile-first design.

## Features

- ✨ **Modern Design**: Super modern styling with gradient backgrounds and smooth animations
- 📱 **Mobile Responsive**: Mobile hamburger menu with sliding navigation panel (left to right)
- 🚀 **Smooth Scroll**: Implemented smooth scrolling between sections
- ⚡ **Next.js 16**: Latest Next.js with App Router and TypeScript
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 📧 **Contact Form**: Professional contact form with modern styling

## Sections

1. **Hero Section**: Eye-catching hero with call-to-action buttons
2. **About Section**: Company information with feature highlights
3. **Services Section**: Gold, Silver, and Platinum trading services
4. **Products Section**: Featured precious metals products
5. **Contact Section**: Contact information and message form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Services.tsx
    ├── Products.tsx
    └── Contact.tsx
```

## Key Features Implemented

### Mobile Navigation
- Hamburger menu button on mobile devices
- Smooth sliding navigation panel from left to right
- Responsive design that adapts to screen size
- Click outside to close functionality

### Smooth Scrolling
- CSS `scroll-behavior: smooth` implemented
- Anchor links navigate smoothly between sections
- Mobile-friendly scroll behavior

### Modern Styling
- Gradient backgrounds and modern color schemes
- Hover effects and smooth transitions
- Card-based layouts with shadows
- Modern typography with Inter font

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes