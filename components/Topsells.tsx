import ItemContainer from "./ItemContainer";

const data = [
<<<<<<< HEAD
  { img: "/images/img1.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.", price: 3000 },
  { img: "/images/img2.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 },
  { img: "/images/img3.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 },
  { img: "/images/img4.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 },
  { img: "/images/img5.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 },
  { img: "/images/img6.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 },
  { img: "/images/img7.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 },
  { img: "/images/img8.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 200 },
=======
  { img: "/images/img1.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.", price: 3000, id:1 },
  { img: "/images/img2.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , id:2},
  { img: "/images/img3.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , id:3},
  { img: "/images/img4.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , id:4},
  { img: "/images/img5.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , id:5},
  { img: "/images/img6.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , id:6},
  { img: "/images/img7.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 3000 , id:7},
  { img: "/images/img8.png", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 200  , id:8},
>>>>>>> 298941e (Last working commit..lol)
];

export default function TopSells() {
  return (
    <div className="container mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-center font-extrabold text-2xl mb-10">
        TOP SELLING
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
        {data.slice(3).map((item) => (
=======
        {data.map((item) => (
>>>>>>> 298941e (Last working commit..lol)
          <ItemContainer
            key={item.id}
            srcImage={item.img}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      {/* Button */}
      <div className="py-10 text-center">
        <button className="px-6 py-2 bg-white text-black rounded-3xl border border-gray-400 hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

    </div>
  );
}