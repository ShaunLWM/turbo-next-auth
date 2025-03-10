# Turbo Next-Auth Template

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Overview

This is a comprehensive full-stack turborepo template that combines the best modern web technologies for building scalable, type-safe applications. It features:

- **Monorepo Structure**: Powered by Turborepo for efficient workspace management
- **Frontend**: Next.js with TypeScript, Tailwind CSS, and Shadcn UI components
- **API Handling**: TanStack Query for data fetching and Hono for API routes
- **Authentication**: Enhanced auth with Better-Auth integration
- **Containerization**: Docker and Docker Compose for seamless deployment
- **Developer Experience**: TypeScript, and Biome pre-configured

## 📂 Repository Structure

```
.
├── apps/
│   ├── web/            # Next.js frontend application
│   └── api/            # Backend API services with Hono
├── packages/
│   ├── ui/             # Shared UI components with Shadcn
│   ├── config/         # Shared configurations
│   ├── database/       # Database schemas and utilities
│   └── auth/           # Authentication utilities
├── docker-compose.yml  # Docker Compose configuration
└── package.json        # Root package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Docker and Docker Compose (for containerized development)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ShaunLWM/turbo-next-auth.git
   cd turbo-next-auth
   ```

2. Install dependencies:
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn

   # Using pnpm
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Run database migrations:
  ```bash
  pnpm --filter api db:init
  ```

5. Start the development server:
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

## 🐳 Docker Setup

You can run the entire stack using Docker Compose:

```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# Shut down services
docker-compose down
```

## 📦 Package Details

### Root Configuration

The root `package.json` contains scripts to manage the entire monorepo:
- `dev`: Runs all applications in development mode
- `build`: Builds all packages and applications
- `lint`: Runs linting across all projects
- `test`: Runs tests across the entire monorepo

### Apps

#### Web Application (`apps/web`)

The Next.js frontend application with Tailwind CSS, Shadcn UI, and TanStack Query:
- Set up pages and components
- Configure authentication with Better-Auth
- Use TanStack Query for data fetching

#### API Service (`apps/api`)

Backend API service built with Hono:
- RESTful API endpoints
- Authentication middleware
- Database integration

### Packages

#### UI Library (`packages/ui`)

Shared UI components built with Shadcn:
- Reusable, accessible components
- Customizable with Tailwind CSS
- Fully typed with TypeScript

#### Config (`packages/config`)

Shared configurations for TypeScript, and other tools:
- Ensures consistent code quality across the monorepo
- Provides shared Tailwind config

#### Database (`packages/database`)

Database utilities and schema definitions:
- Database client setup
- Schema definitions
- Migration utilities

#### Auth (`packages/auth`)

Authentication utilities with Better-Auth:
- User authentication
- Authorization helpers
- Session management

## 🔧 Customization

### Adding a New Package

1. Create a new directory in `packages/`:
   ```bash
   mkdir -p packages/my-package
   ```

2. Initialize a new package:
   ```bash
   cd packages/my-package
   npm init -y
   ```

3. Add the package to the workspace in the root `package.json`

### Adding a New App

1. Create a new directory in `apps/`:
   ```bash
   mkdir -p apps/my-app
   ```

2. Initialize with the appropriate template:
   ```bash
   # For Next.js
   npx create-next-app@latest --typescript
   ```

3. Configure the app to use shared packages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
