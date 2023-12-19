import React from "react";
import styles from "./userDashboardFooter.module.scss";
import { E_Pages } from "../../../typescript/enums";
import { Link } from "react-router-dom";
import { ArewaCentralPNG, ArewaCentralWEBP } from "../../../shared/assets";
export function UserDashboardFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Link to={E_Pages.signup}>Register Business</Link>
          <Link to={E_Pages.about}>About Us</Link>
          <Link to={E_Pages.contact}>Contact Us</Link>
        </div>
        <div>
          <Link to={E_Pages.investors}>Investors </Link>
          <Link to={E_Pages.careers}>Careers </Link>
        </div>
        <div>
          <Link to={E_Pages.terms}>Terms </Link>
          <Link to={E_Pages.privacy_policy}>Privacy Policy </Link>
          <Link to={E_Pages.help}>Help </Link>
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
