import React, { useState } from "react";
import styles from "./loginForm.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { E_Pages } from "../../../typescript/enums";

import { Formik, Form } from "formik";
import { AsyncButton } from "../../atoms/asyncButton/asyncButton";
import { loginSchema } from "../../../validations/auth";

import {
  OpenEyeIcon,
  ClosedEyeIcon,
  ForgotPasswordIcon,
} from "../../../shared/assets";

export function LoginForm() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = (values: any, actions: any) => {
    setTimeout(() => {
      console.log({ values });

      actions.setSubmitting(false);

      // navigate(E_Pages.dashboard);
    }, 3000);
  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.header}>
        <Link to={E_Pages.forgotPassword}>
          <img src={ForgotPasswordIcon} alt="Forgot Password" />
          <span>Forgot Password?</span>
        </Link>
        <p>
          <span>STEP 01/01</span>
          <span>Login Credentials</span>
        </p>
      </div>

      <div className={styles.prompt}>
        <h2>Login to your account!</h2>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
      </div>
      <div className={styles.formArea}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({
            touched,
            values,
            errors,
            isSubmitting,
            handleSubmit,
            handleChange,
            setFieldValue,
          }) => {
            return (
              <Form>
                <p>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="eg johndoe@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <span>{touched.email && errors.email} </span>
                </p>

                <p className={styles.passwordField}>
                  <label htmlFor="password">Password *</label>
                  <input
                    type={!viewPassword ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <span>{touched.password && errors.password} </span>
                  <button
                    type="button"
                    tabIndex={0}
                    onClick={() => setViewPassword((x) => !x)}
                  >
                    {!viewPassword ? (
                      <img src={OpenEyeIcon} alt="View Password Text" />
                    ) : (
                      <img src={ClosedEyeIcon} alt="Hide password text" />
                    )}
                  </button>
                </p>

                <AsyncButton
                  handleSubmit={handleSubmit}
                  isAsync={isSubmitting}
                  asyncText="Processing..."
                  normalText="Login Account"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
