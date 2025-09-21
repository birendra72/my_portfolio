# MyPortfolio

A personal portfolio website built with React, TypeScript, and Vite. This project showcases typical portfolio sections such as About, Skills, Projects, Experience, Education, Achievements, and Contact, all styled with Tailwind CSS and enhanced with Radix UI components.

## Technologies Used

- React 18
- TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first CSS framework)
- Radix UI (accessible UI components)
- React Router DOM (client-side routing)
- React Query (data fetching and caching)
- Framer Motion (animations)
- Zod (schema validation)
- ESLint (linting)
- Other libraries: Lucide React, Sonner, React Hook Form, Date-fns, Embla Carousel, and more

## Project Structure

- `src/` - Source code directory
  - `components/` - Reusable UI components (Navigation, Hero, About, Skills, Projects, etc.)
  - `contexts/` - React context providers (e.g., ThemeContext)
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `pages/` - Page components (Index, NotFound)
  - `App.tsx` - Main application component with routing and providers
  - `main.tsx` - Application entry point

- `public/` - Static assets like favicon and robots.txt

- Configuration files for Vite, Tailwind CSS, ESLint, TypeScript, and PostCSS

## Getting Started

### Installation

Install dependencies using npm:

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Features

- Responsive and accessible UI built with Radix UI components
- Theming support via React context
- Client-side routing with React Router DOM
- Notifications and toasts using Sonner and custom toaster components
- Form handling with React Hook Form and validation with Zod
- Smooth animations with Framer Motion

## License

This project is private. Add your license information here if applicable.
