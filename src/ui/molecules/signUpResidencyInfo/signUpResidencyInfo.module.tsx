import React, { useContext, useEffect, useState } from "react";
import styles from "./signUpResidencyInfo.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { SignUpContext } from "../../pages/signUp/signUpContext";
import { Formik, Form } from "formik";
import { AsyncButton } from "../../atoms/asyncButton/asyncButton";
import { signUpResidencyInfoSchema } from "../../../validations/auth";

import { LeftArrowSvg } from "../../../shared/assets";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countries from "../../../shared/countries";

export function SignUpResidencyInfo() {
  const { signUpData, setSignUpData } = useContext(SignUpContext);

  // check if user has filled form two
  useEffect(() => {
    const hasFilledFormOne = signUpData.role.length > 0;
    const hasFilledPersonalInfoForm =
      signUpData.email &&
      signUpData.fullName &&
      signUpData.password &&
      signUpData.hasAgreedToTerms;
    if (!hasFilledFormOne) return navigate("../");
    if (!hasFilledPersonalInfoForm) return navigate("../personal-info");
  });
  const navigate = useNavigate();
  const handleSubmit = (values: any, actions: any) => {
    const api_data = { ...signUpData, ...values };
    console.log(api_data);
    actions.setSubmitting(false);

    // navigate("../residency-info");
  };
  return (
    <div className={styles.residencyInfo}>
      <div className={styles.header}>
        <Link to="../personal-info">
          <img src={LeftArrowSvg} alt="Go back" />
          <span>Go Back</span>
        </Link>
        <p>
          <span>STEP 03/03</span>
          <span>Residency Info</span>
        </p>
      </div>

      <div className={styles.prompt}>
        <h2>Complete your profile!</h2>
        <p>
          For the purpose of industry regulation, your details are required.{" "}
        </p>
      </div>
      <div className={styles.formArea}>
        <Formik
          initialValues={{
            country: signUpData.country || "",
            address: signUpData.address || "",
            phoneNumber: signUpData.phoneNumber || "",
            state: signUpData.state || "",
          }}
          validationSchema={signUpResidencyInfoSchema}
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
                <div>
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={values.phoneNumber}
                    onChange={(v: string) => setFieldValue("phoneNumber", v)}
                    defaultCountry={"NG"}
                  />

                  <span>{touched.phoneNumber && errors.phoneNumber} </span>
                </div>

                <div>
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="eg 14 New Ave"
                    value={values.address}
                    onChange={handleChange}
                  />
                  <span>{touched.address && errors.address} </span>
                </div>

                <div>
                  <label htmlFor="state">State/Province *</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="eg Lagos"
                    value={values.state}
                    onChange={handleChange}
                  />
                  <span>{touched.state && errors.state} </span>
                </div>
                <div>
                  <label htmlFor="country">Country of Residence *</label>

                  <select
                    onChange={(v) => setFieldValue("country", v.target.value)}
                    value={values.country}
                  >
                    <option value="">Select</option>
                    {countries.map((country) => (
                      <option value={country.name} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <span>{touched.country && errors.country} </span>
                </div>

                <AsyncButton
                  handleSubmit={handleSubmit}
                  isAsync={isSubmitting}
                  asyncText="Processing..."
                  normalText="Complete Rgistration"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
