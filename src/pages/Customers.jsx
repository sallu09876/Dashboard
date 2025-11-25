import React from "react";
import ChartCard from "../components/ChartCard";

export default function Customers() {
  const customers = [
    { id: 1, name: "Lisan OP", orders: 5, lifetime: 320 },
    { id: 2, name: "Saran Anil", orders: 2, lifetime: 75 },
    { id: 3, name: "Afdel", orders: 12, lifetime: 980 }
  ];

  return (
    <div className="page">
      <h1 className="pageTitle">Customers</h1>
      <ChartCard>
        <ul className="custList">
          {customers.map((c) => (
            <li key={c.id}>
              <div className="custName">{c.name}</div>
              <div className="custMeta">Orders: {c.orders} • Lifetime: ${c.lifetime}</div>
            </li>
          ))}
        </ul>
      </ChartCard>
    </div>
  );
}
