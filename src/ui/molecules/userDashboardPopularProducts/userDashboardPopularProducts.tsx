import React from "react";
import styles from "./userDashboardPopularProducts.module.scss";
import { Product } from "../../atoms/product/product";
import { I_Product } from "../../../typescript/interfaces";
import { sampleProduct } from "../../../shared/sampleProduct";
import {
  SectionHeader,
  SubSectionHeader,
} from "../../atoms/sectionHeaders/sectionHeaders";
export function UserDashboardPopularProducts() {
  const sampleProducts: Array<I_Product> = Array.from({ length: 12 }).map(
    (data, i) => ({
      ...sampleProduct,
      discountedPrice: i % 2 ? 200 : undefined,
    })
  );
  return (
    <div className={styles.products}>
      <SubSectionHeader>Most in demand products</SubSectionHeader>
      <SectionHeader>Popular Products</SectionHeader>
      <div className={styles.main}>
        {sampleProducts.map((el, i) => (
          <Product key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
