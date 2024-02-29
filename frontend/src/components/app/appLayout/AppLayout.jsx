import { Outlet } from "react-router-dom";

import AppNav from "../nav/AppNav";
import AppFooter from "../appFooter/AppFooter";

function AppLayout() {
  return (
    <>
      <AppNav />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default AppLayout;
