import Image from "next/image";
import Navbar from '../components/Navbar';
import BlackBanner from "../components/BlackBanner";
import HeroComponent from "../components/HeroComponent";
import BrandBanner from "../components/BrandBanner";
import NewArrival from "../components/NewArrial";
import TopSells from "../components/Topsells";
import BrowserBYLifeStyle from "../components/BrowserBYLifeStyle";
import HappyCustomers from "../components/HappyCustomers";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <BlackBanner/>
      <Navbar/>
      <HeroComponent/>
      <BrandBanner/>
      <NewArrival/>
      <TopSells/>
      <BrowserBYLifeStyle/>
       <div className="py-5">
          <h1 className="font-bold py-2 text-center text-2xl">OUR HAPPY CUSTOMERS</h1>
        </div>
        <HappyCustomers/>
        <NewsLetter/>
        <Footer/>
       
 
    </div>
  );
}
