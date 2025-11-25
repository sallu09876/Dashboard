import React from "react";
import ChartCard from "../components/ChartCard";

// Recharts
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function Reports() {
  // --------------------------
  //  TOAST STATE
  // --------------------------
  const [showToast, setShowToast] = React.useState(false);

  function triggerToast() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  }

  // --------------------------
  //  DOWNLOAD CSV FUNCTION
  // --------------------------
  function downloadReport() {
    const csvContent = `
Category,Value
Total Revenue,21000
Total Profit,12500
Total Orders,${Math.floor(Math.random() * 500 + 200)}
Top Product,Jeans
Low Stock Items,Jackets (30 left)
New Customers,40%
Returning Customers,60%
    `.trim();

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.setAttribute("download", "ecom_report.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Show toast instead of alert
    triggerToast();
  }

  // --------------------------
  //  DATA
  // --------------------------
  const salesData = [
    { month: "Jan", revenue: 8000, profit: 3200 },
    { month: "Feb", revenue: 11000, profit: 6000 },
    { month: "Mar", revenue: 15000, profit: 7200 },
    { month: "Apr", revenue: 13500, profit: 6500 },
    { month: "May", revenue: 17000, profit: 9000 },
    { month: "Jun", revenue: 21000, profit: 12500 },
  ];

  const inventoryData = [
    { name: "T-Shirts", stock: 140 },
    { name: "Jeans", stock: 80 },
    { name: "Jackets", stock: 30 },
    { name: "Shoes", stock: 105 },
    { name: "Hoodies", stock: 50 },
  ];

  const customerSegments = [
    { name: "New Customers", value: 40 },
    { name: "Returning Customers", value: 60 },
  ];

  const COLORS = ["#0ff", "#f0f"];

  const orderPerf = [
    { day: "Mon", orders: 50 },
    { day: "Tue", orders: 65 },
    { day: "Wed", orders: 40 },
    { day: "Thu", orders: 80 },
    { day: "Fri", orders: 120 },
    { day: "Sat", orders: 95 },
  ];

  return (
    <div className="page">
      {/* --------------------------------- */}
      {/* TOAST UI (floats bottom-right)   */}
      {/* --------------------------------- */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "linear-gradient(90deg, #0f0, #0a0)",
            padding: "12px 20px",
            borderRadius: "10px",
            color: "#000",
            fontWeight: "700",
            fontSize: "14px",
            boxShadow: "0 0 15px #0f0",
            zIndex: 999,
            animation: "fadeInUp 0.4s ease",
          }}
        >
          Your report is ready !
        </div>
      )}

      <h1 className="pageTitle">Reports</h1>

      {/* ---------------------- */}
      {/* SALES + INVENTORY ROW */}
      {/* ---------------------- */}
      <div className="grid two">
        {/* SALES REPORT */}
        <ChartCard title="Sales Report (Revenue & Profit)">
          <div style={{ height: 170 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <XAxis dataKey="month" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0ff"
                  fill="#0ff4"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#f0f"
                  fill="#f0f3"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* INVENTORY REPORT */}
        <ChartCard title="Inventory Stock Levels">
          <div style={{ height: 170 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryData}>
                <XAxis dataKey="name" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip />
                <Bar dataKey="stock">
                  {inventoryData.map((_, i) => (
                    <Cell key={i} fill={i % 2 ? "#0ff" : "#f0f"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* ------------------------------- */}
      {/* CUSTOMER INSIGHTS + ORDER PERF  */}
      {/* ------------------------------- */}
      <div className="grid two" style={{ marginTop: 16 }}>
        {/* CUSTOMER INSIGHTS */}
        <ChartCard title="Customer Insights">
          <div style={{ height: 190 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSegments}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                >
                  {customerSegments.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* ORDER PERFORMANCE */}
        <ChartCard title="Order Performance (Daily)">
          <div style={{ height: 190 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderPerf}>
                <XAxis dataKey="day" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#0ff"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#f0f" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* ----------------------- */}
      {/* CUSTOM REPORT BUILDER  */}
      {/* ----------------------- */}
      <ChartCard title="Custom Report Builder" style={{ marginTop: 16 }}>
        <div style={{ padding: 20 }}>
          <p style={{ color: "#aaa", marginBottom: 10 }}>
            Select the type of report you want to generate:
          </p>

          <select
            style={{
              padding: "10px",
              width: "100%",
              background: "#0d0f17",
              borderRadius: "8px",
              color: "#fff",
              border: "1px solid #333",
              marginBottom: 15,
            }}
          >
            <option>Sales Summary</option>
            <option>Inventory Summary</option>
            <option>Customer Insights</option>
            <option>Orders Summary</option>
          </select>

          <button
            onClick={downloadReport}
            style={{
              background: "linear-gradient(90deg, #0ff, #f0f)",
              padding: "12px 24px",
              border: "none",
              color: "#000",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              width: "100%",
              transition: "0.2s",
            }}
          >
            Download Report
          </button>
        </div>
      </ChartCard>
    </div>
  );
}
