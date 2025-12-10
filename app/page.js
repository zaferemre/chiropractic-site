import Header from "./components/Header";
import Banner from "./components/Home/Banner";
import Hero from "./components/Home/Hero";
import SolutionStep from "./components/SolutionStep";
import Testimonials from "./components/Testimonials";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";
import CompLogos from "./components/CompLogos";
import TeamSection from "./components/TeamSection";
import BlogPreview from "./components/BlogPreview";

export const metadata = {
  title: "ChiroCare Kadıköy | Kayropraktik, Fizyoterapi ve Pilates",
  description:
    "ChiroCare, Kadıköy'deki uzman kayropraktik ve fizyoterapi merkezi. Bel-boyun ağrıları, postür bozuklukları ve daha fazlası için doğru adres.",
  keywords:
    "kayropraktik, fizyoterapi, bel ağrısı, boyun fıtığı, Kadıköy, ChiroCare, postür bozukluğu",
  openGraph: {
    title: "ChiroCare Kadıköy",
    description:
      "Doğal dengenizi yeniden keşfedin. Kayropraktik ve fizyoterapi hizmetlerimizle sağlığınızı destekleyin.",
    images: ["/images/logoBIG.png"],
    url: "https://www.ahmetburakbayir.com/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ahmetburakbayir.com/",
  },
};

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="w-full">
        <Header />
        <Banner />
        <Hero />
        <CompLogos />
        <Testimonials />
        <BlogPreview />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}
