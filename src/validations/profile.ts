import * as yup from "yup";

export const updateBankInfoSchema = yup.object().shape({
  bankCode: yup.string().required("Select Bank"),
  accountNumber: yup
    .string()
    .required("Enter account number")
    .min(10, "Must be at least 10 characters"),
});
