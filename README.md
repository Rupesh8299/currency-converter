# ConverTex - Currency Conversion Made Simple

ConverTex is a modern currency conversion application that provides real-time exchange rates, historical data tracking, and an intuitive user interface.

## Features

- Real-time currency conversion
- Historical exchange rate charts
- Multiple timeframe analysis (1D to 5Y)
- User authentication with email verification
- Responsive design for all devices
- Interactive charts and tables
- 15+ major world currencies supported

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components
- Firebase Authentication
- FreeCurrencyAPI for exchange rates
- Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js 18+ - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm 9+ (comes with Node.js)
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Rupesh8299/chartwise-currency-flow.git
cd chartwise-currency-flow
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
VITE_CURRENCY_API_KEY=your_currency_api_key
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Create a Vercel account
3. Import your forked repository
4. Configure environment variables in Vercel
5. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Rupesh - Rupesh8299@gmail.com

Project Link: [https://github.com/Rupesh8299/chartwise-currency-flow](https://github.com/Rupesh8299/chartwise-currency-flow)
