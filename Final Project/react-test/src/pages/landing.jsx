import React from "react";
import land from "/src/assets/images/land.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <section
        id="home"
        className="bg-green-500 p-8 text-left relative flex flex-col md:flex-row items-center justify-between"
      >
        <div className="flex flex-col items-start md:ml-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Efficient Management of Your <br /> Medical Equipment
          </h1>
          <p className="mt-6 text-lg text-white">
            A unified system for managing technical interventions, <br /> equipment reception, quality checks, <br />
            and documenting medical maintenance operations.
          </p>
          <Link to="/SignUpPage" className="mt-8 py-3 px-6 bg-white text-green-500 font-semibold rounded-full hover:bg-green-600 hover:text-white transition text-center">
            Get Started Now
          </Link>
        </div>
        <img
          src={land}
          alt="Medical Equipment"
          className="w-3/4 md:w-1/2 mt-8 md:mt-0 -ml-12"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="bg-red-800 p-8 max-h-[600px]">
        <div className="flex flex-wrap justify-between gap-8 h-full">
          <div className="bg-red-700 p-6 rounded-lg shadow-md hover:shadow-lg transition w-full md:w-1/3 min-h-[350px] flex flex-col justify-between items-center">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Protecting Your Health
            </h3>
            <p className="text-gray-700">
              Efficiently monitor your patients' health records.
            </p>
            <Link to="/DemandeIntervention" className="mt-6 py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full md:w-1/3 min-h-[350px] flex flex-col justify-between items-center">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Efficient Monitoring
            </h3>
            <p className="text-red-700">
              Track your stock and medical equipment status in real-time.
            </p>
            <Link to="/InterventionOrder" className="mt-6 py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full md:w-1/3 min-h-[350px] flex flex-col justify-between items-center">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Easy Scheduling
            </h3>
            <p className="text-gray-700">
              Book appointments for maintenance quickly and efficiently.
            </p>
            <Link to="/PVReceptionForm" className="mt-6 py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="bg-green-500 p-8 text-center text-white">
  <h2 className="text-4xl font-bold mb-6">
    Your Healthcare at Your Fingertips
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="bg-white text-green-500 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between items-center">
      <div className="text-3xl">📅</div>
      <p className="mt-4 text-gray-700">
        Partner with us to streamline your medical appointments.
      </p>
      <div className="flex justify-center mt-4 w-full">
        <Link 
          to="/Partnership" 
          className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
    <div className="bg-white text-green-500 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between items-center">
      <div className="text-3xl">📚</div>
      <p className="mt-4 text-gray-700">
        Book appointments anytime, anywhere, available 24/7.
      </p>
      <div className="flex justify-center mt-4 w-full">
        <Link 
          to="/BookAppointment" 
          className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
    <div className="bg-white text-green-500 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between items-center">
      <div className="text-3xl">🔒</div>
      <p className="mt-4 text-gray-700">
        Data protection - Your information is secure with us.
      </p>
      <div className="flex justify-center mt-4 w-full">
        <Link 
          to="/PrivacyPolicy" 
          className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
    <div className="bg-white text-green-500 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between items-center">
      <div className="text-3xl">📲</div>
      <p className="mt-4 text-gray-700">
        Easily reschedule or cancel your appointments for free.
      </p>
      <div className="flex justify-center mt-4 w-full">
        <Link 
          to="/ManageAppointments" 
          className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="bg-white p-8 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-6">About Us</h2>
        <div className="flex flex-col items-center space-y-4">
          <iframe
            className="w-full md:w-3/4"
            style={{ height: "530px" }}
            src="https://www.youtube.com/embed/Cr4LFOgRGeo"
            title="YouTube video 2"
            allowFullScreen
          ></iframe>
          <br />
          <p className="text-gray-700">
            Learn about how we help medical professionals in 2024 and beyond!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-500 text-white p-8 text-center">
  <h1 className="text-2xl font-bold mb-2">EquipCare Cloud</h1>
  <p className="text-lg mb-6">
    Enhance your healthcare management experience with our platform. <br /> Contact us to learn more!
  </p>
  
  <div className="mt-3 flex justify-center space-x-6">
    
    <Link to="/contactus" className="hover:underline">
      Contact Us
    </Link>
    <Link to="/about" className="hover:underline">
      About Us
    </Link>
    <Link to="/privacypolicy" className="hover:underline">
      Privacy
    </Link>
  </div>
</footer>


    </div>
  );
};

export default HomePage;
