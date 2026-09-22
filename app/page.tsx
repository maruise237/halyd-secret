import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Tips from "@/components/Tips";
import Boutique from "@/components/Boutique";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Services />
        <Differentiators />
        <About />
        <Gallery />
        <Tips />
        <Boutique />
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
