import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <>
      <Toaster />
      <div className="flex h-screen w-screen overflow-y-hidden">
        <div className="bg-auth h-full w-7/12 bg-no-repeat bg-cover"></div>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
