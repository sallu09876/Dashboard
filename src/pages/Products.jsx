import React from "react";
import ChartCard from "../components/ChartCard";

export default function Products() {
  const products = [
    { id: 1, name: "Neon Tee", stock: 120, price: 25 },
    { id: 2, name: "Glow Jacket", stock: 32, price: 120 },
    { id: 3, name: "Retro Jeans", stock: 80, price: 65 }
  ];

  return (
    <div className="page">
      <h1 className="pageTitle">Products</h1>
      <ChartCard>
        <table className="productTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.stock}</td>
                <td>${p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ChartCard>
    </div>
  );
}
