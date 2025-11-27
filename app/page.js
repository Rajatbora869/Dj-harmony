import Image from "next/image";
import Navbar from "./COMMON/Navbar";
import HeroSlider from "./components/HeroSection";
import HomeAbout from "./components/HomeAbout";
import HomeServices from "./components/HomeService";
import HomeGallery from "./components/Gallery";
import HomeBlogs from "./components/Blogs";
import PerfectShow from "./components/Book";
import InstrumentsSection from "./components/InstrumentsSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./COMMON/Footer";


export default function Home() {
  return (
    <main>
      <div>
      <Navbar/>
      <HeroSlider/>
      <HomeAbout/>
       <HomeServices/> 
      <HomeGallery/>
      <HomeBlogs/>
      <PerfectShow/>
      <InstrumentsSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
      
      </div>
    </main>
  );
}
