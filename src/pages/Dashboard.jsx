import React from "react";
import ChartCard from "../components/ChartCard";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Dashboard() {
  // ==== SAMPLE DATA ==== //
  const lineData = [
    { name: "Jan", created: 40, solved: 22 },
    { name: "Feb", created: 55, solved: 40 },
    { name: "Mar", created: 70, solved: 55 },
    { name: "Apr", created: 66, solved: 58 },
    { name: "May", created: 80, solved: 70 },
    { name: "Jun", created: 75, solved: 72 },
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
    { name: "Sales", value: 44 },
    { name: "Setup", value: 25 },
    { name: "Bug", value: 19 },
    { name: "Features", value: 12 },
  ];

  const COLORS = ["#0ff", "#f0f", "#08f", "#7CFF00"];

  return (
    <div className="page">
      <h1 className="pageTitle">Dashboard</h1>

      {/* STAT CARDS */}
      <section className="grid two">
        <ChartCard small>
          <div className="statLarge gradient-magenta">
            <div className="statLabel">Avg First Reply Time</div>
            <div className="statBig">
              <span>30</span>
              <small>h</small>
              <span>15</span>
              <small>min</small>
            </div>
          </div>
        </ChartCard>

        <ChartCard small>
          <div className="statLarge gradient-cyan">
            <div className="statLabel">Avg Full Resolve Time</div>
            <div className="statBig">
              <span>22</span>
              <small>h</small>
              <span>40</span>
              <small>min</small>
            </div>
          </div>
        </ChartCard>
      </section>

      {/* MAIN CHARTS */}
      <section className="grid two" style={{ marginTop: 18 }}>
        {/* LINE CHART */}
        <ChartCard title="Tickets Created vs Tickets Solved">
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" stroke="#777" />
                <YAxis stroke="#777" />
                <Tooltip />
                <Line type="monotone" dataKey="created" stroke="#0ff" strokeWidth={3} />
                <Line type="monotone" dataKey="solved" stroke="#f0f" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* MINI CHART + BAR */}
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 18 }}>
          <ChartCard title="Mini: Activity">
            <div style={{ height: 120 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="name" hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="solved" stroke="#08f" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Number of Tickets / Week Day">
            <div style={{ height: 180 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" stroke="#777" />
                  <YAxis stroke="#777" />
                  <Tooltip />
                  <Bar dataKey="total">
                    {barData.map((_, i) => (
                      <Cell key={i} fill="#0ff" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>
        </div>
      </section>

      {/* LOWER CHARTS */}
      <section className="grid three" style={{ marginTop: 18 }}>
        <ChartCard title="Tickets By Type">
          <div style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75}>
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Return Rate">
          <div style={{ height: 160 }} className="centerText">
            <div className="bigPercent">15%</div>
          </div>
        </ChartCard>

        <ChartCard title="Recent Activity">
          <div style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#777" />
                <Tooltip />
                <Bar dataKey="total" fill="#f0f" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>
    </div>
  );
}
