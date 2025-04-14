
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import {
  getExchangeRates,
  convertCurrency,
  currencies,
  type CurrencyOption,
} from "@/api/currencyService";

interface CurrencyConverterProps {
  onResultCalculated?: (from: string, to: string) => void;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ onResultCalculated }) => {
  const [amount, setAmount] = useState<string>("10");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [rates, setRates] = useState<Record<string, number>>({});
  const [quickAmounts] = useState<number[]>([1, 10, 50, 100, 1000]);

  // Get exchange rates on component mount and when currencies change
  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      try {
        const data = await getExchangeRates("EUR"); // Using EUR as base for demo
        setRates(data.rates);
        calculateResult(parseFloat(amount), fromCurrency, toCurrency, data.rates);
      } catch (error) {
        console.error("Error fetching rates:", error);
        toast.error("Failed to fetch exchange rates");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [fromCurrency, toCurrency]);

  // Calculate conversion result
  const calculateResult = (
    amountValue: number, 
    from: string, 
    to: string, 
    currentRates: Record<string, number>
  ) => {
    if (!amountValue || isNaN(amountValue)) {
      setResult(null);
      return;
    }
    
    const convertedAmount = convertCurrency(amountValue, from, to, currentRates);
    setResult(convertedAmount);
    
    if (onResultCalculated) {
      onResultCalculated(from, to);
    }
  };

  const handleConversion = () => {
    const amountValue = parseFloat(amount);
    calculateResult(amountValue, fromCurrency, toCurrency, rates);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleQuickAmountClick = (quickAmount: number) => {
    setAmount(quickAmount.toString());
    calculateResult(quickAmount, fromCurrency, toCurrency, rates);
  };

  const findCurrency = (code: string): CurrencyOption | undefined => {
    return currencies.find((currency) => currency.code === code);
  };

  const fromCurrencyData = findCurrency(fromCurrency);
  const toCurrencyData = findCurrency(toCurrency);

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-6">
          {/* Amount input section */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="flex flex-col space-y-2">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg font-medium"
                placeholder="Enter amount"
              />
              <div className="flex flex-wrap gap-2">
                {quickAmounts.map((quickAmount) => (
                  <Button
                    key={quickAmount}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAmountClick(quickAmount)}
                    className="text-xs"
                  >
                    {quickAmount}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Currency selection section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-2">
              <label htmlFor="from-currency" className="block text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <Select defaultValue={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger id="from-currency" className="w-full">
                  <SelectValue placeholder="Select currency">
                    {fromCurrencyData && (
                      <div className="flex items-center">
                        <span className="mr-2">{fromCurrencyData.flag}</span>
                        <span>{fromCurrencyData.code} - {fromCurrencyData.name}</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={`from-${currency.code}`} value={currency.code}>
                      <div className="flex items-center">
                        <span className="mr-2">{currency.flag}</span>
                        <span>
                          {currency.code} - {currency.name}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Swap button */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={handleSwapCurrencies}
                className="rounded-full h-10 w-10"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="to-currency" className="block text-sm font-medium text-gray-700 mb-1">
                To
              </label>
              <Select defaultValue={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger id="to-currency" className="w-full">
                  <SelectValue placeholder="Select currency">
                    {toCurrencyData && (
                      <div className="flex items-center">
                        <span className="mr-2">{toCurrencyData.flag}</span>
                        <span>{toCurrencyData.code} - {toCurrencyData.name}</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={`to-${currency.code}`} value={currency.code}>
                      <div className="flex items-center">
                        <span className="mr-2">{currency.flag}</span>
                        <span>
                          {currency.code} - {currency.name}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Convert button */}
          <Button
            onClick={handleConversion}
            disabled={loading}
            size="lg"
            className="w-full bg-converter-blue hover:bg-blue-700 text-white"
          >
            {loading ? "Converting..." : "Convert"}
          </Button>

          {/* Results section */}
          {result !== null && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 text-lg">
                  <span className="font-semibold">
                    {parseFloat(amount).toLocaleString()} {fromCurrencyData?.code}
                  </span>
                  <span>=</span>
                  <span className="font-bold text-xl text-converter-blue">
                    {result.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {toCurrencyData?.code}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  1 {fromCurrencyData?.code} = {(rates[toCurrency] / rates[fromCurrency]).toFixed(6)}{" "}
                  {toCurrencyData?.code}
                </p>
                <p className="text-sm text-gray-500">
                  1 {toCurrencyData?.code} = {(rates[fromCurrency] / rates[toCurrency]).toFixed(6)}{" "}
                  {fromCurrencyData?.code}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
