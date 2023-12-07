import React, { useState } from "react";
import styles from "./product.module.scss";
import { I_Product } from "../../../typescript/interfaces";
import { Icon } from "@iconify/react";
import { CartIcon, StarIcon, TickIcon } from "../../../shared/assets";
import { Link } from "react-router-dom";
import { E_pages } from "../../../typescript/enums";
import { StarsRating } from "../starsRating/starsRating";
export const Product = ({
  ratingsAverage,
  discountedPrice,
  ratingsNumber,
  price,
  colors,
  sizes,
  shortDescription,
  imgUrl,
  name,
  slug,
  category,
}: I_Product) => {
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setAddedToCart(true);
      setIsAddingToCart(false);
      // TODO get status of added to cart from api
    }, 300);
  };

  return (
    <div className={styles.container}>
      <Link to={"/" + category + "/" + slug} className={styles.product}>
        <img src={imgUrl} alt={name} />
        <div className={styles.name}>
          <h3>{name}</h3>
        </div>
        <p className={styles.shortDescription}>{shortDescription}</p>
        <p className={styles.category}>
          <span>{category}</span>
        </p>
        <p className={styles.prices}>
          {discountedPrice && <span>₦{discountedPrice}</span>}
          <span>₦{price}</span>
        </p>

        <p className={styles.ratings}>
          <StarIcon />
          <span>{ratingsAverage}</span>
          <span>({ratingsNumber})</span>
        </p>
      </Link>

      {/*
      
      
      TODO might add this feature late on to enable me add item to cart without going to product detailed page 
      <button
        className={`${styles.cartBtn} ${
          isAddingToCart ? styles.isAddingToCart : ""
        } ${addedToCart ? styles.addedToCart : ""}`}
        onClick={handleAddToCart}
      >
        {isAddingToCart ? (
          <Icon icon="fontisto:spinner-rotate-forward" />
        ) : addedToCart ? (
          <TickIcon />
        ) : (
          <CartIcon />
        )}
      </button> */}
    </div>
  );
};
