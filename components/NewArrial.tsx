"use client";
import {useRouter} from 'next/navigation';
import ItemContainer from "./ItemContainer";

const data = [
  { img: "/images/img1.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.", price: 3000, i:1 },
  { img: "/images/img2.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000, i:2  },
  { img: "/images/img3.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000, i:3  },
  { img: "/images/img4.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , i:4 },
  { img: "/images/img5.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , i:5 },
  { img: "/images/img6.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , i:6  },
  { img: "/images/img7.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , i:7 },
  { img: "/images/img8.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 200 , i:8 },
];

export default function NewArrival() {
const router = useRouter();

const handleShowDetail = (key: number)=>{
// Redirect user to selected item description
router.push(`/item/${key}`);



}

  return (
    <div className="container mx-auto px-4 py-10">
      
      {/* Title */}
      <h1 className="text-center font-extrabold text-2xl mb-10">
        NEW ARRIVAL
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <ItemContainer
            key={item.i}
            srcImage={item.img}
            description={item.description}
            price={item.price}
            hndClick = {()=>handleShowDetail(item.i) }
          />
        ))}
      </div>

      {/* Button */}
      <div className="py-10 text-center">
        <button className="px-6 py-2 bg-white text-black rounded-3xl border border-gray-400 hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

      <hr className="border-gray-200" />
    </div>
  );
}