import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 lg:px-0 pt-24 pb-8"
      aria-label="ChiroCare Hero Banner"
    >
      {/* Background Logo */}
      <div className="absolute -left-80 lg:-left-80 w-[600px] md:w-[400px] lg:w-[700px] opacity-20 z-[-1] blur-sm mix-blend-soft-light">
        <img
          src="/images/logoBIG.png"
          alt="ChiroCare Kadıköy Kayropraktik Logo"
          className="w-full"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-w-3xl">
        Vücudunuzun doğal dengesini
        <span className="text-[#acf48c]"> yeniden</span> keşfedelim.
      </h1>

      {/* Supporting Text */}
      <p className="text-gray-600 text-lg mt-4 max-w-md">
        Sağlıklı bir yaşam için omurganızın dengesini koruyun. Doğru duruş,
        hareket özgürlüğü ve ağrısız bir yaşam için profesyonel fizyoterapi,
        kayropraktik ve pilates hizmetlerimizle yanınızdayız.
      </p>

      {/* Action Buttons */}
      <div className="relative flex items-center gap-6 mt-8">
        {/* CTA Button */}
        <Link
          href="https://api.whatsapp.com/send/?phone=905464213365&text&type=phone_number&app_absent=0&wame_ctl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#acf48c] text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition"
          aria-label="WhatsApp ile Randevu Al"
        >
          Randevu Alın
        </Link>

        {/* Secondary Link */}
        <Link
          href="/hakkimizda"
          className="text-gray-900 hover:underline"
          aria-label="Hakkımızda sayfasına git"
        >
          Hakkımızda
        </Link>
      </div>
    </section>
  );
}
