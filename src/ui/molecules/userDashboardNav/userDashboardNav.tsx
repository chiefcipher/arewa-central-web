import React, { useState } from "react";
import styles from "./userDashboardNav.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { E_Hidden, E_pages } from "../../../typescript/enums";
import {
  ArewaCentralPNG,
  ArewaCentralWEBP,
  SearchIcon,
  CartIcon,
  ProfileIcon,
  LoginIcon,
} from "../../../shared/assets";
import { Icon } from "@iconify/react";

export function UserDashboardNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem(E_Hidden.tokenName) || "some text";
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link to="/">
          <picture>
            <source srcSet={ArewaCentralWEBP} type="image/webp" />
            <img src={ArewaCentralPNG} alt="Arewa Central " />
          </picture>
          <h2>Arewa Central</h2>
        </Link>
      </div>

      <div className={styles.nav__searchArea}>
        <p>
          <input
            type="text"
            placeholder="search products, categories, brands"
          />
          <SearchIcon />
          <button>Search</button>
        </p>
      </div>

      <div
        className={`${styles.nav__ctas} ${
          showMobileNav ? styles.isOnMobile : ""
        } `}
      >
        {isLoggedIn ? (
          <button className={styles.profileBtn}>
            <ProfileIcon />
            <span>Account</span>{" "}
          </button>
        ) : (
          <button className={styles.authBtn}>
            <LoginIcon />
            <span>Sign in</span>{" "}
          </button>
        )}
        <button
          className={styles.cartBtn}
          onClick={() => navigate(E_pages.cart)}
        >
          <CartIcon />
          <span>Cart</span>{" "}
        </button>
        <p className={styles.linksOnMobile}>
          {/* the below button only shows on mobile view  */}
          <button
            className={styles.closeMobileBtn}
            onClick={() => setShowMobileNav(false)}
          >
            <Icon icon={"zondicons:close-solid"} />
          </button>
          <Link to={E_pages.signup}>Register </Link>
          <Link to={E_pages.about}>About Us</Link>
          <Link to={E_pages.contact}>Contact Us</Link>
          <Link to={E_pages.investors}>Investors </Link>
          <Link to={E_pages.careers}>Careers </Link>
          <Link to={E_pages.terms}>Terms </Link>
          <Link to={E_pages.privacy_policy}>Privacy Policy </Link>
          <Link to={E_pages.help}>Help </Link>
          <Link to={E_pages.login}>Login </Link>
          <Link to={E_pages.profile}>Account </Link>
          <Link to={E_pages.cart}>Cart </Link>
        </p>
      </div>
      <button
        className={styles.openNavBtn}
        onClick={() => setShowMobileNav(true)}
      >
        <Icon icon={"ic:round-menu-open"} />
      </button>
    </nav>
  );
}
