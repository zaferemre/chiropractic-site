// REMOVE "use client"; unless required

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

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="mx-auto lg:px-40">
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
