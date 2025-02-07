import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative isolate rounded-lg shadow-lg overflow-hidden sm:py-16 m-4">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-20 pb-10 px-6 lg:px-8">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Vücudunuzun <span className="text-green-600">Doğal</span> Dengesini
            Bulun
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sağlıklı bir yaşam için omurganızın dengesini koruyun. Doğru duruş,
            hareket özgürlüğü ve ağrısız bir yaşam için profesyonel kayropraktik
            ve pilates hizmetlerimizle yanınızdayız.
          </p>
          <div className="mt-8 flex items-center gap-x-4">
            <a
              href="tel:05464213365"
              className="rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Randevu Alın
            </a>
            <Link
              href="/hakkimizda"
              className="text-sm font-semibold text-gray-900 hover:underline"
            >
              Hakkımızda <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Image Grid with 4 Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/Chiro3.jpeg"
            alt="Omurga Sağlığı"
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/Chiro2.jpeg"
            alt="Kas ve Eklem Terapisi"
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/Chiro1.jpeg"
            alt="Profesyonel Kayropraktik Hizmeti"
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/Eda1.jpeg"
            alt="Ağrısız Hareket Özgürlüğü"
          />
        </div>
      </div>
    </div>
  );
}
