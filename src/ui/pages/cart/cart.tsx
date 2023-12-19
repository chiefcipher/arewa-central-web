import React from "react";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../atoms/sectionHeaders/sectionHeaders";
import styles from "./cart.module.scss";
import { sampleProduct } from "../../../shared/sampleProduct";
import { Link } from "react-router-dom";
import { CartItem } from "../../atoms/cartItem/cartItem";
import { Icon } from "@iconify/react";
import { E_Pages } from "../../../typescript/enums";
export function Cart() {
  const sampleCartItems = [sampleProduct, sampleProduct, sampleProduct];
  const total = 90000;
  // todo total and smaple items comes from api
  return (
    <div className={styles.cart}>
      <SubSectionHeader>Items added to cart</SubSectionHeader>
      <SectionHeader>Cart Items ({sampleCartItems.length})</SectionHeader>
      <div className={styles.totalWrapper}>
        <p>
          {" "}
          <span>Total: </span> <span>₦ {total}</span>{" "}
        </p>
        <Link to={E_Pages.checkout} className={styles.checkoutBtn}>
          <Icon icon="carbon:wireless-checkout" />
          <span>Checkout</span>
        </Link>
      </div>
      <div className={styles.container}>
        {sampleCartItems.map((cartItem, i) => (
          <CartItem {...cartItem} key={i} />
        ))}
      </div>
    </div>
  );
}
