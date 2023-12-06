import React from "react";
import styles from "./userDashboardNav.module.scss";
import { Link } from "react-router-dom";
import { E_Hidden, E_pages } from "../../../typescript/enums";
import {
  ArewaCentralPNG,
  ArewaCentralWEBP,
  CarIcon,
  SearchIcon,
  CartIcon,
  ProfileIcon,
  LoginIcon,
} from "../../../shared/assets";

export function UserDashboardNav() {
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

      <div className={styles.nav__ctas}>
        {isLoggedIn ? (
          <button>
            <ProfileIcon />
            <span>Account</span>{" "}
          </button>
        ) : (
          <button>
            <LoginIcon />
            <span>Sign in</span>{" "}
          </button>
        )}

        <button>
          <CartIcon />
          <span>Cart</span>{" "}
        </button>
      </div>
    </nav>
  );
}
