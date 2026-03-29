import ItemContainer from "./ItemContainer";


const data =[
  {img:"/images/img1.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae." ,price:3000},
   {img:"/images/img2.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit." ,price:3000},
    {img:"/images/img3.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit." ,price:3000},
     {img:"/images/img4.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit." ,price:3000},
      {img:"/images/img5.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit." ,price:3000},
       {img:"/images/img6.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit." ,price:3000},
        {img:"/images/img7.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit." ,price:3000}, 
         {img:"/images/img8.png",description:"lorem ipsum dolor sit amet consectetur adipisicing elit.", price:200},

 

]

export default function NewArrival() {
  return (
    <div className="container h-[80vh]">
      <div className="py-10">
        <h1 className="text-center font-extrabold">NEW ARRIVAL</h1>
      </div>
      <div className="flex items-center gap-10 justify-center">
        {data.slice(0,4).map((item) => (
          <ItemContainer
            key={item.img}
            srcImage={item.img}
            description={item.description}
            price={item.price}
          />
          
        ))}

        
      
        
      </div>
      <div className="py-10 text-center">
          <button className="px-5 py-2 bg-white text-black rounded-3xl border border-gray-400 cursor-pointer">
            View All
          </button>
        </div>
        <hr className="border border-gray-200"/>
    </div>
  );
}
