// REMOVE "use client"; unless required

import Header from "./components/Header";
import Banner from "./components/Home/Banner";
import SolutionStep from "./components/SolutionStep";
import Testimonials from "./components/Testimonials";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";
import CompLogos from "./components/CompLogos";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <BackgroundWrapper>
      <Header />
      <div className="mx-auto lg:px-8">
        <Banner />
        <CompLogos />
        <Testimonials />
        <TeamSection />
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}
