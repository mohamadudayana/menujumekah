import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const Landing = () => {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Packages />
        <Countdown />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Landing;
