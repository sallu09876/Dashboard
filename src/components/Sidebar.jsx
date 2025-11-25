import React from "react";

const items = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "orders", label: "Orders", icon: "📦" },
  { id: "products", label: "Products", icon: "👕" },
  { id: "customers", label: "Customers", icon: "🧑‍🤝‍🧑" },
  { id: "reports", label: "Reports", icon: "📊" }
];

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">AdminPro</div>
        <div className="brandText">Store Overview</div>
      </div>

      <nav className="nav">
        {items.map((it) => (
          <button
            key={it.id}
            className={"navItem " + (active === it.id ? "active" : "")}
            onClick={() => setActive(it.id)}
          >
            <span className="icon">{it.icon}</span>
            <span className="text">{it.label}</span>
            <span className="chev">›</span>
          </button>
        ))}
      </nav>

      <footer className="sidebarFooter">
        <small>Admin panel</small>
      </footer>
    </aside>
  );
}
