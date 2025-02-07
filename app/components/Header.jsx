"use client";
import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-md">
      <nav
        aria-label="Global"
        className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8"
      >
        {/* Desktop Logo Text (ChiroCare) */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="text-2xl font-bold text-green-700">
            ChiroCare
          </a>
        </div>

        {/* Mobile Logo Image */}
        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              alt="Chiropractic Kadıköy"
              src="/images/logo.png"
              className="h-11 w-auto"
            />
          </a>
        </div>

        {/* Desktop Icons - All on the Right */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <a
            href="https://www.instagram.com/chirocare.kadikoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-500"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-500"
            aria-label="Location"
          >
            <FaMapMarkerAlt size={30} />
          </a>

          <a
            href="tel:05464213365"
            className="text-green-700 hover:text-green-500"
            aria-label="Phone"
          >
            <FaPhone size={30} />
          </a>
        </div>

        {/* Mobile View - Phone Left, Instagram & Location Right */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* Phone Icon on Left */}
          <a
            href="tel:05464213365"
            className="ml-4 text-green-700 hover:text-green-500"
            aria-label="Phone"
          >
            <FaPhone size={30} />
          </a>

          {/* Instagram & Location on Right */}
          <div className="flex space-x-6 mr-4">
            <a
              href="https://www.instagram.com/chirocare.kadikoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-500"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-500"
              aria-label="Location"
            >
              <FaMapMarkerAlt size={30} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
