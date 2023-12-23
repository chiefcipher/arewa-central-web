import React from "react";
import "./scss/combine-styles.scss";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./ui/pages/signUp/signUp";
import { Login } from "./ui/pages/login/login";
import { AuthLayout } from "./ui/pages/authLayout/authLayout";
import { E_Hidden, E_Pages } from "./typescript/enums";
import { ForgotPassword } from "./ui/pages/forgotPassword/forgotPassword";
import { UserDashboard } from "./ui/pages/userDashboard/userDashboard";
import { UserDashboardPopularProducts } from "./ui/molecules/userDashboardPopularProducts/userDashboardPopularProducts";
import { UserDashboardNewProducts } from "./ui/molecules/userDashboardNewProducts/userDashboardNewProducts";
import { UserDashboardHighestRatedProducts } from "./ui/molecules/userDashboardHighestRatedProducts/userDashboardHighestRatedProducts";
import { UserDashboardCategoryProducts } from "./ui/molecules/userDashboardCategoryProducts/userDashboardCategoryProducts";
import { ErrorUI } from "./ui/atoms/errorUI/errorUI";
import { ProductDetailedPage } from "./ui/molecules/productDetailedPage/productDetailedPage";
import { ComingSoonUI } from "./ui/atoms/comingSoonUI/comingSoonUI";
import { Cart } from "./ui/pages/cart/cart";
import { Checkout } from "./ui/pages/checkout/checkout";
import { Orders } from "./ui/pages/orders/orders";
import { Profile } from "./ui/pages/profile/profile";
import { TrackOrder } from "./ui/pages/trackOrder/trackOrder";

function App() {
  const fakeToken = localStorage.getItem(E_Hidden.tokenName) || "some text";

  return (
    <Routes>
      <Route element={<UserDashboard />}>
        <Route
          path="/"
          element={
            <>
              <UserDashboardHighestRatedProducts />
              <UserDashboardNewProducts />
              <UserDashboardPopularProducts />
            </>
          }
        />
        <Route path="/:category" element={<UserDashboardCategoryProducts />} />
        <Route
          path="/:category/:productSlug/*"
          element={<ProductDetailedPage />}
        />
        <Route path={E_Pages.cart} element={<Cart />} />
        <Route path={E_Pages.profile} element={<Profile />} />
        <Route path={E_Pages.checkout} element={<Checkout />} />
        <Route path={E_Pages.orders} element={<Orders />} />
        <Route path={E_Pages.trackOrder} element={<TrackOrder />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={E_Pages.signup + "/*"} element={<SignUp />} />
        <Route path={E_Pages.login} element={<Login />} />
        <Route path={E_Pages.forgotPassword} element={<ForgotPassword />} />
      </Route>
      <Route path="*" element={<ErrorUI type={404} />} />
    </Routes>
  );
}

export default App;
