import React, { useRef, useState } from "react";
import styles from "./profile.module.scss";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../atoms/sectionHeaders/sectionHeaders";

import { I_FormMessage, I_Profile } from "../../../typescript/interfaces";
import { Icon } from "@iconify/react";
import { Form, Formik } from "formik";
import {
  profileUpdateSchema,
  updatePasswordSchema,
} from "../../../validations/auth";
import { FormMessage } from "../../atoms/formMessage/formMessage";
import { NigerianStates } from "../../../shared/NigerianStates";
import { updateBankInfoSchema } from "../../../validations/profile";
import { NigerianBanks } from "../../../shared/assets/NigerianBanks";
import { Seo } from "../../atoms/seo/seo";

export function Profile(): React.ReactElement {
  const fileInputRef = useRef(null);
  const [imageUploadStatus, setImageUploadStatus] = useState<
    "uploading" | "uploaded" | "select-image"
  >("select-image");

  const [passwordUpdateStatus, setPasswordUpdateStatus] = useState<
    "updated" | "not-updated"
  >("not-updated");
  const [bankInfoUpdateStatus, setBankInfoUpdateStatus] = useState<
    "updated" | "not-updated"
  >("not-updated");

  const [userProfile, setUserProfile] = useState<I_Profile>({
    firstName: "John",
    phoneNumber: "234905858558",
    email: "testemail@gmail.com",
    lastName: "",
    residentState: "",
    address: "",
    imgUrl: "",
    isVerified: true,
    bankDetails: {
      bankName: "",
      accountNumber: "",
    },
  });
  const [verificationMailStatus, setVerificationMailStatus] = useState<
    "sending" | "not-sent" | "sent"
  >("not-sent");
  const [hasEditedProfile, setHasEditedProfile] = useState<boolean>(false);
  const [formMessage, setFormMessage] = useState<I_FormMessage>({
    type: "",
    content: "Edit to make changes",
  });
  const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>("");
  // todo make profile image come from api
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target && event.target.files && event.target.files[0];

    const maxFileSizeInBytes = 1 * 1024 * 1024; // 1MB
    if (!file) return;
    if (file && file.size > maxFileSizeInBytes) {
      setProfileImg("");
      return alert("File too large, pick another less than 1MB");
    }
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const fileExtUppercase = file.name.split(".").pop();

    if (
      !fileExtUppercase ||
      !allowedExtensions.includes(fileExtUppercase.toLocaleLowerCase())
    )
      return alert("Kindly select a valid file (.jpg, .png or .jpeg)");

    {
      // read file
      const reader = new FileReader();
      reader.onloadend = () => {
        // The result is a data URL representing the image
        const imageDataUrl = reader.result;
        setProfileImg(imageDataUrl);
        handleImageUpload(imageDataUrl as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (imgStr: string) => {
    setImageUploadStatus("uploading");
    setTimeout(() => {
      console.log({ imgStr });
      setImageUploadStatus("uploaded");
    }, 3000);
  };
  const handleProfileUpdateSubmit = (values: any, actions: any) => {
    console.log(values);
    actions.setSubmitting(true);
    setTimeout(() => {
      actions.setSubmitting(false);
      setFormMessage({ type: "success", content: "Updated Successfully" });
    }, 3000);
  };

  const sendVerificationMail = () => {
    setVerificationMailStatus("sending");
    setTimeout(() => {
      setVerificationMailStatus("sent");
    }, 3000);
  };
  // updates password
  const handlePasswordUpdate = (values: any, actions: any) => {
    setTimeout(() => {
      console.log(values);
      setPasswordUpdateStatus("updated");
      actions.setSubmitting(false);
    }, 3000);
  };

  // updates bank info
  const handleBankInfoUpdate = (values: any, actions: any) => {
    setTimeout(() => {
      console.log(values);
      setBankInfoUpdateStatus("updated");
      actions.setSubmitting(false);
    }, 3000);
  };
  const handleBlur = () =>
    !hasEditedProfile ? setHasEditedProfile(true) : null;
  return (
    <div className={styles.profile}>
      <Seo title="Profile" description="User profile" />
      <SectionHeader>Profile </SectionHeader>

      <div className={styles.wrapper}>
        {/* profile details */}
        <div className={styles.profileDetails}>
          <SubSectionHeader>Profile Details</SubSectionHeader>
          <p className={styles.promptPara}>
            Edit to update profile information
          </p>
          <Formik
            initialValues={userProfile}
            onSubmit={handleProfileUpdateSubmit}
            validationSchema={profileUpdateSchema}
          >
            {({ values, touched, handleChange, errors, isSubmitting }) => (
              <Form>
                <p>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name={"email"}
                    defaultValue={values.email}
                    readOnly
                  />

                  {values.isVerified ? (
                    <span className={styles.verifiedEmail}>Verified</span>
                  ) : (
                    <>
                      <span>Not Verified</span>
                      <button
                        type="button"
                        onClick={sendVerificationMail}
                        disabled={verificationMailStatus !== "not-sent"}
                      >
                        {verificationMailStatus === "sending" ? (
                          <>
                            <Icon icon="fa:spinner" className={"spinner"} />

                            <span>Processing...</span>
                          </>
                        ) : verificationMailStatus === "sent" ? (
                          <>
                            <Icon icon="charm:circle-tick" />
                            <span>Check Mail</span>
                          </>
                        ) : (
                          <>
                            <Icon icon="fluent:mail-20-filled" />
                            <span>Send mail</span>
                          </>
                        )}
                      </button>
                    </>
                  )}
                </p>
                <p>
                  <label htmlFor="tel">Contact No:</label>
                  <input
                    type="tel"
                    onBlur={handleBlur}
                    name={"phoneNumber"}
                    placeholder="234 1234567890"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <span>{touched.phoneNumber && errors.phoneNumber}</span>
                </p>
                <p>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    name={"firstName"}
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <span>{touched.firstName && errors.firstName}</span>
                </p>
                <p>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    name={"lastName"}
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  <span>{touched.lastName && errors.lastName}</span>
                </p>

                <p>
                  <label htmlFor="residentState">State of residence:</label>
                  <select
                    // onBlur={handleBlur}
                    onClick={handleBlur}
                    name={"residentState"}
                    value={values.residentState}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    {NigerianStates.map((state) => (
                      <option value={state} key={state}>
                        {state}
                      </option>
                    ))}
                  </select>

                  <span>{touched.residentState && errors.residentState}</span>
                </p>

                <p>
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    name={"address"}
                    value={values.address}
                    onChange={handleChange}
                  />
                  <span>{touched.address && errors.address}</span>
                </p>
                <div style={{ fontSize: "1rem" }}>
                  <FormMessage {...formMessage} />
                </div>
                {
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    title={
                      !hasEditedProfile
                        ? "Edit profile to enable this button"
                        : "Click to save changes"
                    }
                    disabled={isSubmitting || !hasEditedProfile}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon icon="fa:spinner" className={"spinner"} />
                        <span>Processing</span>
                      </>
                    ) : (
                      <>
                        <Icon icon="lets-icons:save-fill" />

                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                }
              </Form>
            )}
          </Formik>
        </div>
        {/*         image contianer  */}
        <div className={styles.imgContainer}>
          <SubSectionHeader>Profile Image</SubSectionHeader>
          <img
            src={profileImg as string}
            alt={`${userProfile.firstName} ${userProfile.lastName}`}
          />
          <p>
            Max File size: 1MB <br />
            Accepted Files: .png .jpeg .jpg
          </p>
          <button
            disabled={
              imageUploadStatus === "uploading" ||
              imageUploadStatus === "uploaded"
            }
            style={{
              color: imageUploadStatus === "uploaded" ? "green" : "#0d3f7a",
            }}
            onClick={() => {
              const node = fileInputRef.current as HTMLInputElement | null;
              if (node) node.click();
            }}
          >
            {imageUploadStatus === "uploading" ? (
              <>
                <Icon icon="fa:spinner" className={"spinner"} />
                <span>Uploading...</span>
              </>
            ) : imageUploadStatus === "uploaded" ? (
              <>
                <Icon icon="mdi:account-tick" />

                <span>Uploaded </span>
              </>
            ) : (
              <>
                <Icon icon="lets-icons:save-fill" />

                <span>Change Picture </span>
              </>
            )}
          </button>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            accept="image/*"
          />
        </div>

        {/* security  */}
        <div className={styles.security}>
          <SubSectionHeader>Security</SubSectionHeader>
          <p className={styles.promptPara}>
            Use this form to change your password{" "}
          </p>
          <div className={styles.formArea}>
            <Formik
              initialValues={{
                currentPassword: "",
                newPassword: "",
                newPasswordConfirm: "",
              }}
              validationSchema={updatePasswordSchema}
              onSubmit={handlePasswordUpdate}
            >
              {({ touched, values, errors, isSubmitting, handleChange }) => {
                return (
                  <Form>
                    <p>
                      <label htmlFor="currentPassword">
                        Current Password *
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        value={values.currentPassword}
                        onChange={handleChange}
                      />
                      <span>
                        {touched.currentPassword && errors.currentPassword}{" "}
                      </span>
                    </p>

                    <p>
                      <label htmlFor="newPassword">New Password *</label>
                      <input
                        type={"password"}
                        name="newPassword"
                        value={values.newPassword}
                        onChange={handleChange}
                      />
                      <span>{touched.newPassword && errors.newPassword} </span>
                    </p>
                    <p>
                      <label htmlFor="newPasswordConfirm">
                        New Password Confirm *
                      </label>
                      <input
                        type={"password"}
                        name="newPasswordConfirm"
                        value={values.newPasswordConfirm}
                        onChange={handleChange}
                      />
                      <span>
                        {touched.newPasswordConfirm &&
                          errors.newPasswordConfirm}{" "}
                      </span>
                    </p>

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      title={"Click to save changes"}
                      disabled={
                        isSubmitting || passwordUpdateStatus === "updated"
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <Icon icon="fa:spinner" className={"spinner"} />
                          <span>Updating...</span>
                        </>
                      ) : passwordUpdateStatus === "updated" ? (
                        <>
                          <Icon icon="mdi:account-tick" />

                          <span>Updated </span>
                        </>
                      ) : (
                        <>
                          <Icon icon="lets-icons:save-fill" />

                          <span>Update </span>
                        </>
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>

        {/* bank information  */}
        <div className={styles.bankDetails}>
          <SubSectionHeader>Bank Details </SubSectionHeader>
          <p className={styles.promptPara}>Edit to update bank information</p>
          <div className={styles.formArea}>
            <Formik
              initialValues={{
                bankCode: "00103",
                accountNumber: "",
              }}
              validationSchema={updateBankInfoSchema}
              onSubmit={handleBankInfoUpdate}
            >
              {({ touched, values, errors, isSubmitting, handleChange }) => {
                return (
                  <Form>
                    <p>
                      <label htmlFor="bankName">Bank Name *</label>

                      <select
                        // onBlur={handleBlur}
                        onClick={handleBlur}
                        name={"bankCode"}
                        value={values.bankCode}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        {NigerianBanks.map((bank) => (
                          <option value={bank.code} key={bank.name}>
                            {bank.name}
                          </option>
                        ))}
                      </select>
                      <span>{touched.bankCode && errors.bankCode} </span>
                    </p>

                    <p>
                      <label htmlFor="accountNumber">Account Number *</label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={values.accountNumber}
                        onChange={handleChange}
                      />
                      <span>
                        {touched.accountNumber && errors.accountNumber}{" "}
                      </span>
                    </p>

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      title={"Click to save changes"}
                      disabled={
                        isSubmitting || bankInfoUpdateStatus === "updated"
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <Icon icon="fa:spinner" className={"spinner"} />
                          <span>Updating...</span>
                        </>
                      ) : bankInfoUpdateStatus === "updated" ? (
                        <>
                          <Icon icon="mdi:account-tick" />

                          <span>Updated </span>
                        </>
                      ) : (
                        <>
                          <Icon icon="lets-icons:save-fill" />

                          <span>Update </span>
                        </>
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
