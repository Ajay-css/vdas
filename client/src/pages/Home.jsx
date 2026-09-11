import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/ServicesSection";
import RecentWorks from "../components/RecentWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import BottomNavbar from "../components/BottomNavbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Services />
        <RecentWorks />
        <WhyChooseUs />
        <Testimonials />
      </main>

      <Footer />
      <BottomNavbar />
    </>
  );
}