
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ConversionRow {
  fromAmount: number;
  fromCurrency: string;
  toCurrency: string;
  toAmount: number;
}

interface ConversionTableProps {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}

const ConversionTable: React.FC<ConversionTableProps> = ({
  fromCurrency,
  toCurrency,
  rate,
}) => {
  const commonAmounts = [1, 5, 10, 20, 50, 100, 500, 1000, 2000, 5000, 10000];
  
  // Generate rows for from -> to
  const generateFromToRows = (): ConversionRow[] => {
    return commonAmounts.map(amount => ({
      fromAmount: amount,
      fromCurrency,
      toCurrency,
      toAmount: amount * rate
    }));
  };
  
  // Generate rows for to -> from
  const generateToFromRows = (): ConversionRow[] => {
    return commonAmounts.map(amount => ({
      fromAmount: amount,
      fromCurrency: toCurrency,
      toCurrency: fromCurrency,
      toAmount: amount / rate
    }));
  };
  
  const fromToRows = generateFromToRows();
  const toFromRows = generateToFromRows();
  
  const formatCurrency = (amount: number): string => {
    if (amount >= 100000) {
      return amount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else if (amount >= 100) {
      return amount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
      });
    } else {
      return amount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 5,
      });
    }
  };
  
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Conversion from {fromCurrency} to {toCurrency}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* From -> To table */}
          <div>
            <h3 className="font-medium mb-2 text-center">
              {fromCurrency} to {toCurrency}
            </h3>
            <div className="bg-gray-50 rounded-md overflow-hidden">
              {fromToRows.map((row, index) => (
                <div
                  key={`from-${row.fromAmount}`}
                  className={`flex justify-between px-4 py-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="font-medium">
                    {row.fromAmount} {row.fromCurrency}
                  </div>
                  <div className="text-right">
                    {formatCurrency(row.toAmount)} {row.toCurrency}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* To -> From table */}
          <div>
            <h3 className="font-medium mb-2 text-center">
              {toCurrency} to {fromCurrency}
            </h3>
            <div className="bg-gray-50 rounded-md overflow-hidden">
              {toFromRows.map((row, index) => (
                <div
                  key={`to-${row.fromAmount}`}
                  className={`flex justify-between px-4 py-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="font-medium">
                    {row.fromAmount} {row.fromCurrency}
                  </div>
                  <div className="text-right">
                    {formatCurrency(row.toAmount)} {row.toCurrency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionTable;
