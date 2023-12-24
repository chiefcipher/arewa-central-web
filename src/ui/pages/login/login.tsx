import React from "react";

import { Routes, Route } from "react-router-dom";
import { LoginForm } from "../../molecules/loginForm/loginForm";
import { Seo } from "../../atoms/seo/seo";

export function Login() {
  return (
    <>
      <Seo title="Login" description="Login" />
      <LoginForm />
    </>
  );
}
