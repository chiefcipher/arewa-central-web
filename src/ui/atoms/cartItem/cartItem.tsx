import React from "react";
import styles from "./cartItem.module.scss";
import { I_Product } from "../../../typescript/interfaces";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { copyToClipboard } from "../../../typescript/utils";

export const CartItem: React.FC<I_Product> = ({
  imgUrl,
  name,
  price,
  shortDescription,
  quantityInCart,
  selectedColor,
  selectedSize,
  discountedPrice,
  category,
  slug,
}) => {
  const [productQuantity, setProductQuantity] = React.useState(1);
  // TODO, IT WILL BE AN API THAT UPDATES PRODUCT QUANTITY field which is quantityInCart
  const [hasCopiedLink, setHasCopiedLink] = React.useState(false);
  const handleShare = () => {
    const url = `${window.location.protocol}//${window.location.host}/${category}/${slug}`;
    copyToClipboard(url);
    setHasCopiedLink(true);
    setTimeout(() => {
      setHasCopiedLink(false);
    }, 3000);
  };

  const subtotal = discountedPrice
    ? (discountedPrice as number) * productQuantity
    : (price as number) * productQuantity;
  // todo replace product quantity with quantityincart field from I_product
  console.log({ discountedPrice, price, productQuantity }, subtotal);

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgPart}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.textPart}>
        <div>
          {/* name and description */}
          <h1>
            <Link to={"/" + category + "/" + slug}>{name}</Link>
          </h1>
          <p>{shortDescription}</p>
        </div>
        <div>
          {/* color and size div  */}
          {/* red and cm should be selected color and size  */}
          {"red" && (
            <p className={styles.colorPara}>
              <span>Color:</span>
              <span style={{ backgroundColor: "red" }}></span>
            </p>
          )}
          {"cm" && (
            <p className={styles.sizePara}>
              <span>Size:</span>
              <span>CM</span>
            </p>
          )}
        </div>
        <div>
          <button>
            <span>Delete</span>
          </button>

          <button onClick={handleShare} disabled={hasCopiedLink}>
            <span>{!hasCopiedLink ? "Copy link" : "Copied"}</span>
          </button>
        </div>
      </div>
      <div className={styles.priceAndQuantity}>
        <div className={styles.prices}>
          <p>
            {discountedPrice && <span>₦ {discountedPrice}</span>}
            <span>₦ {price}</span>
          </p>
        </div>
        <div className={styles.quantity}>
          {/* input part */}
          <button
            onClick={() => setProductQuantity((x) => (x > 1 ? x - 1 : x))}
          >
            <span>-</span>
          </button>
          <input
            value={productQuantity}
            type="number"
            onChange={(e) =>
              setProductQuantity((x) =>
                Number(e.target.value) > 0
                  ? Math.floor(Number(e.target.value))
                  : x
              )
            }
          />
          <button onClick={() => setProductQuantity((x) => x + 1)}>
            <span>+</span>
          </button>

          {/* <button className={styles.updateBtn}>Update</button> */}
        </div>
        <div className={styles.subTotal}>
          <span>Sub Total: </span>
          <span>₦ {subtotal}</span>
        </div>
      </div>
    </div>
  );
};
