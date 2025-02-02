import React from "react";
import { Link } from "react-router-dom";
import BG8 from "/src/assets/images/BG10.png"; // Ensure this is the correct path

const PrivacyPolicy = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start pt-20 px-4"
      style={{ backgroundImage: `url(${BG8})` }}
    >
      <div className="relative w-full max-w-4xl">
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          Privacy Policy
        </h2>

        {/* Content Container */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8">
          <p className="text-lg text-gray-700 mb-4">
            At EquipCare Cloud, your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you use our services. We are committed to ensuring that your data is handled securely and responsibly.
          </p>
          <h3 className="text-xl font-semibold text-green-600 mb-4">1. Information We Collect</h3>
          <p className="text-lg text-gray-700 mb-4">
            We collect the following types of information when you use our platform:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>Personal identification information (such as your name, email address, etc.)</li>
            <li>Health-related data (for medical equipment management and intervention tracking)</li>
            <li>Technical data (such as usage patterns, device information, and IP addresses)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-green-600 mb-4">2. How We Use Your Information</h3>
          <p className="text-lg text-gray-700 mb-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>To provide and maintain our services</li>
            <li>To improve user experience and enhance the functionality of our platform</li>
            <li>To communicate with you, including sending updates, notifications, and support messages</li>
            <li>To ensure compliance with relevant laws and regulations</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-4">3. Data Protection and Security</h3>
          <p className="text-lg text-gray-700 mb-4">
            We implement a range of security measures to protect your personal information. All sensitive data is stored in secure, encrypted environments, and we take appropriate steps to prevent unauthorized access, alteration, or disclosure of your data.
          </p>

          <h3 className="text-xl font-semibold text-green-600 mb-4">4. Sharing Your Information</h3>
          <p className="text-lg text-gray-700 mb-4">
            We do not sell, rent, or lease your personal information to third parties. However, we may share your data in the following cases:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>With trusted service providers who assist us in operating the platform</li>
            <li>To comply with legal obligations or respond to lawful requests by public authorities</li>
            <li>In the event of a merger, acquisition, or asset sale, where your data may be transferred to the new owner</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-4">5. Your Rights</h3>
          <p className="text-lg text-gray-700 mb-4">
            You have the following rights concerning your personal information:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>The right to access, update, or delete your personal information</li>
            <li>The right to object to or restrict the processing of your data</li>
            <li>The right to withdraw your consent for data processing at any time</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-4">6. Changes to This Privacy Policy</h3>
          <p className="text-lg text-gray-700 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or to comply with new legal requirements. We will notify you of any significant changes by posting the updated policy on our platform and providing a notice where applicable.
          </p>

          <h3 className="text-xl font-semibold text-green-600 mb-4">7. Contact Us</h3>
          <p className="text-lg text-gray-700">
            If you have any questions about this Privacy Policy or how we handle your personal information, please feel free to <Link to="/ContactUs" className="text-green-600 hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
