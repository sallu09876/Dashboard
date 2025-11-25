import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [active, setActive] = useState("dashboard");

  const renderMain = () => {
    switch (active) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Orders />;
      case "products":
        return <Products />;
      case "customers":
        return <Customers />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app neon-bg">
      <Sidebar active={active} setActive={setActive} />
      <main className="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45 }}
            className="content"
          >
            {renderMain()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
