# Overview

This is a tutoring business website for TUTOR101, a professional tutoring service specializing in Engineering, Science, Health Sciences, and Commerce subjects. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact form system and landing page showcasing tutoring services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for brand colors (tutor-black, tutor-white, tutor-gray)
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot reloading with Vite integration in development mode
- **Storage**: Pluggable storage interface with in-memory implementation (can be extended for PostgreSQL)

## Data Storage
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema**: Contact submissions table with fields for name, email, phone, subject, message, and timestamps
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity

## API Design
- **REST Endpoints**: 
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Retrieve contact submissions (admin)
- **Validation**: Input validation using Zod schemas with proper error handling
- **Error Handling**: Centralized error middleware with structured JSON responses

## Key Features
- **Landing Page**: Multi-section layout with hero, services, subjects, testimonials, and contact sections
- **Contact Form**: Validated form submission with toast notifications
- **Responsive Design**: Mobile-first responsive layout using Tailwind CSS
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui**: Accessible UI component primitives
- **react-hook-form**: Form state management and validation
- **zod**: Schema validation library

## Development Tools
- **Vite**: Frontend build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Static type checking
- **ESBuild**: Backend bundling for production

## UI/UX Libraries
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **wouter**: Lightweight routing library

## Database
- **PostgreSQL**: Primary database (via Neon serverless)
- **Drizzle Kit**: Database migration and schema management tool