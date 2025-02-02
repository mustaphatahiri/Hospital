import React from "react";
import { Link } from "react-router-dom";
import BG7 from "/src/assets/images/BG10.png"; // Ensure this is the correct path

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start pt-20 px-4"
      style={{ backgroundImage: `url(${BG7})` }}
    >
      <div className="relative w-full max-w-4xl">
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          About EquipCare Cloud
        </h2>

        {/* Content Container */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8">
          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              EquipCare Cloud is on a mission to revolutionize healthcare management by providing an innovative platform that simplifies the management of medical equipment, improves patient care, and enhances the overall healthcare experience.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to become the leading provider of healthcare solutions that empower medical institutions, healthcare providers, and patients. We strive to create a healthcare ecosystem where technology enhances efficiency, reduces costs, and ensures the highest quality of care.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Our Values</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li><strong>Integrity:</strong> We prioritize honesty, transparency, and ethical practices in everything we do.</li>
              <li><strong>Innovation:</strong> We are committed to continuous improvement and integrating cutting-edge technology to enhance healthcare management.</li>
              <li><strong>Collaboration:</strong> We believe in fostering partnerships to create solutions that benefit healthcare providers, patients, and institutions.</li>
              <li><strong>Customer-Centricity:</strong> Our users' needs are at the heart of our solutions, ensuring we always prioritize their satisfaction and well-being.</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Key Features</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li><strong>Real-Time Equipment Management:</strong> Monitor and manage medical equipment usage, maintenance, and location in real time.</li>
              <li><strong>Comprehensive Patient Care:</strong> Track patient data and ensure all medical interventions are recorded accurately.</li>
              <li><strong>Data Security & Compliance:</strong> Our platform adheres to the highest standards of data protection and complies with healthcare regulations.</li>
              <li><strong>Easy-to-Use Interface:</strong> A user-friendly design ensures that healthcare providers can quickly adapt to our platform without extensive training.</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <p className="text-lg text-gray-700">
              At EquipCare Cloud, we are committed to providing a seamless healthcare experience. If you want to learn more or collaborate with us, feel free to <Link to="/ContactUs" className="text-green-600 hover:underline">contact us</Link> anytime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
