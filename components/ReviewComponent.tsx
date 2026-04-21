import React from 'react'
import Filter from "../app/assets/filter.svg"
import Image from 'next/image'
import { RxCaretDown } from "react-icons/rx";

export default function ReviewComponent() {
  return (
    <div className='flex items-center gap-5'>
        <div className='w-[48px] h-[48px] rounded-full p-4 bg-gray-200'>
            <Image src={Filter} width={24} height={24} alt="filter"/>
        </div>
        <div className='flex items-center gap-3 bg-gray-200 p-3 px-4 rounded-4xl'>
            <span>Latest</span>
            <span><RxCaretDown /></span>

        </div>
        <div>
            <button className="bg-black text-white py-3 px-4 rounded-3xl">Write a Review</button>

        </div>


    </div>
  )
}
