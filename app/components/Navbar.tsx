import Image from "next/image";
import Logo from '../assets/logo.png'

export default function Navbar (){

    return(
        <div className="container flex">
           <div><Image src={Logo} height={40} width={120} alt="logo"/> </div>
            <div className="flex items-center">
                <ul className="text-[var(--text-large)] flex gap-10">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </div>
            <div>
                <input />
            </div>

        </div>

    )
            

}