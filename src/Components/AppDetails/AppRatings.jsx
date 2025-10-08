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
import FormatNumber from "../../hooks/FormateNumber";



const AppRatings = ({ratings}) => {
  const data = Array.isArray(ratings)
  ? [...ratings].sort((a, b) => {
      const numA = parseInt(a.name);
      const numB = parseInt(b.name);
      return numB - numA;
    })
  : [];

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
            tickFormatter={FormatNumber}
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
            formatter={(value) => [FormatNumber(value), "Ratings"]}
          />
          <Bar dataKey="count" fill="#FF9100" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatings;
