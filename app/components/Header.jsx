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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-screen-xl mx-auto">
        {/* Left: Logo (Links to Home) */}
        <Link href="/" className="">
          <h1 className="text-2xl font-bold text-black">ChiroCare</h1>
        </Link>

        {/* Desktop Navigation - Centered */}
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

        {/* Right: Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-black transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Button (Next to Menu) */}
        <div className="hidden md:flex">
          <a
            href="https://api.whatsapp.com/send/?phone=905464213365&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#acf48c] text-black font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
          >
            Bize Yazın
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/" className="text-gray-700 hover:text-black transition">
            Ana Sayfa
          </Link>
          <a
            href="/hakkimizda"
            className="text-gray-700 hover:text-black transition"
          >
            Hakkımızda
          </a>
          <Link
            href="/chiroblog"
            className="text-gray-700 hover:text-black transition"
          >
            ChiroBlog
          </Link>

          {/* Social Media Icons (Bottom of Dropdown) */}
          <div className="flex justify-center space-x-3 mt-4">
            {[
              {
                icon: <FaMapMarkerAlt />,
                link: "https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/chirocare.kadikoy/#",
              },
              { icon: <FaPhone />, link: "tel:05464213365" },
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
          </div>
        </div>
      )}
    </header>
  );
}
