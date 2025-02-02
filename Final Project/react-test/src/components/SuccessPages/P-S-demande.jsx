import React from "react";
import SuccessIcon from "/src/assets/images/success.png";

const SuccessPageDemande = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#6BFFC4] text-[#333]">
      <div className="mb-6">
        <img src={SuccessIcon} alt="Success" className="w-24 h-24" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Our intervention request has been submitted successfully.</h1>
      <p className="text-lg text-[#555]">We will process it shortly.</p>
    </main>
  );
};

export default SuccessPageDemande;
