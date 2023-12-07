import React from "react";
import styles from "./userDashboardNewProducts.module.scss";
import { Product } from "../../atoms/product/product";
import { I_Product } from "../../../typescript/interfaces";
import { sampleProduct } from "../../../shared/sampleProduct";
export function UserDashboardNewProducts() {
  const sampleProducts: Array<I_Product> = Array.from({ length: 12 }).map(
    (data, i) => ({
      ...sampleProduct,
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
