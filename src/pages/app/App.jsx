/** @format */

import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.scss";
import { getUser, logOut } from "../../utilities/users-service";

// Pages
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../newOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
// import FruitsPage from "./pages/FruitsPage/FruitsPage";
// Components
import NavBar from "../../components/navBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          {/* <NavBar /> */}
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
            />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
