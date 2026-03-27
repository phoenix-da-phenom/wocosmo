import ItemContainer from "./ItemContainer";
import Img from "../assets/img1.png";

export default function NewArrival() {
  return (
    <div className="container h-[60vh]">
      <div className="py-10">
        <h1 className="text-center font-bold">NEW ARRIVAL</h1>
      </div>
      <div className="flex items-center gap-10 justify-center">
        <ItemContainer  srcImage={Img} description="" />
         <ItemContainer srcImage={Img} description="" />
       <ItemContainer srcImage={Img} description="" />
        <ItemContainer srcImage={Img} description="" />
      </div>
    </div>
  );
}
