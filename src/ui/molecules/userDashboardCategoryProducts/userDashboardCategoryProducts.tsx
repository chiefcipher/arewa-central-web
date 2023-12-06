import React, { useState, useEffect } from "react";
import styles from "./userDashboardCategoryProducts.module.scss";
import { Product } from "../../atoms/product/product";
import { I_Product } from "../../../typescript/interfaces";
import { SampleProductImage } from "../../../shared/assets";
import { useParams } from "react-router-dom";
import { Pagination } from "../../atoms/pagination/pagination";
import { LoadingUI } from "../../atoms/loadingUI/loadingUI";
import { ErrorUI } from "../../atoms/errorUI/errorUI";
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
export function UserDashboardCategoryProducts() {
  const pageSize = 24;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { category } = useParams();
  const [isLoading, setLoading] = useState(true);
  const sampleProducts: Array<I_Product> = Array.from({ length: pageSize }).map(
    (data, i) => ({
      ...sampleProductData,
      discountedPrice: i % 2 ? 200 : undefined,
    })
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isLoading]);
  console.log(isLoading);

  // TODO add error ui
  console.log(currentPage);
  return (
    <div className={styles.products}>
      <h2 tabIndex={0} className={styles.header}>
        {category}
      </h2>
      {!isLoading && (
        <>
          <div className={styles.main}>
            {sampleProducts.map((el, i) => (
              <Product key={i} {...el} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            handleCurrentPage={(value) => setCurrentPage(value)}
            increasePage={() => setCurrentPage((x) => x + 1)}
            decreasePage={() => setCurrentPage((x) => (x > 1 ? x - 1 : x))}
          />
        </>
      )}
      {isLoading && <LoadingUI />}
      {true && <ErrorUI type={500} />}
    </div>
  );
}
