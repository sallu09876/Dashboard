import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const lineData = [
  { name: "Jan", orders: 40 },
  { name: "Feb", orders: 55 },
  { name: "Mar", orders: 70 },
  { name: "Apr", orders: 66 },
  { name: "May", orders: 80 },
  { name: "Jun", orders: 75 },
];

const barData = [
  { name: "Mon", total: 30 },
  { name: "Tue", total: 45 },
  { name: "Wed", total: 70 },
  { name: "Thu", total: 55 },
  { name: "Fri", total: 90 },
  { name: "Sat", total: 60 },
];

const pieData = [
  { name: "Successful", value: 70 },
  { name: "Cancelled", value: 15 },
  { name: "Returned", value: 15 },
];

const COLORS = ["#0ff", "#f0f", "#08f"];

export default function Orders() {
  return (
    <div className="orders-page">
      <h1 className="page-title">Orders Overview</h1>

      <div className="charts-grid">

        {/* LINE CHART */}
        <div className="chart-card">
          <h3>Orders Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#0ff" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* DONUT CHART */}
        <div className="chart-card">
          <h3>Order Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                innerRadius={55}
                paddingAngle={5}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="chart-card">
          <h3>Orders Per Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="total" fill="#f0f" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
