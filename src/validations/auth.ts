import * as yup from "yup";

export const signUpPersonalInfoSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "a minimum of  3 letters"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  password: yup
    .string()
    .required("Enter password")
    .min(8, "Must be at least 8 characters")
    .max(50, "Maximum of 50 characters"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null] as Array<string | yup.Reference<unknown>>,
      "Passwords must match"
    )
    .required("Confirm Password is required"),

  hasAgreedToTerms: yup
    .boolean()
    .test("has-agreed", "kindly agree to terms", (v) => {
      return v === true;
    }),
});

export const signUpResidencyInfoSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});

export const loginSchema = yup.object({
  email: yup.string().email("Enter valid email").required("Email is required"),
  password: yup
    .string()
    .required("Enter password")
    .min(8, "Must be at least 8 characters")
    .max(50, "Maximum of 50 characters"),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().email("Enter valid email").required("Email is required"),
});
