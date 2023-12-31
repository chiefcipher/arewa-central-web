import React from "react";
import styles from "./authLayout.module.scss";
import LeftSideImg from "./leftSideImg.svg";
import { ArewaCentralPNG, ArewaCentralWEBP } from "../../../shared/assets";
import { Link, Outlet } from "react-router-dom";
/* layout component for signup and login pages */
export function AuthLayout() {
  return (
    <div className={styles.authLayout}>
      <div className={styles.left_side}>
        <Link to="/">
          {/* header  */}
          <picture>
            <source srcSet={ArewaCentralWEBP} type="image/webp" />
            <img src={ArewaCentralPNG} alt="Arewa Central " />
          </picture>
          <p>Arewa-Central</p>
        </Link>
        <div>
          <img src={LeftSideImg} alt="Sign up" />
        </div>
      </div>
      <div className={styles.right_side}>
        <Outlet />
      </div>
    </div>
  );
}
