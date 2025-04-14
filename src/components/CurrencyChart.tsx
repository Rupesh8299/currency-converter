
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getHistoricalData, currencies } from "@/api/currencyService";
import { toast } from "sonner";

type TimeRange = "1M" | "3M" | "6M" | "1Y" | "5Y";

interface CurrencyChartProps {
  fromCurrency: string;
  toCurrency: string;
}

const CurrencyChart: React.FC<CurrencyChartProps> = ({
  fromCurrency,
  toCurrency,
}) => {
  const [timeRange, setTimeRange] = useState<TimeRange>("1M");
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const timeRanges: { label: string; value: TimeRange }[] = [
    { label: "1M", value: "1M" },
    { label: "3M", value: "3M" },
    { label: "6M", value: "6M" },
    { label: "1Y", value: "1Y" },
    { label: "5Y", value: "5Y" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (!fromCurrency || !toCurrency) return;

      setLoading(true);
      try {
        const data = await getHistoricalData(
          fromCurrency,
          toCurrency,
          timeRange
        );
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        toast.error("Failed to load historical exchange rate data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency, timeRange]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (timeRange === "5Y") {
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
    } else if (timeRange === "1Y") {
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    } else {
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }
  };

  const formatYAxis = (value: number) => {
    if (value > 1000) {
      return value.toFixed(0);
    } else if (value > 10) {
      return value.toFixed(1);
    } else {
      return value.toFixed(2);
    }
  };

  const getLatestRate = () => {
    if (chartData.length > 0) {
      return chartData[chartData.length - 1].rate;
    }
    return 0;
  };

  const getFirstRate = () => {
    if (chartData.length > 0) {
      return chartData[0].rate;
    }
    return 0;
  };

  const calculateChange = () => {
    if (chartData.length < 2) return { value: 0, percentage: 0, positive: true };

    const firstRate = getFirstRate();
    const latestRate = getLatestRate();
    const change = latestRate - firstRate;
    const percentage = (change / firstRate) * 100;

    return {
      value: Math.abs(change),
      percentage: Math.abs(percentage),
      positive: change >= 0,
    };
  };

  const getFromCurrencySymbol = () => {
    const currency = currencies.find((c) => c.code === fromCurrency);
    return currency?.symbol || fromCurrency;
  };

  const getToCurrencySymbol = () => {
    const currency = currencies.find((c) => c.code === toCurrency);
    return currency?.symbol || toCurrency;
  };

  const change = calculateChange();
  const latestRate = getLatestRate();

  const getChartTitle = () => {
    return `${fromCurrency}/${toCurrency} Exchange Rate`;
  };

  // Find domain for the chart
  const findYAxisDomain = () => {
    if (chartData.length === 0) return [0, 1];
    
    const rates = chartData.map(dataPoint => dataPoint.rate);
    const min = Math.min(...rates);
    const max = Math.max(...rates);
    const padding = (max - min) * 0.1;
    
    return [min - padding, max + padding];
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{getChartTitle()}</CardTitle>
          <div className="flex items-center space-x-1">
            {timeRanges.map((range) => (
              <Button
                key={range.value}
                variant={timeRange === range.value ? "default" : "outline"}
                size="sm"
                className={`text-xs ${
                  timeRange === range.value ? "bg-converter-blue text-white" : ""
                }`}
                onClick={() => setTimeRange(range.value)}
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold">
                {getToCurrencySymbol()}{" "}
                {latestRate.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}
              </p>
              <p className="text-sm text-gray-500">
                1 {fromCurrency} = {getToCurrencySymbol()}{" "}
                {latestRate.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}
              </p>
            </div>
            <div className={`text-right ${change.positive ? "text-green-500" : "text-red-500"}`}>
              <p className="text-lg font-semibold flex items-center justify-end">
                {change.positive ? "+" : "-"}{" "}
                {change.value.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}
              </p>
              <p className="text-sm">
                {change.positive ? "+" : "-"}
                {change.percentage.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[300px]">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Loading chart data...</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  tickFormatter={formatDate}
                  tick={{ fontSize: 12 }}
                  minTickGap={30}
                />
                <YAxis
                  tickFormatter={formatYAxis}
                  domain={findYAxisDomain()}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value: number) => [
                    `${getToCurrencySymbol()} ${value.toFixed(4)}`,
                    `${fromCurrency}/${toCurrency}`,
                  ]}
                  labelFormatter={(label) => formatDate(label)}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyChart;
