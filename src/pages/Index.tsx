
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CurrencyConverter from "@/components/CurrencyConverter";
import CurrencyChart from "@/components/CurrencyChart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionTable from "@/components/ConversionTable";
import { getExchangeRates } from "@/api/currencyService";

const Index = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [conversionRate, setConversionRate] = useState<number>(86.04);

  useEffect(() => {
    const fetchInitialRates = async () => {
      try {
        const data = await getExchangeRates("EUR");
        if (fromCurrency && toCurrency && data.rates) {
          // Calculate the conversion rate
          const rate = data.rates[toCurrency] / data.rates[fromCurrency];
          setConversionRate(rate);
        }
      } catch (error) {
        console.error("Error fetching initial rates:", error);
      }
    };

    fetchInitialRates();
  }, [fromCurrency, toCurrency]);

  const handleCurrencyChange = (from: string, to: string) => {
    setFromCurrency(from);
    setToCurrency(to);
  };

  const handleResultCalculated = (from: string, to: string) => {
    handleCurrencyChange(from, to);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Hero section with conversion form */}
        <div className="bg-converter-blue text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {fromCurrency} to {toCurrency} - {fromCurrency} to {toCurrency} Converter
              </h1>
              <p className="max-w-3xl mx-auto">
                Convert {fromCurrency} to {toCurrency} using latest Foreign Currency Exchange Rates.
                The fast and reliable converter shows how much you would get when exchanging {fromCurrency} to {toCurrency}.
              </p>
            </div>

            <CurrencyConverter onResultCalculated={handleResultCalculated} />
          </div>
        </div>

        {/* Chart section */}
        <div className="container mx-auto px-4 py-8">
          <CurrencyChart fromCurrency={fromCurrency} toCurrency={toCurrency} />
        </div>

        {/* Conversion table */}
        <div className="container mx-auto px-4 py-8">
          <ConversionTable 
            fromCurrency={fromCurrency} 
            toCurrency={toCurrency} 
            rate={conversionRate} 
          />
        </div>

        {/* Additional information */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">About {fromCurrency}/{toCurrency} Conversion</h2>
            <p className="mb-4">
              Our currency converter provides the most up-to-date exchange rates for {fromCurrency} to {toCurrency}.
              Whether you're planning a trip, sending money abroad, or analyzing markets, you can rely on our accurate
              conversion tools. We update our rates every hour to ensure you have the most current information.
            </p>
            <h3 className="text-lg font-semibold mb-2">How to Use the Currency Converter?</h3>
            <ol className="list-decimal pl-5 mb-4">
              <li className="mb-1">Enter the amount you want to convert</li>
              <li className="mb-1">Select the currency you have (From Currency)</li>
              <li className="mb-1">Select the currency you want (To Currency)</li>
              <li className="mb-1">Click "Convert" to see the result</li>
            </ol>
            <p>
              You can also view historical data using our interactive chart, which provides exchange rate history for 
              periods ranging from 1 month to 5 years.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
