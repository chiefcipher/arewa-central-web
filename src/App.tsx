import React from "react";
import "./scss/combine-styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./ui/pages/signUp/signUp";
import { Login } from "./ui/pages/login/login";
import { AuthLayout } from "./ui/pages/authLayout/authLayout";
import { E_pages } from "./typescript/enums";
import { ForgotPassword } from "./ui/pages/forgotPassword/forgotPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route element={<AuthLayout />}>
          <Route path={E_pages.signup} element={<SignUp />} />
          <Route path={E_pages.login} element={<Login />} />
          <Route path={E_pages.forgotPassword} element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
