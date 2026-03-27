import Image from "next/image";
import Calvin from '../assets/calvin.png'
import Zara from "../assets/zara.png"
import  Gucci from '../assets/gucci.png'
import Prada from '../assets/prada.png'
import Versace from "../assets/Versace.png"
export default function BrandBanner() {
  return (
    <div className="bg-black py-2">
  <div className="container mx-auto flex items-center justify-between gap-8">
    <div className="relative w-[100px] h-[40px]">
      <Image src={Versace} alt="Versace" fill className="object-contain" />
    </div>
    
    <div className="relative w-[100px] h-[40px]">
      <Image src={Calvin} alt="Calvin" fill className="object-contain" />
    </div>

    <div className="relative w-[100px] h-[40px]">
      <Image src={Zara} alt="Zara" fill className="object-contain" />
    </div>

    <div className="relative w-[100px] h-[40px]">
      <Image src={Gucci} alt="Gucci" fill className="object-contain" />
    </div>

    <div className="relative w-[100px] h-[40px]">
      <Image src={Prada} alt="Prada" fill className="object-contain" />
    </div>

    

  </div>
</div>
  )
}
