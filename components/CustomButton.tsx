import { CustomButtonProps } from '@/utils/AppType'
import React from 'react'

export default function CustomButton({text}:CustomButtonProps) {
  return (
        <button className="px-6 py-2 bg-white text-black rounded-3xl border border-gray-400 hover:bg-black hover:text-white transition">
         {text}
        </button>
    
  )
}
