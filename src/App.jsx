/** @format */

import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

// Pages
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import AuthPage from "./pages/AuthPage";
// Components
import NavBar from "./components/NavBar";
import FruitsPage from "./pages/FruitsPage";

function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/fruits" element={<FruitsPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
