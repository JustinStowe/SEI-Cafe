/** @format */

import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

// Pages
import NewOrderPage from "./pages/newOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import FruitsPage from "./pages/FruitsPage/FruitsPage";
// Components
import NavBar from "./components/navBar/NavBar";

function App() {
  const [user, setUser] = useState();

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
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
