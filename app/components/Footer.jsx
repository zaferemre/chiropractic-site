"use client";
import Link from "next/link";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section - 2 birim */}
          <div className="text-center md:text-left lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ChiroCare
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {`Kadıköy'deki uzman kayropraktik ve fizyoterapi merkezi. Sağlığınız
              için doğru adres.`}
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
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
          </div>

          {/* Quick Links - 1 birim */}
          <div className="text-center md:text-left lg:col-span-1">
            <h4 className="font-bold text-gray-900 mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/chiroblog"
                  className="text-gray-600 hover:text-[#acf48c] transition-colors duration-300 text-sm"
                >
                  ChiroBlog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - 1 birim */}
          <div className="text-center md:text-left lg:col-span-1">
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

          {/* Google Maps - 2 birim */}
          <div className="text-center md:text-left lg:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">Konumumuz</h4>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.222318032849!2d29.09444740000001!3d40.9713409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7a03f002dc5%3A0x28a66e49b10c0e2b!2sKayropraktik%20Uzman%C4%B1%20Fizyoterapist%20Ahmet%20Burak%20Bay%C4%B1r!5e1!3m2!1sen!2sca!4v1765396754440!5m2!1sen!2sca&z=14"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} ChiroCare. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
