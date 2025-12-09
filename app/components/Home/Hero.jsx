import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 lg:px-0 pt-8 pb-16"
      aria-label="ChiroCare Tanıtım Görselleri ve Video"
    >
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl">
        {[
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
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${
              item.mobileShow ? "block" : "hidden sm:flex"
            }`}
          >
            <div
              className={`relative mx-1 w-44 md:w-56 lg:w-64 h-[400px] md:h-[500px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-lg ${item.offset}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
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
                  className="w-full h-full object-cover"
                >
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Influencer Badge */}
      <aside
        aria-label="Hasta yorumları istatistiği"
        className="absolute bottom-5 left-5 md:bottom-10 md:left-10 bg-white w-44 h-44 p-4 rounded-xl shadow-lg flex flex-col justify-center items-center text-center"
      >
        <div className="flex -space-x-2 mb-3" aria-hidden="true">
          <Image
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://doodleipsum.com/700x700/avatar-2?i=09d1ff61311e1f04032402ba8caead83"
            alt="Hasta profil 1"
            width={48}
            height={48}
          />
          <Image
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://doodleipsum.com/700x700/avatar-2?i=8326df1d1d0d9f677520409402db45c8"
            alt="Hasta profil 2"
            width={48}
            height={48}
          />
          <Image
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://doodleipsum.com/700x700/avatar-2?i=bf8b97258fa53643f64755c68b08041b"
            alt="Hasta profil 3"
            width={48}
            height={48}
          />
        </div>

        <span className="text-sm font-semibold text-gray-900">
          100+ Hasta <br /> Yorumu
        </span>
      </aside>
    </section>
  );
}
