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
  title: "İstanbul Fizyoterapi Merkezi | ChiroCare - Profesyonel Fizyoterapi Hizmetleri",
  description:
    "İstanbul'da fizyoterapi merkezi. Bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti. İstanbul'un en iyi fizyoterapi merkezi.",
  keywords:
    "İstanbul fizyoterapi, fizyoterapi İstanbul, İstanbul fizyoterapi merkezi, fizyoterapist İstanbul, bel ağrısı İstanbul, boyun fıtığı İstanbul, eklem ağrısı İstanbul, spor yaralanması İstanbul, fizyoterapi kliniği İstanbul, İstanbul rehabilitasyon merkezi",
  openGraph: {
    title: "İstanbul Fizyoterapi Merkezi | ChiroCare",
    description:
      "İstanbul'da profesyonel fizyoterapi hizmetleri. Sağlığınız için uzman fizyoterapi tedavi çözümleri.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/istanbul-fizyoterapi-merkezi",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/istanbul-fizyoterapi-merkezi",
  },
};

export default function IstanbulFizyoterapi() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner 
          title={
            <>
              {`İstanbul'da`}{" "}
              <span className="relative inline-block">
                <span className="text-[#acf48c] relative z-10">Fizyoterapi</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#acf48c] opacity-30 -z-0 transform -skew-x-12"></span>
              </span>{" "}
              Merkezi
            </>
          }
          description="İstanbul fizyoterapi merkezi olarak bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti sunuyoruz. İstanbul'da fizyoterapi tedavisi ile sağlığınıza kavuşun."
          logoAlt="İstanbul Fizyoterapi Merkezi Logo"
        />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <SEOContent location="istanbul-fizyoterapi-merkezi" />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}

