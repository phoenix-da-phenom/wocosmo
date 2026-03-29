import Image from "next/image";
import Calvin from '../app/assets/calvin.png'
import Zara from "../app/assets/zara.png"
import  Gucci from '../app/assets/gucci.png'
import Prada from '../app/assets/prada.png'
import Versace from "../app/assets/Versace.png"
export default function BrandBanner() {
  return (
    <div className="bg-black -mt-1 pb-2 ">
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
