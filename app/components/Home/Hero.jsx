"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mediaItems = [
    {
      type: "image",
      src: "/images/Chiro1.jpeg",
      alt: "Kadıköy kayropraktik uygulaması",
      offset: "translate-y-6",
      mobileShow: true,
    },
    {
      type: "image",
      src: "/images/AhmetChiro2.jpeg",
      alt: "Fizyoterapist Ahmet hastasını tedavi ederken",
      offset: "-translate-y-6",
      mobileShow: false,
    },
    {
      type: "video",
      src: "/videos/KuzChiro.mp4",
      title: "ChiroCare hasta deneyimi videosu",
      offset: "translate-y-6",
      mobileShow: true,
    },
    {
      type: "image",
      src: "/images/AhmetChiro3.jpeg",
      alt: "Boyun düzleşmesi tedavi seansı",
      offset: "-translate-y-6",
      mobileShow: false,
    },
    {
      type: "image",
      src: "/images/AhmetYeni.jpg",
      alt: "ChiroCare fizyoterapi kliniği iç görünüm",
      offset: "translate-y-6",
      mobileShow: false,
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 lg:px-0 pt-12 pb-24"
      aria-label="ChiroCare Tanıtım Görselleri ve Video"
    >
      {/* Responsive Grid with Premium Styling */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl gap-3 lg:gap-4">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center transition-all duration-700 delay-${index * 100} ${
              item.mobileShow ? "block" : "hidden sm:flex"
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className={`group relative mx-1 w-44 md:w-56 lg:w-64 h-[400px] md:h-[500px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${item.offset}`}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>

              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  title={item.title}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              )}

              {/* Premium Border Glow */}
              <div className="absolute inset-0 rounded-[40px] border-2 border-transparent group-hover:border-[#acf48c]/50 transition-all duration-500 z-30 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Influencer Badge */}
      <aside
        aria-label="Hasta yorumları istatistiği"
        className="absolute bottom-8 left-5 md:bottom-12 md:left-10 bg-white/95 backdrop-blur-md w-48 h-48 md:w-52 md:h-52 p-5 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center border border-gray-100 hover:shadow-[#acf48c]/20 transition-all duration-300 transform hover:scale-105 group"
      >
        {/* Decorative Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/10 to-[#6EE7B7]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex -space-x-2 mb-4" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative transform transition-transform duration-300 hover:scale-110 hover:z-20"
            >
              <div className="absolute inset-0 bg-[#acf48c] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg relative z-10"
                src={`https://doodleipsum.com/700x700/avatar-2?i=${i === 0 ? '09d1ff61311e1f04032402ba8caead83' : i === 1 ? '8326df1d1d0d9f677520409402db45c8' : 'bf8b97258fa53643f64755c68b08041b'}`}
                alt={`Hasta profil ${i + 1}`}
                width={56}
                height={56}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <span className="text-sm md:text-base font-bold text-gray-900 block">
            100+ Hasta
          </span>
          <span className="text-xs md:text-sm font-semibold text-[#acf48c] mt-1 block">
            Yorumu
          </span>
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#6EE7B7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </aside>
    </section>
  );
}
