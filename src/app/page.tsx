import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Features3 from "@/components/Features3";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Numbers from "@/components/Numbers";

export default function Home() {
  return (
    <main>
 
      <HeroSection />
      <Features/>
      <Numbers/>
      <Features2/>
      <Features3/>
      <GetStarted/>
    </main>
  );
}
