
# ConverTex Documentation

## Project Overview
ConverTex is a currency conversion application that provides real-time currency exchange rates, cryptocurrency conversions, and precious metals pricing. The application uses Firebase for authentication and features a responsive design implemented with Tailwind CSS and shadcn/ui components.

## File Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Main navigation and auth status
│   ├── Footer.tsx     # Site footer
│   ├── CurrencyChart.tsx     # Currency rate charts
│   ├── CurrencyConverter.tsx # Main conversion interface
│   └── ConversionTable.tsx   # Detailed conversion rates table
├── pages/
│   ├── Index.tsx      # Home page
│   ├── SignIn.tsx     # Authentication page with email/phone
│   ├── SignUp.tsx     # New user registration
│   └── NotFound.tsx   # 404 page
├── hooks/
│   ├── useAuth.tsx    # Firebase auth state management
│   ├── use-mobile.tsx # Responsive design hook
│   └── use-toast.ts   # Toast notifications
├── lib/
│   ├── firebase.ts    # Firebase configuration
│   └── utils.ts       # Utility functions
└── api/
    └── currencyService.ts # Currency conversion API
```

## Key Features & Implementation Details

### Authentication
- Firebase Authentication implementation for:
  - Email/Password sign-in
  - Phone number verification
  - Social auth providers (Google, Facebook - prepared but not implemented)
- Auth state management through `useAuth` hook
- Protected routes and conditional UI rendering based on auth status

### Currency Conversion
- Real-time currency conversion
- Support for:
  - Traditional currencies
  - Cryptocurrencies
  - Precious metals
- Historical rate charts
- Detailed conversion tables

### Component Guidelines

#### Header Component
- Manages navigation and auth status display
- Responsive design with mobile consideration
- User profile with hover card for auth actions

#### Authentication Forms
- Email/password authentication
- Phone number verification (structure in place)
- Form validation using zod schemas
- Toast notifications for user feedback

### State Management
- Firebase Auth for user authentication state
- React Query for API data fetching
- Local state for UI components

### Styling
- Tailwind CSS for styling
- shadcn/ui components for UI elements
- Mobile-first responsive design

## Future Development Guidelines

### Authentication Enhancements
1. Implement social auth providers
2. Add email verification
3. Implement password recovery
4. Complete phone authentication flow

### Feature Roadmap
1. Add more currency pairs
2. Implement real-time updates
3. Add user preferences storage
4. Create widget export functionality

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

### Current Limitations
1. Phone authentication is structurally implemented but needs backend setup
2. Social auth providers need configuration
3. Widget functionality needs implementation

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
```

## Testing & Deployment
- Run tests before deploying
- Ensure all environment variables are set
- Check authentication flows
- Verify responsive design
- Test error handling

## Known Issues & TODOs
1. Phone authentication needs complete implementation
2. Social auth providers need configuration
3. Widget functionality pending implementation
4. User preferences storage not implemented

## Contribution Guidelines
1. Follow existing file structure
2. Maintain component size limits
3. Add proper documentation
4. Include TypeScript types
5. Follow error handling patterns
6. Implement responsive designs
7. Use existing UI components

This documentation should be updated as new features are added or significant changes are made to the codebase.
