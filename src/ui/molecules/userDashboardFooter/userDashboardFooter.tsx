import React from "react";
import styles from "./userDashboardFooter.module.scss";
import { E_pages } from "../../../typescript/enums";
import { Link } from "react-router-dom";
import { ArewaCentralPNG, ArewaCentralWEBP } from "../../../shared/assets";
export function UserDashboardFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Link to={E_pages.signup}>Register Business</Link>
          <Link to={E_pages.about}>About Us</Link>
          <Link to={E_pages.contact}>Contact Us</Link>
        </div>
        <div>
          <Link to={E_pages.investors}>Investors </Link>
          <Link to={E_pages.careers}>Careers </Link>
        </div>
        <div>
          <Link to={E_pages.terms}>Terms </Link>
          <Link to={E_pages.privacy_policy}>Privacy Policy </Link>
          <Link to={E_pages.help}>Help </Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link to="/">
          <picture>
            <source srcSet={ArewaCentralWEBP} type="image/webp" />
            <img src={ArewaCentralPNG} alt="Arewa Central " />
          </picture>
          <h2>Arewa Central</h2>
        </Link>
      </div>
    </div>
  );
}
