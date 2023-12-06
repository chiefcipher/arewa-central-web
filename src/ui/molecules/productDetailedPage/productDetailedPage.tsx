import React, { useState, useEffect } from "react";
import styles from "./productDetailedPage.module.scss";
import { Product } from "../../atoms/product/product";
import { I_Product } from "../../../typescript/interfaces";
import { SampleProductImage } from "../../../shared/assets";
import { useParams } from "react-router-dom";
import { Pagination } from "../../atoms/pagination/pagination";
import { StarsRating } from "../../atoms/starsRating/starsRating";
import { LoadingUI } from "../../atoms/loadingUI/loadingUI";
import { ErrorUI } from "../../atoms/errorUI/errorUI";
import productBigImage from "./productBigImage.jpg";
import productSmallImage from "./productSmallImage.jpg";
const sampleProductData: I_Product = {
  ratingsAverage: 2.5,
  ratingsNumber: 2000,
  price: 400,
  colors: ["red", "green", "blue"],
  name: "Nike sweater and cap",
  category: "clothes",
  discountedPrice: 200,
  imgUrl: SampleProductImage,
  shortDescription: "A cool cap and sweater for the summer",
  slug: "nike-sweater-and-cap",
  brand: "LG",
  model: "OELDAHDHDHG2",
};
export function ProductDetailedPage() {
  const { category, productSlug } = useParams();
  const [mainPicture, setMainPicture] = useState(productBigImage);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  // const sampleProducts: Array<I_Product> = Array.from({ length: pageSize }).map(
  //   (data, i) => ({
  //     ...sampleProductData,
  //     discountedPrice: i % 2 ? 200 : undefined,
  //   })
  // );
  // TODO ADD THIS DISCUNTED PRICE TO UI
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isLoading]);
  console.log(isLoading);

  console.log(productSlug, category);
  if (isError) return <ErrorUI type={500} />;
  if (isLoading) return <LoadingUI />;
  return (
    <div className={styles.product}>
      <div className={styles.images}>
        <div className={styles.smallImagesWrapper}>
          {Array(4)
            .fill(productSmallImage)
            .map((imgUrl, i) => (
              <img
                src={imgUrl}
                alt={sampleProductData.name}
                key={i}
                tabIndex={0}
                onClick={() => {
                  console.log("clicked img", imgUrl, mainPicture);
                  setMainPicture(imgUrl);
                }}
              />
            ))}
        </div>
        <div className={styles.bigImageWrapper}>
          <img src={mainPicture} alt={sampleProductData.name} tabIndex={0} />
        </div>
      </div>{" "}
      <div className={styles.textsPart}>
        <div className={styles.textsHeader}>
          <p>
            <span>Brand:</span>
            <span>{sampleProductData.brand}</span>
          </p>
          <p>
            <span>Model:</span>
            <span>{sampleProductData.model}</span>
          </p>
        </div>
        <h3 className={styles.name}>{sampleProductData.name}</h3>
        <div className={styles.textsRating}>
          <StarsRating ratingValue={sampleProductData.ratingsAverage} />
          <p>{sampleProductData.ratingsNumber} reviews</p>
        </div>

        <div className={styles.sizes}>{/* TODO ADD SIZES UI */}</div>
        <div className={styles.prices}>
          <p>NGN(incl. taaxes)</p>
          <div>
            {sampleProductData.discountedPrice && (
              <span>₦{sampleProductData.discountedPrice}</span>
            )}
            <span>₦{sampleProductData.price}</span>
          </div>
        </div>
        <div className={styles.ctas}>
          <div>
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
          </div>
          <div>
            {/* main cta part  */}
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div>
      {/* TODO 
      ADD PRODUCT REVIEW  UI*/}
      {/* TODO ADD RELATED PRODUCTS UI */}
    </div>
  );
}
