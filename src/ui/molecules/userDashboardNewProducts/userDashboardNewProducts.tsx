import React from "react";
import styles from "./userDashboardNewProducts.module.scss";
import { Product } from "../../atoms/product/product";
import { I_Product } from "../../../typescript/interfaces";
import { SampleProductImage } from "../../../shared/assets";
const sampleProductData: I_Product = {
  ratingsAverage: 4.6,
  ratingsNumber: 2000,
  price: 400,
  colors: ["red", "green", "blue"],
  name: "Nike sweater and cap",
  category: "clothes",
  imgUrl: SampleProductImage,
  shortDescription: "A cool cap and sweater for the summer",
  slug: "nike-sweater-and-cap",
};
export function UserDashboardNewProducts() {
  const sampleProducts: Array<I_Product> = Array.from({ length: 12 }).map(
    (data, i) => ({
      ...sampleProductData,
      discountedPrice: i % 2 ? 200 : undefined,
    })
  );
  return (
    <div className={styles.products}>
      <h2 tabIndex={0} className={styles.header}>
        New Products
      </h2>
      <div className={styles.main}>
        {sampleProducts.map((el, i) => (
          <Product key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
