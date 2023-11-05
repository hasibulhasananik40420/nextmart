"use client"
import React from 'react'
import Logo from './Logo'
import { navigation } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Heart, ShoppingBagIcon } from 'lucide-react'
import { signIn,useSession } from 'next-auth/react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();


  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl ">

     <div className='lg:block hidden'>
     <div className='max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-4 xl:px-4 2xl:px-0 h-20'>
        {/* Logo */}
        <Logo />

        {/* Navigation */}

        <ul className="flex items-center gap-5 text-sm uppercase font-semibold">
          {navigation.map((item) => (
            <Link href={item?.href} key={item._id}>
              <li
                className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${item.href === pathname && "text-designColor"
                  }`}
              >
                {item?.title}
                <span
                  className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${item.href === pathname && "translate-x-0 bg-designColor"
                    }`}
                />
              </li>
            </Link>
          ))}
        </ul>

        {/* icons */}

        <div className='flex items-center gap-x-5'>

          <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <Heart className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              0
            </span>
          </Link>

          <Link
            href={"/cart"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            <ShoppingBagIcon className="w-7 h-7" />
            <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
              0
            </span>
          </Link>



         {
          session ? 
          <Link href={'profile'}

          className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold"
        >
          Profile
          <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
        </Link>
        : 
        <button onClick={()=>signIn()}

        className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold"
      >
        Login
        <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
      </button>
         }


        </div>

      </div>
     </div>

       <div className='2xl:hidden lg:hidden block '>
         <MobileMenu/>
       </div>

    </div>
  )
}

export default Navbar