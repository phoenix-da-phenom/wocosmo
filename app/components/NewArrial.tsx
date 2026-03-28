import ItemContainer from "./ItemContainer";
import Img from "../assets/img1.png";

export default function NewArrival() {
  return (
    <div className="container h-[60vh]">
      <div className="py-10">
        <h1 className="text-center font-extrabold">NEW ARRIVAL</h1>
      </div>
      <div className="flex items-center gap-10 justify-center">
        <ItemContainer  srcImage={Img} description="di eurghhien jkweueu kjebdj jabsuuqw aidn" />
         <ItemContainer srcImage={Img} description="jidnjfjd dbhsbew wheybd auhuhey"  />
       <ItemContainer srcImage={Img} description="oppps the dhbsifir wewe" />
        <ItemContainer srcImage={Img} description="bhfdjbjbdjhbjbjsd" />
      </div>
    </div>
  );
}
