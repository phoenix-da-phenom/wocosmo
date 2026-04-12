"use client";
import ItemContainer from "./ItemContainer";

type Item = {
  img: string;
  description: string;
  price: number;
  i: number;
  title?: string;
};

export default function ThingsYouMayLike() {
  const data: Item[] = [
    {
      img: "/images/img1.png",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
      price: 3000,
      i: 1,
      title: "j bb jkbjk",
    },
    {
      img: "/images/img2.png",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 3000,
      i: 2,
    },
    {
      img: "/images/img3.png",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 3000,
      i: 3,
    },
    {
      img: "/images/img4.png",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 3000,
      i: 4,
    },
  ];

  const handleShowDetail = (id: number) => {
    console.log("Clicked item:", id);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <ItemContainer
          key={item.i}
          srcImage={item.img}
          title={item.description}
          price={item.price}
          hndClick={() => handleShowDetail(item.i)}
        />
      ))}
    </div>
  );
}