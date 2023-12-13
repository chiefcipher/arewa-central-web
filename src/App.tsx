import React from "react";
import "./scss/combine-styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./ui/pages/signUp/signUp";
import { Login } from "./ui/pages/login/login";
import { AuthLayout } from "./ui/pages/authLayout/authLayout";
import { E_Hidden, E_pages } from "./typescript/enums";
import { ForgotPassword } from "./ui/pages/forgotPassword/forgotPassword";
import { UserDashboard } from "./ui/pages/userDashboard/userDashboard";
import { UserDashboardPopularProducts } from "./ui/molecules/userDashboardPopularProducts/userDashboardPopularProducts";
import { UserDashboardNewProducts } from "./ui/molecules/userDashboardNewProducts/userDashboardNewProducts";
import { UserDashboardHighestRatedProducts } from "./ui/molecules/userDashboardHighestRatedProducts/userDashboardHighestRatedProducts";
import { UserDashboardCategoryProducts } from "./ui/molecules/userDashboardCategoryProducts/userDashboardCategoryProducts";
import { ErrorUI } from "./ui/atoms/errorUI/errorUI";
import { ProductDetailedPage } from "./ui/molecules/productDetailedPage/productDetailedPage";
import { ComingSoonUI } from "./ui/atoms/comingSoonUI/comingSoonUI";
function App() {
  const fakeToken = localStorage.getItem(E_Hidden.tokenName) || "some text";

  return (
    <BrowserRouter>
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
          <Route
            path="/:category"
            element={<UserDashboardCategoryProducts />}
          />
          <Route
            path="/:category/:productSlug/*"
            element={<ProductDetailedPage />}
          />
          <Route path="/track-order" element={<ComingSoonUI />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={E_pages.signup} element={<SignUp />} />
          <Route path={E_pages.login} element={<Login />} />
          <Route path={E_pages.forgotPassword} element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<ErrorUI type={404} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
