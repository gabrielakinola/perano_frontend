import React from "react";
import OtpForm from "../../components/auth/OtpForm";

const VerifyEmail = () => {
  return (
    <div className=" w-5/12 ">
      <div className="w-full flex justify-end">
        <h1 className="font-[600] text-[30px]">Perano Dev</h1>
      </div>
      <div className="h-full flex items-center justify-center">
        <OtpForm />
      </div>
    </div>
  );
};

export default VerifyEmail;
