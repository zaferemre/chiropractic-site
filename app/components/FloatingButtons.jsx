"use client";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905464213365"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="WhatsApp ile iletişime geç"
      >
        <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:05464213365"
        className="group w-14 h-14 bg-[#acf48c] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#acf48c]/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Telefon ile ara"
      >
        <FaPhone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}

