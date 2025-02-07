"use client";
import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    text: "Geçirdiğim Polimiyozit ve Dermatomiyozit rahatsızlıklarından sonra kaslarım neredeyse tamamen işlevini yitirmişti. Burak Bey’in tedavisi sayesinde kısa sürede vücudum normal haline döndü. Kendisine teşekkür ederim.",
    name: "Ayfer Alsan",
  },
  {
    text: "Bir süredir tenisçi dirseğine doğru giden kolum Ahmet hocamın fizyoterapisi sayesinde tekrardan ağrısız ve fonksiyonel hale geldi. İşini iyi bilen, rahat ve nazik biri.",
    name: "Elif Tufan",
  },
  {
    text: "1,5 yıl önce beynime pıhtı atmıştı, sağ tarafıma inme nedeniyle hastanede Fizik Tedavimi Burak üstlenmişti. Şefkatli yaklaşımıyla iyi bir yol aldım, Burak hocama çok şey borçluyum.",
    name: "Nihayet Sivri",
  },
  {
    text: "Annemin geçirmiş olduğu seri rahatsızlıklarda yardımları sayesinde yeniden yürüyebildi. Kendisine teşekkür ediyorum, emekleri sayesinde ayaktayız.",
    name: "Ali Diren",
  },
  {
    text: "Omuz ve sırt ağrımla gitmiştim ve birkaç dakika içerisinde omzumun tutulmasını çözmüştü. Kendisi çok başarılıdır 👏🏻",
    name: "Elif Tokatlıoğlu",
  },
  {
    text: "Bilgisi ve davranışları mesleğine olan saygısını öyle gösteriyor ki eminim kısa sürede kendini kanıtlayacak. Teşekkürler!",
    name: "Berran Karahan",
  },
  {
    text: "Burak Bey’den aldığım tedavi desteğinden büyük faydalar gördüm. Kendisine çok teşekkür ediyorum.",
    name: "Süslügezginkeçi",
  },
  {
    text: "Halısahada bilek bağlarımı zedelemiştim. Ahmet hocam eskisinden iyi hale getirdi 🙏🏻",
    name: "Metehan Aydın",
  },
  {
    text: "İyi ki yollarımız kesişmiş; emeğiniz ve profesyonelliğiniz için ne kadar teşekkür etsem az!",
    name: "Begonya Saksısı",
  },
  {
    text: "Gerçekten işinde uzman, son derece bilgili ve güleryüzlü bir uzman. Tavsiye ederim.",
    name: "Alev Altuğ",
  },
  {
    text: "Burak Bey sayesinde ağrılarım azaldı, kesinlikle tavsiye ediyorum.",
    name: "Fidan Özen",
  },
  {
    text: "Sayesinde ağrılarım azaldı, hareket kabiliyetim arttı ve yaşam kalitem düzeldi 🙏",
    name: "Goksin Bicioglu",
  },
];

const Testimonials = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animation;
    if (carousel) {
      animation = setInterval(() => {
        carousel.scrollLeft += 1; // Adjust speed here
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0; // Reset scroll
        }
      }, 20); // Animation speed
    }

    return () => {
      clearInterval(animation);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden lg:px-4 py-10">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
        Hasta Yorumları
      </h2>
      <div
        ref={carouselRef}
        className="mt-10 flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
        onMouseEnter={() =>
          (carouselRef.current.style.animationPlayState = "paused")
        }
        onMouseLeave={() =>
          (carouselRef.current.style.animationPlayState = "running")
        }
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-6 bg-white border rounded-lg shadow-lg text-center flex flex-col items-center justify-between"
          >
            {/* Text Centered in Y-Axis */}
            <blockquote className="text-lg font-semibold text-gray-900 flex-grow flex items-center justify-center">
              <p>“{testimonial.text}”</p>
            </blockquote>
            {/* Name at the Bottom */}
            <figcaption className="mt-6 text-base font-semibold text-green-600">
              {testimonial.name}
            </figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
