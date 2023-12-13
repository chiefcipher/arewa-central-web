import React from "react";
import styles from "./review.module.scss";
import { Icon } from "@iconify/react";
import { StarsRating } from "../starsRating/starsRating";
import { I_Review } from "../../../typescript/interfaces";
export function Review(data: I_Review) {
  const formatDate = (a: number) => {
    return `${new Date(a).getDate()} ${new Date(a).toLocaleString("en-US", {
      month: "short",
    })}, ${new Date(a).getFullYear()}`;
  };
  return (
    <div className={styles.review}>
      <div className={styles.reviewerProfile}>
        <Icon icon="iconamoon:profile-circle-light" />
        <span>{data.reviewerName}</span>
      </div>

      <h4>{data.reviewTitle}</h4>
      {/* h5 is review title  */}

      <div className={styles.reviewContent}>
        <h6>{data.rating}</h6>
        <StarsRating ratingValue={4.3} sizeOfStar={18} />
        <p>{data.reviewContent}</p>
      </div>
      <h5>{formatDate(data.date)}</h5>
    </div>
  );
}
