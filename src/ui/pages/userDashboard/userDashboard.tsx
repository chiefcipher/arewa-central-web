import React from "react";
import { UserDashboardTop } from "../../molecules/userDashboardTop/userDashboardTop";
import { UserDashboardNav } from "../../molecules/userDashboardNav/userDashboardNav";
import { Outlet } from "react-router-dom";
import { UserDashboardFooter } from "../../molecules/userDashboardFooter/userDashboardFooter";
import { Seo } from "../../atoms/seo/seo";
export function UserDashboard() {
  // for logged in users
  // TODO INSTEAD OF USER DASHBOARD TOP BUILD THE DASHBOARD HERE
  return (
    <>
      <Seo title="Arewa Cental" description="Dashboard" />
      <UserDashboardTop />
      <UserDashboardNav />

      <Outlet />
      <UserDashboardFooter />
    </>
  );
}
