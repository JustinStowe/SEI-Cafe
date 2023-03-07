/** @format */

import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//pages
import NewOrderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import FruitsPage from "./pages/FruitsPage/FruitsPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
//Components
import NavBar from "./components/NavBar";

function App() {
  const [state, setState] = useState(null);
  const [user, setUser] = useState(null);

  const fetchState = async () => {
    try {
      const response = await fetch("/api/test");
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
