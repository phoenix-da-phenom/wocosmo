import { IoMdCheckmark } from "react-icons/io";
const SelectColor= () =>
{
    return (
        <div className="my-5 flex  gap-5 border-b border-b-gray-200 border-t border-t-gray-200 py-5">
                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center"><IoMdCheckmark className="text-white" /></div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
                    <div className="w-10 h-10 rounded-full bg-green-500"></div>
        </div>
    )
}

export default SelectColor