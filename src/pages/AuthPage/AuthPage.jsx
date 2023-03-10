/** @format */

import React from "react";
import LoginForm from "../../components/login/Login";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  return (
    <div>
      <h1>
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </h1>
    </div>
  );
}
