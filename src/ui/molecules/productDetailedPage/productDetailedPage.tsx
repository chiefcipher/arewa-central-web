import React, { useState, useEffect } from "react";
import styles from "./productDetailedPage.module.scss";
import { Product } from "../../atoms/product/product";
import {
  I_FormMessage,
  I_Product,
  I_Review,
} from "../../../typescript/interfaces";
import { CartIcon, SampleProductImage } from "../../../shared/assets";
import { Link, Routes, useParams, Route } from "react-router-dom";
import { Pagination } from "../../atoms/pagination/pagination";
import { StarsRating } from "../../atoms/starsRating/starsRating";
import { LoadingUI } from "../../atoms/loadingUI/loadingUI";
import { ErrorUI } from "../../atoms/errorUI/errorUI";
import productBigImage from "./productBigImage.jpg";
import productSmallImage from "./productSmallImage.jpg";
import { Icon } from "@iconify/react";
import * as yup from "yup";
import { FormMessage } from "../../atoms/formMessage/formMessage";
import { sampleProduct } from "../../../shared/sampleProduct";
import { AddReview } from "../addReview/addReview";
import { Review } from "../../atoms/review/review";
import { useDispatch } from "react-redux";
import { AllReviews } from "../viewAllReviews/viewAllReviews";

const addToCartSchema = yup.object().shape({
  productColors: yup.array().of(yup.string()),
  selectedColor: yup
    .string()
    .test("user-selected-color", "kindly select a color", function (color) {
      const { productColors }: { productColors: string } = this.parent;
      if (productColors.length === 0) return true;
      return productColors.includes(color as string);
    }),
  productSizes: yup.array().of(yup.string()),
  selectedSize: yup
    .string()
    .test("user-selected-size", "kindly select a size", function (size) {
      const { productSizes }: { productSizes: string } = this.parent;
      if (productSizes.length === 0) return true;
      return productSizes.includes(size as string);
    }),
});
const sampleReview: I_Review = {
  reviewerName: "John Doe",
  reviewContent: `I have an HP computer and added the ram to increase it
  from 8 gb to 16gb. It's an older PC and so it needed older
  ram for compatibility. This ram is not cheap, but the
  price was fair. It was delivered and`,
  reviewTitle: "A nice shoe",
  rating: 4.5,
  date: Date.now(),
};
export function ProductDetailedPage() {
  const { category, productSlug } = useParams();
  const [mainPicture, setMainPicture] = useState(productBigImage);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [formMessage, setFormMessage] = useState<I_FormMessage>({
    type: "",
    content: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isLoading]);
  console.log(isLoading);

  console.log(productSlug, category);
  if (isError) return <ErrorUI type={500} />;
  if (isLoading) return <LoadingUI />;

  const handleAddToCart = async () => {
    const data = {
      productColors: sampleProduct.colors || [],
      selectedColor: selectedColor,
      productSizes: sampleProduct.sizes || [],
      selectedSize: selectedSize,
    };

    try {
      const valid = await addToCartSchema.validate(data);
      console.log("valid details", valid);
      if (formMessage.type === "error") {
        setFormMessage({
          type: "success",
          content: "valid inputs, adding to cart...",
        });
      }
      //  TODO ADD LOGIC TO ADD TO CART
    } catch (err: any) {
      setFormMessage({
        type: "error",
        content: err.message,
      });
    }
  };
  return (
    <>
      <Routes>
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/reviews" element={<AllReviews />} />
      </Routes>
      <div className={styles.product}>
        <h1>
          <span>Home &gt; </span>
          <span>{category} &gt; </span>
          <span>{sampleProduct.name}</span>
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <div className={styles.smallImagesWrapper}>
              {Array(4)
                .fill(productSmallImage)
                .map((imgUrl, i) => (
                  <img
                    src={imgUrl}
                    alt={sampleProduct.name}
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
              <img src={mainPicture} alt={sampleProduct.name} tabIndex={0} />
            </div>
          </div>{" "}
          <div className={styles.textsPart}>
            <div className={styles.textsHeader}>
              <p>
                <span>Brand:</span>
                <span>{sampleProduct.brand}</span>
              </p>
              <p>
                <span>Model:</span>
                <span>{sampleProduct.model}</span>
              </p>
              <p>
                <span>In Stock:</span>
                <span>{sampleProduct.quantityLeft}</span>
              </p>
            </div>
            <h3 className={styles.name}>{sampleProduct.name}</h3>
            <div className={styles.textsRating}>
              <h6 className={styles.subSectionHeader}>
                Rating: {sampleProduct.ratingsAverage}{" "}
              </h6>

              <StarsRating
                ratingValue={sampleProduct.ratingsAverage}
                sizeOfStar={18}
              />
              <p>
                {sampleProduct.ratingsNumber} reviews
                <Link to="add-review">Add Review</Link>
              </p>
            </div>

            {sampleProduct.colors ? (
              <div className={styles.colors}>
                <h6 className={styles.subSectionHeader}>Colors</h6>
                <div>
                  {sampleProduct.colors.map((color, i) => (
                    <button
                      onClick={() => setSelectedColor(color)}
                      key={i}
                      style={{ backgroundColor: color }}
                      className={
                        selectedColor === color ? styles.addSelectedOutline : ""
                      }
                    ></button>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}

            {sampleProduct.sizes ? (
              <div className={styles.sizes}>
                <h6 className={styles.subSectionHeader}>Sizes</h6>
                <div>
                  {sampleProduct.sizes.map((size, i) => (
                    <button
                      className={
                        selectedSize === size ? styles.addSelectedOutline : ""
                      }
                      key={i}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={styles.prices}>
              <p>NGN(incl. taaxes)</p>
              <div>
                {sampleProduct.discountedPrice && (
                  <span>₦{sampleProduct.discountedPrice}</span>
                )}
                <span>₦{sampleProduct.price}</span>
              </div>
            </div>
            <div className="mt-10 mb-10">
              <FormMessage {...formMessage} />
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
                <button onClick={handleAddToCart}>
                  <CartIcon />
                  <span>Add to cart</span>
                </button>
                {/* TODO MIGHT ADD THIS LATER ON <button>
                <Icon icon="game-icons:money-stack" />
                <span>Buy now</span>
              </button> */}
              </div>
            </div>
          </div>
          {/* TODO ADD RELATED PRODUCTS UI */}
        </div>

        <div className={styles.description}>
          <h2>About this product </h2>
          {sampleProduct.description
            .split("\n")
            .filter((x) => x !== "")

            .map((x, i) => (
              <p key={i}>{x}</p>
            ))}
        </div>
        <div className={styles.reviews}>
          <h2>Reviews </h2>

          <div className={styles.reviewsWrapper}>
            {Array(6)
              .fill("a")
              .map((el, i) => (
                <Review key={i} {...sampleReview} />
              ))}
          </div>

          <Link to="reviews" className={styles.reviewsViewMoreCta}>
            View more reviews
          </Link>
        </div>
      </div>
    </>
  );
}
