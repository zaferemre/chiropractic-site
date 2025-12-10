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
  title: "Maltepe Fizyoterapi Merkezi | ChiroCare - Profesyonel Fizyoterapi Hizmetleri",
  description:
    "Maltepe'de fizyoterapi merkezi. Bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti. Maltepe'nin en iyi fizyoterapi merkezi.",
  keywords:
    "Maltepe fizyoterapi, fizyoterapi Maltepe, Maltepe fizyoterapi merkezi, fizyoterapist Maltepe, bel ağrısı Maltepe, boyun fıtığı Maltepe, eklem ağrısı Maltepe, spor yaralanması Maltepe, fizyoterapi kliniği Maltepe, Maltepe rehabilitasyon merkezi",
  openGraph: {
    title: "Maltepe Fizyoterapi Merkezi | ChiroCare",
    description:
      "Maltepe'de profesyonel fizyoterapi hizmetleri. Sağlığınız için uzman fizyoterapi tedavi çözümleri.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/maltepe-fizyoterapi-merkezi",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/maltepe-fizyoterapi-merkezi",
  },
};

export default function MaltepeFizyoterapi() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner 
          title={
            <>
              Maltepe'de{" "}
              <span className="relative inline-block">
                <span className="text-[#acf48c] relative z-10">Fizyoterapi</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#acf48c] opacity-30 -z-0 transform -skew-x-12"></span>
              </span>{" "}
              Merkezi
            </>
          }
          description="Maltepe fizyoterapi merkezi olarak bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti sunuyoruz. Maltepe'de fizyoterapi tedavisi ile sağlığınıza kavuşun."
          logoAlt="Maltepe Fizyoterapi Merkezi Logo"
        />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <SEOContent location="maltepe-fizyoterapi-merkezi" />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}

