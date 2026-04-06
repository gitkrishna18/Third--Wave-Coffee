import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import TopPicks from "@/components/TopPicks";
import Menu from "@/components/Menu";
import CoffeeExperience from "@/components/CoffeeExperience";
import Ambience from "@/components/Ambience";
import OnlineOrder from "@/components/OnlineOrder";
import Visit from "@/components/Visit";
import WalkIn from "@/components/WalkIn";
import Testimonials from "@/components/Testimonials";
import Loyalty from "@/components/Loyalty";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <TopPicks />
        <Menu />
        <CoffeeExperience />
        <Ambience />
        <OnlineOrder />
        <Visit />
        <WalkIn />
        <Testimonials />
        <Loyalty />
      </main>
      <Footer />
    </>
  );
}
