import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-y-hidden">
      <div className="bg-auth h-full w-7/12 bg-no-repeat bg-cover"></div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
