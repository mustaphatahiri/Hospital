import React from "react";
import SuccessIcon from "/src/assets/images/success.png";

const SuccessPagePVReception = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#6BFFC4] text-[#333]">
      <div className="mb-6">
        <img src={SuccessIcon} alt="Success" className="w-24 h-24" />
      </div>
      <h1 className="text-2xl font-bold mb-4">The reception report has been successfully submitted.</h1>
      <p className="text-lg text-[#555]">Thank you for confirming the equipment's status.</p>
    </main>
  );
};

export default SuccessPagePVReception;
