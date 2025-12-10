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
  title: "Üsküdar Fizyoterapi Merkezi | ChiroCare - Profesyonel Fizyoterapi Hizmetleri",
  description:
    "Üsküdar'da fizyoterapi merkezi. Bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti. Üsküdar'ın en iyi fizyoterapi merkezi.",
  keywords:
    "Üsküdar fizyoterapi, fizyoterapi Üsküdar, Üsküdar fizyoterapi merkezi, fizyoterapist Üsküdar, bel ağrısı Üsküdar, boyun fıtığı Üsküdar, eklem ağrısı Üsküdar, spor yaralanması Üsküdar, fizyoterapi kliniği Üsküdar, Üsküdar rehabilitasyon merkezi",
  openGraph: {
    title: "Üsküdar Fizyoterapi Merkezi | ChiroCare",
    description:
      "Üsküdar'da profesyonel fizyoterapi hizmetleri. Sağlığınız için uzman fizyoterapi tedavi çözümleri.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/uskudar-fizyoterapi-merkezi",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/uskudar-fizyoterapi-merkezi",
  },
};

export default function UskudarFizyoterapi() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner 
          title={
            <>
              {`Üsküdar'da`}{" "}
              <span className="relative inline-block">
                <span className="text-[#acf48c] relative z-10">Fizyoterapi</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#acf48c] opacity-30 -z-0 transform -skew-x-12"></span>
              </span>{" "}
              Merkezi
            </>
          }
          description="Üsküdar fizyoterapi merkezi olarak bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti sunuyoruz. Üsküdar'da fizyoterapi tedavisi ile sağlığınıza kavuşun."
          logoAlt="Üsküdar Fizyoterapi Merkezi Logo"
        />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <SEOContent location="uskudar-fizyoterapi-merkezi" />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}

