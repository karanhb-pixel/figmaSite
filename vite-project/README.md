# Game Dev Landing Page

A modern, responsive landing page for a Game Development course platform built with React and TypeScript.

## Description

This application is a single-page website designed to promote and enroll users in a comprehensive Game Development course. It features sections including a hero section, course listings, testimonials, app download prompts, and a footer. The site is optimized for performance with lazy loading and includes SEO enhancements like a robots.txt file.

## Technologies Used

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS (with custom styles in App.css)
- **Linting**: ESLint with TypeScript support
- **Fonts**: Google Fonts (Poppins and Raleway)
- **Performance**: Lazy loading for components, optimized images

## Features

- Responsive design for mobile and desktop
- Hero section with course overview and enrollment CTA
- Course listings section
- Testimonials from students
- App download section
- Footer with links and social media
- SEO optimized with robots.txt

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
vite-project/
├── public/
│   ├── robots.txt
│   └── assets/ (images, icons)
├── src/
│   ├── components/
│   │   ├── AchievementCard.jsx
│   │   ├── AppLink.jsx
│   │   ├── CourseBlock.jsx
│   │   ├── Courses.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterLinkGroup.jsx
│   │   ├── Getourapp.jsx
│   │   ├── Hero_Section.jsx
│   │   ├── Navbar.jsx
│   │   ├── SubscriptionForm.jsx
│   │   ├── TestimonialBlock.jsx
│   │   └── Testimonys.jsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Commit your changes
6. Push to the branch
7. Open a Pull Request

## License

This project is private and not licensed for public use.
