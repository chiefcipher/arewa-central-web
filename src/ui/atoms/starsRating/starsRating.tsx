import React from "react";
import styles from "./starsRating.module.scss";

export const StarsRating = ({
  ratingValue,
  sizeOfStar,
}: {
  ratingValue: number;
  sizeOfStar: number;
}) => {
  const starStyle = {
    width: sizeOfStar + "px",
    height: sizeOfStar + "px",
  };
  return (
    <div className={styles.starsWrapper}>
      {Array(Math.floor(ratingValue))
        .fill("a")
        .map((el, i) => (
          <div className={styles.star} key={i} style={starStyle}>
            <div
              className={styles.starOverlay}
              style={{
                width: (1 / 1) * 100 + "%",
              }}
            ></div>
          </div>
        ))}
      <div className={styles.star} style={starStyle}>
        {/* decimal point star  */}
        <div
          className={styles.starOverlay}
          style={{
            width: ((ratingValue % Math.floor(ratingValue)) / 1) * 100 + "%",
          }}
        ></div>
      </div>

      {Array(5 - Math.ceil(ratingValue))
        .fill("a")
        .map((el, i) => (
          <div
            key={i}
            style={starStyle}
            className={`${styles.star} ${styles.noValueStar}`}
          ></div>
        ))}
    </div>
  );
};
