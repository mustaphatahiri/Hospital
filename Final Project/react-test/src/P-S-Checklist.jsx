import React from "react";
import SuccessIcon from './images/success.png';

const SuccessPageChecklist = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#6BFFC4] text-[#333]">
      <div className="mb-6">
        <img src={SuccessIcon} alt="Success" className="w-24 h-24" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Checklist completed and submitted.</h1>
      <p className="text-lg text-[#555]">Thank you for ensuring quality compliance.</p>
    </main>
  );
};

export default SuccessPageChecklist;
