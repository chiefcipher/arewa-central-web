import React from "react";
import { UserDashboardTop } from "../../molecules/userDashboardTop/userDashboardTop";
import { Navigation } from "../../molecules/navigation/navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "../../molecules/footer/footer";
import { Seo } from "../../atoms/seo/seo";
export function UserDashboard() {
  // for logged in users
  // TODO INSTEAD OF USER DASHBOARD TOP BUILD THE DASHBOARD HERE
  return (
    <>
      <Seo title="Arewa Cental" description="Dashboard" />
      <UserDashboardTop />
      <Navigation />

      <Outlet />
      <Footer />
    </>
  );
}
