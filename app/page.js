import Image from "next/image";
import Navbar from "./COMMON/Navbar";
import HeroSlider from "./components/HeroSection";
import HomeAbout from "./components/HomeAbout";


export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
      <HeroSlider/>
      <HomeAbout/>
      
      </div>
    </main>
  );
}
