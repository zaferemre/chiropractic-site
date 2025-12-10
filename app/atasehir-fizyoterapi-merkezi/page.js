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
  title: "Ataşehir Fizyoterapi Merkezi | ChiroCare - Profesyonel Fizyoterapi Hizmetleri",
  description:
    "Ataşehir'de fizyoterapi merkezi. Bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti. Ataşehir'in en iyi fizyoterapi merkezi.",
  keywords:
    "Ataşehir fizyoterapi, fizyoterapi Ataşehir, Ataşehir fizyoterapi merkezi, fizyoterapist Ataşehir, bel ağrısı Ataşehir, boyun fıtığı Ataşehir, eklem ağrısı Ataşehir, spor yaralanması Ataşehir, fizyoterapi kliniği Ataşehir, Ataşehir rehabilitasyon merkezi",
  openGraph: {
    title: "Ataşehir Fizyoterapi Merkezi | ChiroCare",
    description:
      "Ataşehir'de profesyonel fizyoterapi hizmetleri. Sağlığınız için uzman fizyoterapi tedavi çözümleri.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/atasehir-fizyoterapi-merkezi",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/atasehir-fizyoterapi-merkezi",
  },
};

export default function AtasehirFizyoterapi() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner 
          title={
            <>
              {`Ataşehir'de`}{" "}
              <span className="relative inline-block">
                <span className="text-[#acf48c] relative z-10">Fizyoterapi</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#acf48c] opacity-30 -z-0 transform -skew-x-12"></span>
              </span>{" "}
              Merkezi
            </>
          }
          description="Ataşehir fizyoterapi merkezi olarak bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti sunuyoruz. Ataşehir'de fizyoterapi tedavisi ile sağlığınıza kavuşun."
          logoAlt="Ataşehir Fizyoterapi Merkezi Logo"
        />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <SEOContent location="atasehir-fizyoterapi-merkezi" />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}

