import React from "react";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../atoms/sectionHeaders/sectionHeaders";
import styles from "./checkout.module.scss";
import { Link } from "react-router-dom";
import { E_Pages } from "../../../typescript/enums";
import { CardsPaymentMethod } from "../../../shared/assets";
import { Icon } from "@iconify/react";
export const Checkout: React.FC = () => {
  return (
    <div className={styles.checkout}>
      <SectionHeader>Checkout</SectionHeader>
      <div className={styles.wrapper}>
        <div className={styles.orderSummary}>
          <SubSectionHeader>Order Summary</SubSectionHeader>

          <p>
            <span>Items(7): </span> <span>₦ 278,200.00</span>
          </p>
          <p>
            <span>Delivery fees: </span> <span>Free</span>
          </p>
          <p>
            <span>Total: </span> <span>₦ 278,200.00</span>
          </p>
        </div>
        <div className={styles.customerDetails}>
          <SubSectionHeader>Customer Details</SubSectionHeader>
          <p>
            <span>Name </span> <span>Yakubu Samuel</span>
          </p>
          <p>
            <span>Address </span>
            <span>
              20 Kaduna, Kaduna, Kaduna. 0 Kaduna, Kaduna, Kaduna. Kaduna,
              Kaduna, Kaduna. 0 Kaduna, Kaduna, Kaduna.{" "}
            </span>
            <Link to={E_Pages.profile}> Edit</Link>
          </p>
          <p>
            <span>Tel </span>
            <span>+2349075859285 </span>
            <Link to={E_Pages.profile}>Edit</Link>
          </p>
          <p>
            <span>Email: </span>
            <span>test@gmail.com </span>
            <Link to={E_Pages.profile}>Edit</Link>
          </p>
        </div>
        <div className={styles.paymentMethod}>
          <SubSectionHeader>Payment Method</SubSectionHeader>
          <img src={CardsPaymentMethod} alt="Card" />
          <button>
            <Icon icon="solar:hand-money-line-duotone" />

            <span>Process Payment</span>
          </button>
          {/* TODO AFTER THEY MAKE PAYMENT THEY GET AN ORDER ID WHICH THEY CAN NOW SEE IN THEIR LIST OF ORDERS  */}
        </div>

        <div className={styles.deliveryInfo}>
          <SubSectionHeader>Delivery Information</SubSectionHeader>
          <p>
            <span>Delivery Method: Weigh Billed</span>
            <br />
            <br />
            Kindly keep your contact details accessible, your order would be
            placed immediately after payment and can be tracked in the{" "}
            <Link to={E_Pages.orders}>Orders</Link> page. You will be contacted
            via call and email with the contact details of who to get your item
            from after arrival in your chosen state of residence.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};
