import React from "react";
import { Backdrop } from "../../atoms/backdrop/backdrop";
import styles from "./viewAllReviews.module.scss";
import { I_Review } from "../../../typescript/interfaces";
import { Review } from "../../atoms/review/review";
import { Link } from "react-router-dom";
const sampleReview: I_Review = {
  reviewerName: "John Doe",
  reviewContent: `I have an HP computer and added the ram to increase it
  from 8 gb to 16gb. It's an older PC and so it needed older
  ram for compatibility. This ram is not cheap, but the
  price was fair. It was delivered and`,
  reviewTitle: "A nice shoe",
  rating: 4.5,
  date: Date.now(),
};
export function AllReviews() {
  return (
    <Backdrop>
      <div className={styles.reviews}>
        <div className={styles.header}>
          <h2>All Reviews</h2>
          <Link to="../">&lt; Go Back</Link>
        </div>
        <div className={styles.container}>
          {Array(20)
            .fill("a")
            .map((el, i) => (
              <Review key={i} {...sampleReview} />
            ))}
        </div>
        <div className={styles.footer}>
          {/* TODO MAKE THE REVIEWS COME 10 BY 10 THEN HAVE A BUTTON FOR VIEW MORE THAT KEEPS ADDING TO IT AT THE BOTTOM  */}
          <Link to="../">&lt; Go Back</Link>
        </div>
      </div>
    </Backdrop>
  );
}
