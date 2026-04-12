import SizeBadge from "./SizeBadge";


export default function ChooseSize() {
  return (
    <div className="flex items-center gap-5 border-b-gray-200 pb-5 border-b">
        <SizeBadge text="Small" color={"gray"}/>
         <SizeBadge text="Medium" color={"gray"}/>
         <SizeBadge text="Large" color={"black"}/>
         <SizeBadge text="X-Large" color={"gray"}/>
    </div>
  )
}
