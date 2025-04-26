# ConverTex Documentation

## Project Overview

ConverTex is a currency conversion application that provides real-time currency exchange rates with historical data tracking. The application uses Firebase for authentication and the FreeCurrencyAPI for exchange rate data, featuring a responsive design implemented with Tailwind CSS and shadcn/ui components.

## File Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Main navigation and auth status
│   ├── Footer.tsx     # Site footer with legal links
│   ├── CurrencyChart.tsx     # Advanced currency rate charts
│   ├── CurrencyConverter.tsx # Main conversion interface
│   └── ConversionTable.tsx   # Detailed conversion rates table
├── pages/
│   ├── Index.tsx      # Home page
│   ├── SignIn.tsx     # Email authentication
│   ├── SignUp.tsx     # New user registration with terms acceptance
│   ├── Privacy.tsx    # Privacy policy page
│   ├── Terms.tsx      # Terms of service page
│   └── NotFound.tsx   # 404 page
├── hooks/
│   ├── useAuth.tsx    # Firebase auth state management
│   └── use-toast.ts   # Toast notifications
├── lib/
│   ├── firebase.ts    # Firebase configuration and services
│   └── utils.ts       # Utility functions
└── api/
    └── currencyService.ts # Currency conversion and historical data API
```

## Key Features & Implementation Details

### Authentication

- Firebase Authentication implementation for:
  - Email/Password sign-in with verification
  - Terms of service and privacy policy acceptance
  - Email verification requirement
- Auth state management through `useAuth` hook
- Protected routes and conditional UI rendering based on auth status

### Currency Conversion & Tracking

- Real-time currency conversion
- Historical rate tracking with multiple timeframes:
  - 1 Day (detailed intraday data when available)
  - 1 Month
  - 3 Months
  - 6 Months
  - 1 Year
  - 5 Years
- Interactive charts with:
  - Rate change indicators
  - Reference lines
  - Tooltips with detailed information
  - Responsive design
- Detailed conversion tables with common amounts

### Legal & Compliance

- Comprehensive Privacy Policy covering:
  - Data collection and usage
  - Third-party services
  - User rights and preferences
  - Contact information
- Terms of Service including:
  - User obligations
  - Service limitations
  - Intellectual property
  - Acceptable use policy

### Component Guidelines

#### Header Component

- Manages navigation and auth status display
- Displays user's name next to profile icon
- Responsive design with mobile consideration
- User profile with hover card for auth actions

#### Authentication Forms

- Email/password authentication with verification
- Form validation using zod schemas
- Terms acceptance requirement
- Toast notifications for user feedback

### State Management

- Firebase Auth for user authentication state
- FreeCurrencyAPI for exchange rate data
- React Query for API data fetching
- Local state for UI components

### Styling

- Tailwind CSS for styling
- shadcn/ui components for UI elements
- Mobile-first responsive design
- Consistent color scheme using converter-blue theme

## Future Development Guidelines

### Authentication Enhancements

1. Add password recovery flow
2. Implement email change verification
3. Add two-factor authentication option
4. Enhanced session management

### Feature Roadmap

1. Add more currency pairs
2. Implement real-time WebSocket updates
3. Add user preferences storage
4. Create currency alerts
5. Add rate prediction indicators

### Code Organization Rules

1. Keep components focused and small (< 200 lines)
2. Implement new features in separate components
3. Use custom hooks for shared logic
4. Follow established naming conventions

### Best Practices

1. Always use TypeScript types/interfaces
2. Maintain responsive design patterns
3. Follow existing error handling patterns
4. Use shadcn/ui components for consistency
5. Implement proper loading states
6. Use toasts for user feedback
7. Keep documentation updated

## Environment Configuration

Required environment variables:

```
VITE_FIREBASE_API_KEY=<api_key>
VITE_FIREBASE_AUTH_DOMAIN=<auth_domain>
VITE_FIREBASE_PROJECT_ID=<project_id>
VITE_FIREBASE_STORAGE_BUCKET=<storage_bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<messaging_sender_id>
VITE_FIREBASE_APP_ID=<app_id>
VITE_FIREBASE_MEASUREMENT_ID=<measurement_id>
VITE_CURRENCY_API_KEY=<currency_api_key>
```

## Testing & Deployment

- Run tests before deploying
- Ensure all environment variables are set
- Check authentication flows
- Verify responsive design
- Test error handling
- Validate currency data accuracy

## Known Issues & TODOs

1. Implement rate alerts feature
2. Add more historical data granularity
3. Implement user preferences storage
4. Add export functionality for charts and data
5. Implement offline mode support

## Contribution Guidelines

1. Follow existing file structure
2. Maintain component size limits
3. Add proper documentation
4. Include TypeScript types
5. Follow error handling patterns
6. Implement responsive designs
7. Use existing UI components
8. Update tests for new features

This documentation should be updated as new features are added or significant changes are made to the codebase.
