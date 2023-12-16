import React from "react";
import styles from "./userDashboardHighestRatedProducts.module.scss";
import { Product } from "../../atoms/product/product";
import { I_Product } from "../../../typescript/interfaces";
import { sampleProduct } from "../../../shared/sampleProduct";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../atoms/sectionHeaders/sectionHeaders";

export function UserDashboardHighestRatedProducts() {
  const sampleProducts: Array<I_Product> = Array.from({ length: 12 }).map(
    (data, i) => ({
      ...sampleProduct,
      discountedPrice: i % 2 ? 200 : undefined,
    })
  );
  return (
    <div className={styles.products}>
      <SubSectionHeader>Our products with the highest ratings</SubSectionHeader>
      <SectionHeader>Highest Rated Products</SectionHeader>
      <div className={styles.main}>
        {sampleProducts.map((el, i) => (
          <Product key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
