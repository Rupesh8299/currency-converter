
import { toast } from "sonner";

// Define interfaces for our API responses and data structures
export interface ExchangeRateResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface HistoricalDataPoint {
  date: string;
  rate: number;
}

export interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
  flag?: string;
}

// Currency data with symbols and names
export const currencies: CurrencyOption[] = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  { code: "MXN", name: "Mexican Peso", symbol: "Mex$", flag: "🇲🇽" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  { code: "RUB", name: "Russian Ruble", symbol: "₽", flag: "🇷🇺" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿" },
];

// API key for ExchangeRate-API (free tier)
const API_KEY = "2d4419dae8a2ebbdf42fb1fa687127d8";
const BASE_URL = "http://api.exchangeratesapi.io/v1";

// Function to get current exchange rates
export const getExchangeRates = async (baseCurrency: string): Promise<ExchangeRateResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/latest?access_key=${API_KEY}&base=${baseCurrency}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    toast.error("Failed to fetch current exchange rates");
    
    // Return mock data for development/demo purposes
    return getMockExchangeRates(baseCurrency);
  }
};

// Function to convert amount between currencies
export const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number => {
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    return 0;
  }

  // If base currency is EUR (API limitation in free tier)
  if (Object.keys(rates).includes("EUR")) {
    const amountInEUR = amount / rates[fromCurrency];
    return amountInEUR * rates[toCurrency];
  }

  // Direct conversion if rates are based on fromCurrency
  return amount * rates[toCurrency];
};

// Function to get historical exchange rate data
export const getHistoricalData = async (
  baseCurrency: string,
  targetCurrency: string,
  timeRange: "1M" | "3M" | "6M" | "1Y" | "5Y"
): Promise<HistoricalDataPoint[]> => {
  try {
    // This would normally be a real API call to fetch historical data
    // For demo purposes, we'll return mock data
    return getMockHistoricalData(baseCurrency, targetCurrency, timeRange);
  } catch (error) {
    console.error("Error fetching historical data:", error);
    toast.error("Failed to fetch historical exchange rate data");
    return [];
  }
};

// Mock data generation functions (for development/demo purposes)
const getMockExchangeRates = (baseCurrency: string): ExchangeRateResponse => {
  // These rates are roughly accurate as of April 2025 for demonstration
  const mockRates: Record<string, number> = {
    USD: 1.08,
    EUR: 1.00,
    GBP: 0.85,
    JPY: 162.5,
    AUD: 1.63,
    CAD: 1.47,
    CHF: 0.98,
    CNY: 7.82,
    INR: 86.04,
    MXN: 18.23,
    BRL: 5.38,
    RUB: 98.65,
    KRW: 1450.25,
    SGD: 1.44,
    NZD: 1.77,
  };

  // Adjust rates based on the selected base currency
  const baseRate = mockRates[baseCurrency] || 1;
  const adjustedRates: Record<string, number> = {};

  Object.entries(mockRates).forEach(([currency, rate]) => {
    adjustedRates[currency] = rate / baseRate;
  });

  return {
    success: true,
    timestamp: Date.now() / 1000,
    base: baseCurrency,
    date: new Date().toISOString().split('T')[0],
    rates: adjustedRates,
  };
};

// Generate mock historical data with realistic patterns
const getMockHistoricalData = (
  baseCurrency: string,
  targetCurrency: string,
  timeRange: string
): HistoricalDataPoint[] => {
  const result: HistoricalDataPoint[] = [];
  const now = new Date();
  
  // Determine number of data points and interval based on time range
  let days: number;
  let interval: number;
  
  switch (timeRange) {
    case "1M":
      days = 30;
      interval = 1;
      break;
    case "3M":
      days = 90;
      interval = 2;
      break;
    case "6M":
      days = 180;
      interval = 3;
      break;
    case "1Y":
      days = 365;
      interval = 7;
      break;
    case "5Y":
      days = 365 * 5;
      interval = 30;
      break;
    default:
      days = 30;
      interval = 1;
  }
  
  // Generate a base value (roughly accurate for the currency pair)
  let baseValue: number;
  if (baseCurrency === "USD" && targetCurrency === "INR") {
    baseValue = 86.04; // Approximate USD to INR rate as of April 2025
  } else if (baseCurrency === "EUR" && targetCurrency === "USD") {
    baseValue = 1.08; // Approximate EUR to USD rate
  } else {
    baseValue = 1.0; // Default for other pairs
  }
  
  // Create data points with realistic patterns
  for (let i = days; i >= 0; i -= interval) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Create some volatility
    const volatility = 0.05; // 5% max change
    const randomFactor = (Math.random() - 0.5) * volatility;
    const trendFactor = Math.sin(i / (days / 3)) * 0.03; // Slight sinusoidal trend
    
    // Calculate rate with randomness + trend
    const rate = baseValue * (1 + randomFactor + trendFactor);
    
    result.push({
      date: date.toISOString().split('T')[0],
      rate: parseFloat(rate.toFixed(4)),
    });
  }
  
  return result;
};
