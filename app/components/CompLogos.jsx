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
              className={`group relative p-6 md:p-7 bg-white rounded-2xl shadow-md hover:shadow-xl text-gray-800 font-semibold text-sm md:text-base transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200 hover:border-[#acf48c] overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Subtle Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/5 to-[#6EE7B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Content with Icon Space */}
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[80px]">
                {/* Icon Placeholder - Simple Circle */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-[#acf48c]/10 transition-all duration-500 group-hover:scale-110">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#acf48c] opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                {/* Text */}
                <span className="block leading-tight text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{condition}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompLogos;
