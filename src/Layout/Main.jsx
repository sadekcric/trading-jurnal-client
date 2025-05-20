import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
