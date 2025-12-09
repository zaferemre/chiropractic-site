"use client";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ChiroCare
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kadıköy'deki uzman kayropraktik ve fizyoterapi merkezi. Sağlığınız
              için doğru adres.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="/hakkimizda"
                  className="text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/chiroblog"
                  className="text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  ChiroBlog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:05464213365"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  <FaPhone className="text-[#acf48c]" />
                  0546 421 33 65
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  <FaMapMarkerAlt className="text-[#acf48c]" />
                  Konum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {[
              {
                icon: <FaMapMarkerAlt />,
                link: "https://maps.app.goo.gl/QPVLSz9qFz84aYZeA?g_st=iw",
                label: "Konum",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/chirocare.kadikoy/#",
                label: "Instagram",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group w-12 h-12 flex items-center justify-center bg-[#acf48c] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} ChiroCare. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
