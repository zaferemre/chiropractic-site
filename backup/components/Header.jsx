"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-screen-xl mx-auto">
          {/* Left: Logo */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              ChiroCare
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-green-600 font-medium">
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-gray-500 hover:text-black transition"
            >
              Hakkımızda
            </Link>
            <Link
              href="/chiroblog"
              className="text-gray-500 hover:text-black transition"
            >
              ChiroBlog
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:05464213365"
              className="text-lg font-semibold text-green-700 hover:text-green-900 transition"
            >
              0546 421 33 65
            </a>
            <a
              href="https://wa.me/905464213365"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#acf48c] text-black font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
            >
              Bize Yazın
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 hover:text-black transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Phone Number Bar */}
        <div className="md:hidden text-center text-green-700 font-semibold py-1 text-base border-t border-gray-200 bg-white">
          <a href="tel:05464213365">0546 421 33 65</a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-20 right-4 w-56 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden z-50">
            <Link
              href="/"
              className="text-gray-700 hover:text-black transition"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-gray-700 hover:text-black transition"
            >
              Hakkımızda
            </Link>
            <Link
              href="/chiroblog"
              className="text-gray-700 hover:text-black transition"
            >
              ChiroBlog
            </Link>

            {/* Social Icons */}
            <div className="flex flex-col items-center space-y-3 mt-4">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  link: "https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/chirocare.kadikoy/#",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#acf48c] text-black rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}

              {/* Call Button (Mobile Menu) */}
              <a
                href="tel:05464213365"
                className="flex items-center space-x-2 bg-[#acf48c] text-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                <FaPhone />
                <span>0546 421 33 65</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Mobile Call Button */}
      <a
        href="tel:05464213365"
        className="md:hidden fixed bottom-4 right-4 z-50 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-700 transition"
      >
        <FaPhone size={18} />
        <span className="text-sm font-medium">Ara</span>
      </a>
    </>
  );
}
