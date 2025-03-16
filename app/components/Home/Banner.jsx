import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 lg:px-0 pt-24 pb-8">
      {/* Large Background Logo (Top-Left Corner) */}
      <div className="absolute -left-80 lg:-left-80 w-[600px] md:w-[400px] lg:w-[700px] opacity-20 z-[-1] blur-sm mix-blend-soft-light">
        <img
          src="/images/logoBIG.png"
          alt="Hobby Brands Logo"
          className="w-full"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl  max-w-3xl">
        Vücudunuzun doğal dengesini
        <span className="text-green-600"> yeniden</span> keşfedelim.
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-lg mt-4 max-w-md">
        Sağlıklı bir yaşam için omurganızın dengesini koruyun. Doğru duruş,
        hareket özgürlüğü ve ağrısız bir yaşam için profesyonel fizyoterapi,
        kayropraktik ve pilates hizmetlerimizle yanınızdayız.
      </p>

      {/* Buttons Section */}
      <div className="relative flex items-center gap-6 mt-8">
        {/* Static Curved Arrow SVG */}

        {/* Discover Now Button */}
        <Link
          href="https://api.whatsapp.com/send/?phone=905464213365&text&type=phone_number&app_absent=0&wame_ctl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#acf48c] text-black normal font-semibold px-6 py-3 rounded-full hover:shadow-lg transition"
        >
          Randevu Alın
        </Link>

        {/* Learn More Link */}
        <Link
          href="/hakkimizda"
          className="text-gray-900 normal hover:underline"
        >
          Hakkımızda
        </Link>
      </div>
    </div>
  );
}
