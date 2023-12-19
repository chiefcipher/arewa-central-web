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
            {/* TODO ADD PROMPT THAT THEY SHOULD KEEP 
            THEIR PHONES ON AND EMAIL ACCESSIBLE AS THEY WILL BE 
            MESSAGED AND CALLED AFTER THEIR ORDER HAS BEEN WEIGHBILLED 
            DOWN TO THEIR STATE THEY WILL ALSO BE SENT THE CONTACT NUMBER 
            FOR THEM TO GO COLLECT THEIR STUFF 
            
            they can also track  their order at the /orders page */}
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
      </div>
    </div>
  );
};
