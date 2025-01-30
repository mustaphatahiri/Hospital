import React, { useState } from "react";
import bg4 from "../src/images/BG8.png"; // Update with correct path if needed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Your message has been submitted!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start pt-20 px-4"
      style={{ backgroundImage: `url(${bg4})` }}
    >
      <div className="relative w-full max-w-4xl">
        {/* Title */}
        <h2 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 text-green-600 bg-white bg-opacity-90 px-6 py-2 text-2xl font-bold rounded shadow-md z-10 whitespace-nowrap">
          Contact Us
        </h2>

        {/* Content Container */}
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8">
          <p className="text-lg text-gray-700 mb-4">
            Have any questions or inquiries? Feel free to reach out to us. We’re here to help and will get back to you
            as soon as possible.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 w-full border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 w-full border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 w-full border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
