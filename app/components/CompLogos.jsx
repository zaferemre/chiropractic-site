"use client";
import { useEffect, useState } from "react";

const conditions = [
  "Bel, Boyun, Sırt Ağrısı",
  "Bel Fıtığı, Boyun Fıtığı",
  "Dejeneratif Disk Hastalığı",
  "Gerilim Tipi Baş Ağrısı, Migren",
  "Bel Kayması (Başlangıç Seviyesi)",
  "Sinir Sıkışmaları (Siyatik, Karpal Tünel)",
  "Sakroiliak Eklem Ağrısı",
  "Kanal Daralması",
  "Spor Sakatlıkları",
  "Postür Bozukluğu",
];

const CompLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="chiropractic-conditions"
      aria-label="Kayropraktik Uygulama Alanları"
      className="py-24 sm:py-32 mx-4 relative"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Premium Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kayropraktik Hangi Durumlarda{" "}
            <span className="text-[#acf48c]">Uygulanır?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto rounded-full"></div>
        </div>

        {/* Premium Grid Cards */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 text-center list-none">
          {conditions.map((condition, index) => (
            <li
              key={index}
              className={`group relative p-5 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-gray-900 font-semibold text-sm md:text-base transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-[#acf48c]/50 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/10 to-[#6EE7B7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Content */}
              <span className="relative z-10 block">{condition}</span>
              
              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompLogos;
