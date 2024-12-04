"use client";

import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Icons Section */}
        <div className="flex justify-center space-x-8">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>

          {/* Phone Icon */}
          <a
            href="tel:+1234567890"
            className="hover:text-green-500"
            aria-label="Phone"
          >
            <FaPhone size={30} />
          </a>

          {/* Maps Icon */}
          <a
            href="https://maps.google.com/?q=youraddress"
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
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
