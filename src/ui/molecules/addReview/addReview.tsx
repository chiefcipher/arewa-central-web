import React from "react";
import { Backdrop } from "../../atoms/backdrop/backdrop";
import { useNavigate } from "react-router";
import styles from "./addReview.module.scss";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { AsyncButton } from "../../atoms/asyncButton/asyncButton";
import { Icon } from "@iconify/react";
import { createReviewSchema } from "../../../validations/review";
export function AddReview() {
  const navigate = useNavigate();
  return (
    <Backdrop>
      <div className={styles.addReview}>
        <div className={styles.header}>
          <h2>Write your review</h2>
          <Link to="../">
            <Icon icon="ic:round-close" />
          </Link>
        </div>
        <h3>
          You reviewed this product already{" "}
          <Link to="../edit-review">Edit it</Link>
        </h3>

        <Formik
          initialValues={{
            reviewTitle: "",
            reviewRating: "",
            reviewContent: "",
          }}
          // TODO Edit review and user already created review ui
          validationSchema={createReviewSchema}
          onSubmit={(v) => {
            console.log(v);
          }}
        >
          {({ handleChange, errors, touched, isSubmitting, handleSubmit }) => (
            <Form>
              <p>
                <label htmlFor="reviewTitle">Review Title</label>
                <input
                  type="text"
                  name="reviewTitle"
                  placeholder="Nice shoe"
                  onChange={handleChange}
                />
                <span>{touched.reviewTitle && errors.reviewTitle}</span>
              </p>

              <p>
                <label htmlFor="reviewRating">Review Rating</label>
                <input
                  type="text"
                  name="reviewRating"
                  placeholder="4.6"
                  onChange={handleChange}
                />
                <span>{touched.reviewRating && errors.reviewRating}</span>
              </p>
              <p>
                <label htmlFor="reviewContent">Review Content</label>
                <input
                  type="text"
                  name="reviewContent"
                  placeholder="A nice shoe"
                  onChange={handleChange}
                />
                <span>{touched.reviewContent && errors.reviewContent}</span>
              </p>
              <p>
                <AsyncButton
                  isAsync={isSubmitting}
                  asyncText={"Adding..."}
                  normalText={"Add Review"}
                  handleSubmit={handleSubmit}
                />
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </Backdrop>
  );
}
