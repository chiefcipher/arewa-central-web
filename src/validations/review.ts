import * as yup from "yup";

export const createReviewSchema = yup.object().shape({
  reviewRating: yup
    .string()
    .required("Rating is required")
    .max(5, "Rating cannot be more than 5")
    .min(0, "Rating cannot be less than 0"),
  reviewTitle: yup.string().required("Title is required"),
  reviewContent: yup.string().required("Content is required"),
});
