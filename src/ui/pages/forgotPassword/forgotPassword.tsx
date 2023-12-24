import React from "react";

import { ForgotPasswordForm } from "../../molecules/forgotPasswordForm/forgotPasswordForm";
import { Seo } from "../../atoms/seo/seo";

export function ForgotPassword() {
  return (
    <>
      <Seo title="Forgot Password" description="Forgot Password" />
      <ForgotPasswordForm />
    </>
  );
}
