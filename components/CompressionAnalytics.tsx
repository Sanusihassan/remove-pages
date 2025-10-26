import React from "react";
import CountUp from "react-countup";
import { FileText, TrendingDown, Zap } from "lucide-react";
import { useSelector } from "react-redux";
import type { ToolState } from "../src/store";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import type { downloadFile } from "../src/content";

const formatMB = (value: number) => `${value.toFixed(2)} MB`;

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
};

export const CompressionAnalytics = ({
  content,
}: {
  content: downloadFile["compressionAnalyticsContent"];
}) => {
  if (typeof window === "undefined") return null;

  const originalSize = useSelector(
    (state: { tool: ToolState }) => state.tool.originalFileSize || 0
  );
  const compressedSize = useSelector(
    (state: { tool: ToolState }) => state.tool.compressedFileSize || 0
  );

  const sizeSaved = Math.max(0, originalSize - compressedSize);
  const percentageReducedNumber =
    originalSize > 0 ? (sizeSaved / originalSize) * 100 : 0;
  const percentageReduced = percentageReducedNumber.toFixed(1);
  const compressionRatioNumber =
    compressedSize > 0 && originalSize >= compressedSize
      ? originalSize / compressedSize
      : 1;
  const compressionRatio = compressionRatioNumber.toFixed(2);

  const barData = [
    {
      name: content.chart.original,
      size: originalSize / (1024 * 1024),
      fill: "#94a3b8",
    },
    {
      name: content.chart.compressed,
      size: compressedSize / (1024 * 1024),
      fill: "#6366f1",
    },
  ];

  const pieData = [
    { name: content.chart.reduced, value: percentageReducedNumber },
    { name: content.chart.remaining, value: 100 - percentageReducedNumber },
  ];
  const COLORS = ["#22c55e", "#3b82f6"];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg border border-indigo-100 my-3.5">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {content.title}
        </h2>
        <p className="text-gray-600">{content.description}</p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Size Comparison */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {content.sizeComparisonTitle}
            </h3>
            <FileText className="w-6 h-6 text-indigo-600" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatMB} />
              <Tooltip formatter={formatMB} />
              <Bar dataKey="size" barSize={60} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reduction Breakdown */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-green-200 transform hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {content.reductionBreakdownTitle}
            </h3>
            <TrendingDown className="w-6 h-6 text-green-600" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Space Saved */}
          <div className="flex flex-col items-center p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-lg">
            <div className="p-3 bg-green-100 rounded-lg mb-2">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {content.sizeSavedLabel}
            </p>
            <p className="text-2xl font-bold text-green-700">
              {formatBytes(sizeSaved)}
            </p>
          </div>

          {/* Compression Ratio */}
          <div className="flex flex-col items-center p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg">
            <div className="p-3 bg-blue-100 rounded-lg mb-2">
              <TrendingDown className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {content.compressionRatioLabel}
            </p>
            <p className="text-2xl font-bold text-blue-700">
              <CountUp
                end={parseFloat(compressionRatio)}
                decimals={2}
                duration={2}
                suffix=":1"
              />
            </p>
          </div>

          {/* Percentage Reduced */}
          <div className="flex flex-col items-center p-4 bg-linear-to-r from-purple-50 to-violet-50 rounded-lg">
            <div className="p-3 bg-purple-100 rounded-lg mb-2">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {content.sizeReducedLabel}
            </p>
            <p className="text-2xl font-bold text-purple-700">
              <CountUp
                end={parseFloat(percentageReduced)}
                decimals={1}
                duration={2}
                suffix="%"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
