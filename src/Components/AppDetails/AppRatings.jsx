import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5 star", value: 12000 },
  { name: "4 star", value: 8000 },
  { name: "3 star", value: 4000 },
  { name: "2 star", value: 2500 },
  { name: "1 star", value: 1200 },
];

const AppRatings = () => {
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };
  return (
    <div className=" bg-[#f9f9f9] mt-4 rounded-xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Ratings</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={data}>
          <CartesianGrid
            horizontal={false}
            strokeDasharray="3 3"
            opacity={0.1}
          />
          <XAxis
            type="number"
            tickFormatter={formatNumber}
            tick={{ fill: "#555", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#555", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            formatter={(value) => [formatNumber(value), "Ratings"]}
          />
          <Bar dataKey="value" fill="#FF9100" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatings;
