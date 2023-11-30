import React, { useState } from "react";
import { SignUpContext } from "./signUpContext";
import { Routes, Route } from "react-router-dom";
import { SignUpFormOne } from "../../molecules/signUpFormOne/signUpFormOne";
import { SignUpPersonalInfo } from "../../molecules/signUpPersonalInfo/signUpPersonalInfo.module";
import { SignUpResidencyInfo } from "../../molecules/signUpResidencyInfo/signUpResidencyInfo.module";

export function SignUp() {
  const [signUpData, setSignUpData] = useState({
    role: "",
    fullName: "",
    email: "",
    password: "",
    hasAgreedToTerms: false,
    address: "",
    state: "",
    phoneNumber: "",
    country: "",
    confirmPassword: "",
  });
  return (
    <SignUpContext.Provider value={{ signUpData, setSignUpData }}>
      <Routes>
        <Route path="/" element={<SignUpFormOne />} />
        <Route path="/personal-info" element={<SignUpPersonalInfo />} />
        <Route path="/residency-info" element={<SignUpResidencyInfo />} />
      </Routes>
    </SignUpContext.Provider>
  );
}
