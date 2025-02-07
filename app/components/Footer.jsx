"use client";
import { useState, useEffect } from "react";
import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear()); // Ensure correct hydration
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Icons Section */}
        <div className="flex justify-center space-x-8">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/chirocare.kadikoy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>

          {/* Phone Icon */}
          <a
            href="tel:05464213365"
            className="hover:text-green-500"
            aria-label="Phone"
          >
            <FaPhone size={30} />
          </a>

          {/* Maps Icon */}
          <a
            href="https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
            aria-label="Maps"
          >
            <FaMapMarkerAlt size={30} />
          </a>
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {year || "Loading..."} ChiroCare Istanbul. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
