import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import Hero from "../components/Home/Hero";
import SolutionStep from "../components/SolutionStep";
import Testimonials from "../components/Testimonials";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Footer from "../components/Footer";
import CompLogos from "../components/CompLogos";
import TeamSection from "../components/TeamSection";
import BlogPreview from "../components/BlogPreview";
import SEOContent from "../components/SEOContent";

export const metadata = {
  title: "İstanbul Kayropraktik | ChiroCare - Profesyonel Kayropraktik Hizmetleri",
  description:
    "İstanbul'da kayropraktik tedavi hizmetleri. Bel ağrısı, boyun fıtığı, omurga sağlığı ve postür bozuklukları için uzman kayropraktik hizmeti. İstanbul'un en iyi kayropraktik merkezi.",
  keywords:
    "İstanbul kayropraktik, kayropraktik İstanbul, İstanbul kayropraktik doktor, kayropraktik tedavi İstanbul, bel ağrısı İstanbul, boyun fıtığı İstanbul, omurga sağlığı İstanbul, postür bozukluğu İstanbul, kayropraktik merkezi İstanbul, İstanbul kayropraktik kliniği",
  openGraph: {
    title: "İstanbul Kayropraktik | ChiroCare",
    description:
      "İstanbul'da profesyonel kayropraktik hizmetleri. Omurga sağlığınız için uzman kayropraktik tedavi çözümleri.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/istanbul-kayropraktik",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/istanbul-kayropraktik",
  },
};

export default function IstanbulKayropraktik() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner 
          title={
            <>
              İstanbul'da{" "}
              <span className="relative inline-block">
                <span className="text-[#acf48c] relative z-10">Kayropraktik</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#acf48c] opacity-30 -z-0 transform -skew-x-12"></span>
              </span>{" "}
              Tedavisi
            </>
          }
          description="İstanbul'da kayropraktik hizmetleri ile omurga sağlığınızı koruyun. Bel ağrısı, boyun fıtığı, postür bozuklukları ve daha fazlası için İstanbul'un en iyi kayropraktik merkezi. Profesyonel kayropraktik tedavi ile ağrısız bir yaşam sürün."
          logoAlt="İstanbul Kayropraktik Logo"
        />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <SEOContent location="istanbul-kayropraktik" />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}

