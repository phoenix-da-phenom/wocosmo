"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function BlackBanner() {
    const pathName = usePathname();
  return (
  
    <div className="bg-black text-white text-center text-sm md:text-[12px] py-1">
        
        Sign up and get 20% off to your first order. <Link href={pathName==="/sign-up"? '/sign-in': '/sign-up'} className='text-blue-500'>{pathName ==="/sign-up"? "Sign in": "Sign Up Now"} </Link> </div>
  )
}
