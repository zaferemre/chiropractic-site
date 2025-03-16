export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 lg:px-0 pt-8 pb-16">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl ">
        {[
          {
            type: "image",
            src: "/images/Chiro1.jpeg",
            offset: "translate-y-6",
            mobileShow: true, // This image will be shown on mobile
          },
          {
            type: "image",
            src: "/images/Chiro2.jpeg",
            offset: "-translate-y-6",
            mobileShow: false,
          },
          {
            type: "video",
            src: "/videos/KuzChiro.mp4",
            offset: "translate-y-6",
            mobileShow: true, // The video will always be visible on mobile
          },
          {
            type: "image",
            src: "/images/Eda1.jpeg",
            offset: "-translate-y-6",
            mobileShow: false,
          },
          {
            type: "image",
            src: "/images/Chiro3.jpeg",
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
            {/* Black Vertical Line (Hidden on First Element) */}
            {index !== 0 && (
              <div className="w-[2px] h-[500px] bg-black hidden sm:block"></div>
            )}

            {/* Image or Video Container */}
            <div
              className={`relative mx-1 w-44 md:w-56 lg:w-64 h-[400px] md:h-[500px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-lg ${item.offset}`}
            >
              {/* Render Image or Video */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Hero image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 10K+ Influencer Badge */}
      <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 bg-white w-44 h-44 p-4 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
        {/* Profile Images */}
        <div className="flex -space-x-2 mb-3">
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://doodleipsum.com/700x700/avatar-2?i=09d1ff61311e1f04032402ba8caead83"
            alt="User 1"
          />
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://doodleipsum.com/700x700/avatar-2?i=8326df1d1d0d9f677520409402db45c8"
            alt="User 2"
          />
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://doodleipsum.com/700x700/avatar-2?i=bf8b97258fa53643f64755c68b08041b"
            alt="User 3"
          />
        </div>

        {/* Text */}
        <span className="text-sm font-semibold text-gray-900">
          100+ Hasta <br /> Yorumu
        </span>
      </div>
    </section>
  );
}
