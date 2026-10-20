# Navurja Quartz Crucible Manufacturing Website

## Overview

Navurja is a solar quartz crucible manufacturer's marketing website built as a full-stack application. The project serves as a single-page marketing site showcasing high-purity fused quartz crucibles (P-type, N-type bubble-free, and G12 large-format) for monocrystalline silicon ingot pulling in India's solar manufacturing market. The application features a responsive marketing frontend with an integrated contact form system and admin dashboard for lead management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern React 18 application using functional components and hooks
- **Vite Build System**: Fast development server and optimized production builds
- **Component Library**: Shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system following clean energy brand guidelines
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing (marketing page + admin dashboard)

### Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **API Design**: Simple REST endpoints for contact form submissions and admin data retrieval
- **Development Integration**: Vite middleware for seamless full-stack development

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Lead capture system storing contact form submissions with metadata
- **Schema Validation**: Zod schemas for runtime type validation on API boundaries

### Component Architecture
- **Modular Design**: Self-contained components for each marketing section (Hero, Products, About, etc.)
- **Responsive Layout**: Mobile-first design with breakpoint-specific layouts
- **Accessibility**: WCAG AA compliance through Radix UI primitives and semantic HTML
- **Performance**: Lazy loading, optimized images, and minimal JavaScript bundles

### Development Workflow
- **Type Safety**: End-to-end TypeScript with shared types between client and server
- **Hot Reloading**: Vite HMR for instant development feedback
- **Database Migrations**: Drizzle Kit for schema management and migrations
- **Asset Handling**: Vite asset pipeline with automatic optimization

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless database driver
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **express**: Web application framework for Node.js
- **react**: Frontend UI library
- **vite**: Build tool and development server

### UI Component System
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library for consistent iconography

### Form and Data Management
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Form validation resolvers
- **@tanstack/react-query**: Server state management and caching
- **zod**: Runtime type validation and schema definition

### Development and Build Tools
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database schema management and migrations

### Database and Storage
- **postgres**: PostgreSQL client library
- **connect-pg-simple**: PostgreSQL session store (if sessions are implemented)

### Additional Utilities
- **date-fns**: Date manipulation library
- **clsx**: Conditional className utility
- **wouter**: Lightweight router for React applications