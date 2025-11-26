import Image from "next/image";
import Navbar from "./COMMON/Navbar";
import HeroSlider from "./components/HeroSection"; 

export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
      <HeroSlider/>
      
      </div>
    </main>
  );
}
