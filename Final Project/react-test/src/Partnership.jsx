import React from "react";

import BG12 from "/src/assets/images/BG8.png"; // Ensure this is the correct path

const Partnership = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start pt-20 px-4"
      style={{ backgroundImage: `url(${BG12})` }}
    >
      <div className="relative w-full max-w-4xl">
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          Partner with Us
        </h2>

        {/* Content Container */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8">
          <p className="text-lg text-gray-700 mb-4">
            At EquipCare, we believe in the power of collaboration to transform healthcare management. Our platform is designed to bring together medical institutions, equipment suppliers, technicians, and healthcare providers to create a seamless experience for managing medical equipment, interventions, and maintenance.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We offer partnership opportunities for:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>Healthcare providers looking to streamline their equipment management process.</li>
            <li>Medical institutions interested in enhancing their technical support operations.</li>
            <li>Manufacturers and suppliers of medical equipment who wish to integrate their products into a robust healthcare management platform.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-4">
            By partnering with us, you gain access to:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>Efficient tracking and management of medical equipment.</li>
            <li>Real-time monitoring and reporting of technical interventions.</li>
            <li>Easy integration with existing healthcare systems.</li>
            <li>Dedicated support to ensure your operations run smoothly.</li>
          </ul>
          <p className="text-lg text-gray-700">
            Whether you're a healthcare provider, equipment manufacturer, or technical support service, we can create a tailored partnership that meets your needs. Together, we can drive improvements in patient care, operational efficiency, and equipment reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
