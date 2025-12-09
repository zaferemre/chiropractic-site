"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-screen-xl mx-auto">
          {/* Left: Premium Logo */}
          <Link href="/" className="group">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#acf48c] transition-colors duration-300 relative">
              ChiroCare
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#acf48c] group-hover:w-full transition-all duration-300"></span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className={`relative font-medium transition-colors duration-300 group ${
                pathname === "/"
                  ? "text-[#acf48c] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Ana Sayfa
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#acf48c] transition-all duration-300 ${
                  pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/hakkimizda"
              className={`relative font-medium transition-colors duration-300 group ${
                pathname === "/hakkimizda"
                  ? "text-[#acf48c] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Hakkımızda
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#acf48c] transition-all duration-300 ${
                  pathname === "/hakkimizda"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/chiroblog"
              className={`relative font-medium transition-colors duration-300 group ${
                pathname?.startsWith("/chiroblog")
                  ? "text-[#acf48c] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ChiroBlog
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#acf48c] transition-all duration-300 ${
                  pathname?.startsWith("/chiroblog")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:05464213365"
              className="text-base font-semibold text-gray-700 hover:text-[#acf48c] transition-colors duration-300 flex items-center gap-2"
            >
              <FaPhone className="text-[#acf48c]" />
              0546 421 33 65
            </a>
            <a
              href="https://wa.me/905464213365"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#acf48c] text-black font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Bize Yazın</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-[#acf48c] transition-colors duration-300 p-2"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Phone Number Bar */}
        <div className="md:hidden text-center text-[#acf48c] font-bold py-2 text-base border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <a href="tel:05464213365" className="flex items-center justify-center gap-2">
            <FaPhone />
            0546 421 33 65
          </a>
        </div>

        {/* Premium Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-100 p-6 flex flex-col space-y-4 md:hidden z-50 animate-slideDown">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-300 py-2 border-b border-gray-100 ${
                pathname === "/"
                  ? "text-[#acf48c] font-semibold"
                  : "text-gray-700 hover:text-[#acf48c] font-medium"
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-300 py-2 border-b border-gray-100 ${
                pathname === "/hakkimizda"
                  ? "text-[#acf48c] font-semibold"
                  : "text-gray-700 hover:text-[#acf48c] font-medium"
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              href="/chiroblog"
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-300 py-2 border-b border-gray-100 ${
                pathname?.startsWith("/chiroblog")
                  ? "text-[#acf48c] font-semibold"
                  : "text-gray-700 hover:text-[#acf48c] font-medium"
              }`}
            >
              ChiroBlog
            </Link>

            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
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
                  className="w-12 h-12 flex items-center justify-center bg-[#acf48c] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
