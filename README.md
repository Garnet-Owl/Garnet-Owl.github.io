# James Wanjiku - Software Engineer Portfolio

A modern, interactive portfolio website showcasing my projects and skills, built with Next.js 15 and React 19.

## Live Demo

Visit the live site: [https://garnet-owl.github.io/](https://garnet-owl.github.io/)

## Project Overview

This portfolio website is designed to showcase my software engineering projects, skills, and professional experience in an engaging and interactive way. The site features a clean, modern UI with responsive design and smooth animations.

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 with Server Components
- **UI Library**: Material UI (MUI) v6
- **Type Safety**: TypeScript
- **Animation**: Framer Motion
- **Deployment**: GitHub Pages
- **Styling**: Tailwind CSS + MUI theming
- **Analytics**: Google Analytics
- **Testing**: Jest + React Testing Library

## Key Features

- Responsive design that works on all device sizes
- Dark/light theme support
- Dynamic typewriter text effect for engaging introduction
- Featured projects carousel
- Modern UI with fluid animations
- Server-side rendering for improved performance
- SEO optimization

## Project Structure

```
app/                       # Next.js app directory
├── about/                 # About section
├── components/            # Reusable UI components
├── context/               # React context providers
├── dashboard/             # Dashboard and Hero components
├── projects/              # Projects section
├── utils/                 # Utility functions
├── __tests__/             # Test files
├── globals.css            # Global CSS
├── layout.tsx             # Root layout
├── page.tsx               # Home page
├── routes.ts              # Route definitions
└── theme.ts               # Theme configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Garnet-Owl/Garnet-Owl.github.io.git
   cd Garnet-Owl.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build and Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

### Deploying to GitHub Pages

The site is automatically deployed to GitHub Pages through GitHub Actions when changes are pushed to the main branch.

## Development Guidelines

- Use TypeScript for all new components and functions
- Follow the established component structure
- Use MUI's theming system for consistent styling
- Write tests for new components
- Use `use client` directive only when necessary (client-side hooks, browser APIs, event handlers)

## Features in Development

- Skill section with visual representation of proficiency levels
- Contact form with serverless function integration
- Expanded project details with case studies
- Blog integration for technical articles
- Enhanced animations and transitions

## License

This project is open-source and available under the MIT License.

## Contact

- **LinkedIn**: [James Wanjiku](https://www.linkedin.com/in/james-wanjiku/)
- **GitHub**: [Garnet-Owl](https://github.com/Garnet-Owl)
