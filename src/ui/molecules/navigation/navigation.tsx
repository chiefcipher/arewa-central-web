import React, { useState } from "react";
import styles from "./navigation.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { E_Hidden, E_Pages } from "../../../typescript/enums";
import {
  ArewaCentralPNG,
  ArewaCentralWEBP,
  SearchIcon,
  CartIcon,
  ProfileIcon,
  LoginIcon,
  CarIcon,
  NotificationIcon,
} from "../../../shared/assets";
import { Icon } from "@iconify/react";

export function Navigation() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem(E_Hidden.tokenName) || "some text";
  const handleLinkClick = () => {
    // close nav
    if (showMobileNav) setShowMobileNav(false);
  };
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
          <>
            <button
              className={styles.nav__ctaBtn}
              onClick={() => navigate(E_Pages.profile)}
            >
              <ProfileIcon />
              <span>Account</span>{" "}
            </button>
            <button
              className={styles.nav__ctaBtn}
              onClick={() => navigate(E_Pages.orders)}
            >
              <CarIcon />
              <span>Orders</span>{" "}
            </button>
            <button
              className={styles.nav__ctaBtn}
              onClick={() => navigate(E_Pages.notification)}
            >
              <NotificationIcon /> <span>Notifications</span>{" "}
            </button>
            <button
              className={styles.nav__ctaBtn}
              onClick={() => navigate(E_Pages.cart)}
            >
              <CartIcon />
              <span>Cart</span>{" "}
            </button>
          </>
        ) : (
          <button
            className={styles.authBtn}
            onClick={() => navigate(E_Pages.login)}
          >
            <LoginIcon />
            <span>Sign in</span>{" "}
          </button>
        )}

        <p className={styles.linksOnMobile}>
          {/* the below button only shows on mobile view  */}
          <button
            className={styles.closeMobileBtn}
            onClick={() => setShowMobileNav(false)}
          >
            <Icon icon={"zondicons:close-solid"} />
          </button>
          <Link to={E_Pages.signup} onClick={handleLinkClick}>
            Register{" "}
          </Link>
          {/* <Link to={E_Pages.about}>About Us</Link>
          <Link to={E_Pages.contact}>Contact Us</Link>
          <Link to={E_Pages.investors}>Investors </Link>
          <Link to={E_Pages.careers}>Careers </Link>
          <Link to={E_Pages.terms}>Terms </Link>
          <Link to={E_Pages.privacy_policy}>Privacy Policy </Link>
          <Link to={E_Pages.help}>Help </Link> */}
          <Link to={E_Pages.orders} onClick={handleLinkClick}>
            Orders
          </Link>
          <Link to={E_Pages.login} onClick={handleLinkClick}>
            Login
          </Link>
          <Link to={E_Pages.profile} onClick={handleLinkClick}>
            Account
          </Link>
          <Link to={E_Pages.cart} onClick={handleLinkClick}>
            Cart
          </Link>
          <Link to={E_Pages.notification} onClick={handleLinkClick}>
            Notification{" "}
          </Link>
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
