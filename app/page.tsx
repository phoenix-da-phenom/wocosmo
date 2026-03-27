import Image from "next/image";
import Navbar from './components/Navbar';
import BlackBanner from "./components/BlackBanner";
import HeroComponent from "./components/HeroComponent";
import BrandBanner from "./components/BrandBanner";
import NewArrival from "./components/NewArrial";

export default function Home() {
  return (
    <div>
 <BlackBanner/>
      <Navbar/>
      <HeroComponent/>
      <BrandBanner/>
      <NewArrival/>
 
    </div>
  );
}
