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
  title: "Ümraniye Fizyoterapi Merkezi | ChiroCare - Profesyonel Fizyoterapi Hizmetleri",
  description:
    "Ümraniye'de fizyoterapi merkezi. Bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti. Ümraniye'nin en iyi fizyoterapi merkezi.",
  keywords:
    "Ümraniye fizyoterapi, fizyoterapi Ümraniye, Ümraniye fizyoterapi merkezi, fizyoterapist Ümraniye, bel ağrısı Ümraniye, boyun fıtığı Ümraniye, eklem ağrısı Ümraniye, spor yaralanması Ümraniye, fizyoterapi kliniği Ümraniye, Ümraniye rehabilitasyon merkezi",
  openGraph: {
    title: "Ümraniye Fizyoterapi Merkezi | ChiroCare",
    description:
      "Ümraniye'de profesyonel fizyoterapi hizmetleri. Sağlığınız için uzman fizyoterapi tedavi çözümleri.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/umraniye-fizyoterapi-merkezi",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/umraniye-fizyoterapi-merkezi",
  },
};

export default function UmraniyeFizyoterapi() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner 
          title={
            <>
              Ümraniye'de{" "}
              <span className="relative inline-block">
                <span className="text-[#acf48c] relative z-10">Fizyoterapi</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#acf48c] opacity-30 -z-0 transform -skew-x-12"></span>
              </span>{" "}
              Merkezi
            </>
          }
          description="Ümraniye fizyoterapi merkezi olarak bel ağrısı, boyun fıtığı, eklem ağrıları ve spor yaralanmaları için uzman fizyoterapi hizmeti sunuyoruz. Ümraniye'de fizyoterapi tedavisi ile sağlığınıza kavuşun."
          logoAlt="Ümraniye Fizyoterapi Merkezi Logo"
        />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <SEOContent location="umraniye-fizyoterapi-merkezi" />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}

