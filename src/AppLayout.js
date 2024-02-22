import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./utils/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default AppLayout;
