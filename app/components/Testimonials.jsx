"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Geçirdiğim Polimiyozit ve Dermatomiyozit rahatsızlıklarından sonra kaslarım neredeyse tamamen işlevini yitirmişti. Burak Bey'in tedavisi sayesinde kısa sürede vücudum normal haline döndü. Kendisine teşekkür ederim.",
    name: "Ayfer Alsan",
    rating: 5,
  },
  {
    text: "Bir süredir tenisçi dirseğine doğru giden kolum Ahmet hocamın fizyoterapisi sayesinde tekrardan ağrısız ve fonksiyonel hale geldi. İşini iyi bilen, rahat ve nazik biri.",
    name: "Elif Tufan",
    rating: 5,
  },
  {
    text: "1,5 yıl önce beynime pıhtı atmıştı, sağ tarafıma inme nedeniyle hastanede Fizik Tedavimi Burak üstlenmişti. Şefkatli yaklaşımıyla iyi bir yol aldım, Burak hocama çok şey borçluyum.",
    name: "Nihayet Sivri",
    rating: 5,
  },
  {
    text: "Annemin geçirmiş olduğu seri rahatsızlıklarda yardımları sayesinde yeniden yürüyebildi. Kendisine teşekkür ediyorum, emekleri sayesinde ayaktayız.",
    name: "Ali Diren",
    rating: 5,
  },
  {
    text: "Omuz ve sırt ağrımla gitmiştim ve birkaç dakika içerisinde omzumun tutulmasını çözmüştü. Kendisi çok başarılıdır 👏🏻",
    name: "Elif Tokatlıoğlu",
    rating: 5,
  },
  {
    text: "Bilgisi ve davranışları mesleğine olan saygısını öyle gösteriyor ki eminim kısa sürede kendini kanıtlayacak. Teşekkürler!",
    name: "Berran Karahan",
    rating: 5,
  },
  {
    text: "Burak Bey'den aldığım tedavi desteğinden büyük faydalar gördüm. Kendisine çok teşekkür ediyorum.",
    name: "Süslügezginkeçi",
    rating: 5,
  },
  {
    text: "Halısahada bilek bağlarımı zedelemiştim. Ahmet hocam eskisinden iyi hale getirdi 🙏🏻",
    name: "Metehan Aydın",
    rating: 5,
  },
  {
    text: "İyi ki yollarımız kesişmiş; emeğiniz ve profesyonelliğiniz için ne kadar teşekkür etsem az!",
    name: "Begonya Saksısı",
    rating: 5,
  },
  {
    text: "Gerçekten işinde uzman, son derece bilgili ve güleryüzlü bir uzman. Tavsiye ederim.",
    name: "Alev Altuğ",
    rating: 5,
  },
  {
    text: "Burak Bey sayesinde ağrılarım azaldı, kesinlikle tavsiye ediyorum.",
    name: "Fidan Özen",
    rating: 5,
  },
  {
    text: "Sayesinde ağrılarım azaldı, hareket kabiliyetim arttı ve yaşam kalitem düzeldi 🙏",
    name: "Goksin Bicioglu",
    rating: 5,
  },
];

const Testimonials = ({ variant = "carousel" }) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animation;
    if (carousel && !isPaused) {
      animation = setInterval(() => {
        carousel.scrollLeft += 0.5;
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        }
      }, 16);
    }

    return () => {
      clearInterval(animation);
    };
  }, [isPaused]);

  // Grid Tasarımı (Alternatif Premium Tasarım) - Slider ile
  if (variant === "grid") {
    return (
      <section className="relative isolate overflow-hidden lg:px-4 py-16 md:py-24">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>

        {/* Premium Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hasta <span className="text-[#acf48c]">Yorumları</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Yüzlerce mutlu hastamızın deneyimlerinden
          </p>
        </div>

        {/* Premium Slider Layout */}
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-80 md:w-96 lg:w-[380px] relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#acf48c] via-[#6EE7B7] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
                <div className="absolute inset-[2px] rounded-3xl bg-white -z-10"></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#acf48c] via-[#6EE7B7] to-[#34D399] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                {/* Quote Icon - Top Left */}
                <div className="absolute top-6 right-6 w-16 h-16 text-[#acf48c] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Text Content */}
                <blockquote className="text-base font-medium text-gray-700 mb-6 relative z-10 leading-relaxed min-h-[120px] flex items-start">
                  <p className="relative">
                    <span className="absolute -left-3 -top-2 text-[#acf48c] opacity-30 text-4xl font-serif leading-none">&ldquo;</span>
                    <span className="relative z-10">{testimonial.text}</span>
                  </p>
                </blockquote>

                {/* Author Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] p-0.5 group-hover:scale-110 transition-transform duration-500">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-[#acf48c] font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#acf48c] rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="flex-1">
                    <figcaption className="text-base font-bold text-gray-900">
                      {testimonial.name}
                    </figcaption>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150 blur-sm"></div>
                <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-[#6EE7B7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-150 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    );
  }

  // Carousel Tasarımı (Mevcut Tasarım)
  return (
    <section className="relative isolate overflow-hidden lg:px-4 py-16 md:py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>

      {/* Premium Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hasta <span className="text-[#acf48c]">Yorumları</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">
          Yüzlerce mutlu hastamızın deneyimlerinden
        </p>
      </div>

      {/* Premium Carousel */}
      <div
        ref={carouselRef}
        className="mt-10 flex overflow-x-auto space-x-6 pb-6 hide-scrollbar scroll-smooth"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group flex-shrink-0 w-80 md:w-96 p-8 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl text-center flex flex-col items-center justify-between transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#acf48c]/5 to-[#6EE7B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-[#acf48c] opacity-20 text-6xl font-serif">
              {`"`}
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Text Content */}
            <blockquote className="text-base md:text-lg font-medium text-gray-800 flex-grow flex items-center justify-center relative z-10 leading-relaxed">
              <p>{`"${testimonial.text}"`}</p>
            </blockquote>

            {/* Name and Avatar */}
            <div className="mt-6 flex flex-col items-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] p-0.5 mb-3">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#acf48c] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
              <figcaption className="text-base font-bold text-gray-900">
                {testimonial.name}
              </figcaption>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
