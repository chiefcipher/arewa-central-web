import React from "react";
import styles from "./userDashboardTop.module.scss";
import { Link } from "react-router-dom";
import { E_Pages } from "../../../typescript/enums";
import { CarIcon } from "../../../shared/assets";

export function UserDashboardTop() {
  return (
    <div className={styles.top}>
      <p>
        Need help? Call us on <a href="tel:+2349075859285">+2349075859285</a>
      </p>
      <Link to={E_Pages.trackOrder}>
        <CarIcon />
        <span>Track your order</span>
      </Link>
    </div>
  );
}
