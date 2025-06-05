<img src="public/image/4df4730eaaddd2a082b41b4a31817cf1d63a3afb.png" alt="GIGFLOWW Logo" width="400"/>

# GIGFLOWW - HR Management Platform

GIGFLOWW is a comprehensive HR management platform designed to streamline HR operations, manage employees, track reviews, handle salary information, and manage job postings. This platform provides a modern, responsive, and accessible interface with dark mode support.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Architecture & Flow](#architecture--flow)
- [Pages & Functionality](#pages--functionality)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

### 🔐 Authentication System
- User registration and login functionality
- Secure authentication with form validation
- Social login options (Google, Apple)

### 🏠 Interactive Dashboard
- Overview of key HR metrics and statistics
- Performance reports with interactive charts
- Employee and hiring summaries
- Upcoming actions and events calendar

### 👥 People Management
- Employee directory with filtering options
- Employee profiles and information management
- Team organization and structure visualization

### 🔄 Job Posting Management
- Create and publish job postings
- Track job applications and candidate statuses
- AI-assisted job description writing
- Application management and tracking

### 💰 Salary Management
- Salary structure and breakdown
- Payment history and processing
- Budget tracking and allocation

### ⭐ Reviews System
- Employee performance reviews
- Rating system with visual indicators
- Feedback collection and analysis

### 🌙 Dark Mode Support
- Full dark mode implementation across all pages
- Automatic theme detection
- User preference persistence

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized layouts
- Consistent experience across devices

## Project Structure

```
project/
│
├── public/                 # Static assets
│   ├── image/              # Images including logo and team photos
│   └── favicon.svg
│
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # UI elements
│   │
│   ├── contexts/           # React contexts
│   ├── layouts/            # Page layouts
│   ├── pages/              # Application pages
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── hiring/         # Hiring and job posting
│   │   ├── people/         # People management
│   │   ├── reviews/        # Reviews system
│   │   └── salary/         # Salary management
│   │
│   ├── routes/             # Routing configuration
│   ├── stores/             # State management
│   └── utils/              # Utility functions
│
├── index.html              # Entry HTML file
├── package.json            # Project dependencies
└── vite.config.ts          # Vite configuration
```

## Technologies Used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: Custom stores with React Context
- **Routing**: React Router
- **Charts**: Chart.js with React-Chartjs-2
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Native React forms
- **Deployment**: Vercel

## Architecture & Flow

### Application Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Components    │◄────┤     Layouts     │◄────┤      Pages      │
└────────┬────────┘     └─────────────────┘     └────────┬────────┘
         │                                               │
         │                                               │
         V                                               V
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Contexts     │◄────┤     Stores      │◄────┤     Routes      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Data Flow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  User Input │───►│   Actions   │───►│    Store    │───►│   UI Update │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### Authentication Flow

```
┌─────────┐    ┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  Login  │───►│ Auth Store  │───►│ Authenticate │───►│  Redirect   │
└─────────┘    └─────────────┘    └──────────────┘    └─────────────┘
     ▲                                                       │
     │                                                       │
     └───────────────────────────────────────────────────────┘
```

## Pages & Functionality

### 1. Authentication Pages

#### Login Page
- Email and password authentication
- "Remember me" functionality
- Forgot password option
- OAuth integration (Google, Apple)
- Form validation

#### Register Page
- New user registration
- Account information collection
- Terms and conditions acceptance
- OAuth registration options

### 2. Dashboard

- Summary cards showing key metrics
- Interactive performance charts
- Recent activity feed
- Upcoming actions and notifications
- Quick access to important features

### 3. People Management

- Employee directory with search and filter
- Employee profiles with personal information
- Department and team organization
- Employment history and documentation
- Onboarding status tracking

### 4. Job Posting Management

- Job creation form with detailed fields
- Job posting management interface
- Applicant tracking system
- Application status updates
- AI-assisted content creation tools

### 5. Salary Management

- Salary structures and scales
- Payment processing and history
- Budget allocation visualization
- Payroll reports and analytics
- Tax calculations and deductions

### 6. Reviews System

- Performance review creation and management
- Rating system with multiple categories
- Feedback collection forms
- Review cycle management
- Performance trend analysis

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/gigflow-project.git
cd gigflow-project
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173/`

## Deployment

The project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically deploy your main branch.

### Manual Deployment Steps

1. Build the project
```bash
npm run build
# or
yarn build
```

2. Deploy to Vercel
```bash
vercel --prod
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Designed and developed ❤️ by Shubham Das
