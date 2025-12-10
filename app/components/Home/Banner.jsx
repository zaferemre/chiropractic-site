"use client";
import Link from "next/link";
import Image from "next/image";

export default function Banner({ 
  title = "Vücudunuzun doğal dengesini yeniden keşfedelim.",
  description = "Sağlıklı bir yaşam için omurganızın dengesini koruyun. Doğru duruş, hareket özgürlüğü ve ağrısız bir yaşam için profesyonel fizyoterapi, kayropraktik ve pilates hizmetlerimizle yanınızdayız.",
  logoAlt = "ChiroCare Kadıköy Kayropraktik Logo"
}) {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 lg:px-0 pt-32 pb-16 overflow-hidden"
      aria-label="ChiroCare Hero Banner"
    >
      {/* Animated Background Logo */}
      <div className="absolute -left-80 lg:-left-80 w-[600px] md:w-[400px] lg:w-[700px] opacity-10 z-[-1] blur-2xl mix-blend-soft-light">
        <Image
          src="/images/logoBIG.png"
          alt={logoAlt}
          width={700}
          height={700}
          className="w-full"
        />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#acf48c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#6EE7B7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#34D399] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-5xl leading-tight">
        {title}
      </h1>

      {/* Supporting Text */}
      <p className="text-gray-600 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
        {description}
      </p>

      {/* Action Buttons with Premium Styling */}
      <div className="relative flex flex-col sm:flex-row items-center gap-6 mt-12">
        {/* Primary CTA Button */}
        <Link
          href="https://wa.me/905464213365"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#acf48c] text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
          aria-label="WhatsApp ile Randevu Al"
        >
          <span className="relative z-10 flex items-center gap-2">
            Bize Ulaşın
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#6EE7B7] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>

        {/* Secondary Link with Premium Styling */}
        <Link
          href="/hakkimizda"
          className="group text-gray-900 font-semibold px-8 py-4 rounded-full border-2 border-gray-300 hover:border-[#acf48c] hover:bg-[#acf48c]/10 transition-all duration-300 transform hover:scale-105"
          aria-label="Hakkımızda sayfasına git"
        >
          <span className="flex items-center gap-2">
            Hakkımızda
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </Link>
      </div>



    </section>
  );
}
