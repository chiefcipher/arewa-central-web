import React, { useContext, useEffect, useState } from "react";
import styles from "./signUpPersonalInfo.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { SignUpContext } from "../../pages/signUp/signUpContext";
import { Formik, Form } from "formik";
import { AsyncButton } from "../../atoms/asyncButton/asyncButton";
import { signUpPersonalInfoSchema } from "../../../validations/auth";

import { LeftArrowSvg, OpenEyeIcon, ClosedEyeIcon } from "../../../shared";

export function SignUpPersonalInfo() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPassword, setViewConfirmPassword] =
    useState<boolean>(false);
  const { signUpData, setSignUpData } = useContext(SignUpContext);
  // check if user has filled form one
  useEffect(() => {
    const hasFilledFormOne = signUpData.role.length > 0;
    if (!hasFilledFormOne) return navigate("../");
  });
  const navigate = useNavigate();
  const handleSubmit = (values: any, actions: any) => {
    setSignUpData((prevData: any) => ({
      ...prevData,
      ...values,
    }));
    actions.setSubmitting(false);

    navigate("../residency-info");
  };
  return (
    <div className={styles.formTwo}>
      <div className={styles.header}>
        <Link to="../">
          <img src={LeftArrowSvg} alt="Go back" />
          <span>Go Back</span>
        </Link>
        <p>
          <span>STEP 02/03</span>
          <span>Personal info</span>
        </p>
      </div>

      <div className={styles.prompt}>
        <h2>Register Individual Account!</h2>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
      </div>
      <div className={styles.formArea}>
        <Formik
          initialValues={{
            fullName: signUpData.fullName || "",
            email: signUpData.email || "",
            password: signUpData.password || "",
            confirmPassword: signUpData.confirmPassword || "",
            hasAgreedToTerms: false,
          }}
          validationSchema={signUpPersonalInfoSchema}
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
                  <label htmlFor="fullName">Your full name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="eg John Doe"
                    value={values.fullName}
                    onChange={handleChange}
                  />
                  <span>{touched.fullName && errors.fullName} </span>
                </p>

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

                <p className={styles.passwordField}>
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type={!viewConfirmPassword ? "password" : "text"}
                    name="confirmPassword"
                    placeholder="confirm password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <span>
                    {touched.confirmPassword && errors.confirmPassword}{" "}
                  </span>
                  <button
                    type="button"
                    tabIndex={0}
                    onClick={() => setViewConfirmPassword((x) => !x)}
                  >
                    {!viewConfirmPassword ? (
                      <img src={OpenEyeIcon} alt="view confirm password text" />
                    ) : (
                      <img
                        src={ClosedEyeIcon}
                        alt="Hide confirm password text"
                      />
                    )}
                  </button>
                </p>

                <p>
                  {/* checkbox para */}
                  <input
                    type="checkbox"
                    className={"pointer-cursor"}
                    checked={values.hasAgreedToTerms}
                    style={{
                      outline:
                        touched.hasAgreedToTerms && errors.hasAgreedToTerms
                          ? "1px solid red"
                          : "none",
                      outlineOffset: "2px",
                    }}
                    onChange={() =>
                      setFieldValue(
                        "hasAgreedToTerms",
                        !values.hasAgreedToTerms
                      )
                    }
                  />
                  <span>I agree to terms & conditions</span>
                </p>

                <AsyncButton
                  handleSubmit={handleSubmit}
                  isAsync={isSubmitting}
                  asyncText="Processing..."
                  normalText="Register Account"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
