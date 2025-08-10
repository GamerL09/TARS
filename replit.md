# Overview

TARS is a futuristic Discord bot development platform that provides custom automation solutions with AI-powered capabilities. The application features a modern React frontend with animated UI components and a Node.js/Express backend with PostgreSQL database integration. The platform allows users to request custom Discord bot development services through a contact form system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for page transitions and interactive elements
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error middleware with structured error responses
- **Request Logging**: Custom middleware for API request/response logging

## Database & ORM
- **Database**: PostgreSQL with connection pooling
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema updates
- **Validation**: Drizzle-Zod integration for runtime schema validation
- **Storage Pattern**: Repository pattern with in-memory fallback for development

## Development Environment
- **Build System**: Vite with React plugin and runtime error overlay
- **Development Server**: Express with Vite middleware integration
- **Hot Reload**: Vite HMR for frontend, tsx for backend auto-restart
- **TypeScript**: Strict mode enabled with path mapping for clean imports

## UI/UX Design Patterns
- **Theme**: Dark theme with futuristic aesthetic
- **Layout**: Single-page application with animated page transitions
- **Navigation**: Fixed header with mobile-responsive hamburger menu
- **Background Effects**: Custom particles animation system
- **Typography**: Inter font family with gradient text effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow Architecture
- **Frontend-Backend Communication**: Fetch API with custom request wrapper
- **Form Submission**: Optimistic updates with TanStack Query mutations
- **Error Handling**: Toast notifications for user feedback
- **Data Validation**: Shared schemas between frontend and backend using Zod

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm** & **drizzle-kit**: Type-safe ORM and migration toolkit
- **express**: Web application framework for Node.js
- **react** & **react-dom**: Core React library and DOM renderer
- **vite**: Fast build tool and development server

## UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for React components
- **lucide-react**: Modern SVG icon library

## Validation & Forms
- **zod**: TypeScript-first schema validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Resolver library for form validation integration

## Styling & Design
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional CSS class utility
- **tailwind-merge**: Utility for merging Tailwind classes

## Development Tools
- **typescript**: Static type checking
- **@types/node**: Node.js type definitions
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **date-fns**: Modern JavaScript date utility library

## Deployment Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling