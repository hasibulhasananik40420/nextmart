import React, { useState } from 'react'
import Logo from './Logo'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Heart, Menu, ShoppingBagIcon, X } from 'lucide-react'

const MobileMenu = () => {
    const [show, setShow] = useState(false)
    const { data: session } = useSession();
    return (
        <div className='w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl '>

            <div className='flex justify-between items-center h-full px-4 '>
                <div>
                    <Logo />
                </div>
                <div>
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
                                <button onClick={() => signIn()}

                                    className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold"
                                >
                                    Login
                                    <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
                                </button>
                        }


                    </div>
                </div>


                 <div>
                  <Menu onClick={()=>setShow(true)} className='cursor-pointer'/>

                  {
                    show && <>
                     <div className='absolute top-0 right-0 lg:hidden w-full flex flex-col items-start h-screen'>
                       <div className='w-[100%] h-full flex flex-col bg-[#112240] relative'>
                       <X className='text-xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300' onClick={()=>setShow(false)}/>
                      
                       <div className='py-20 px-8 flex flex-col gap-y-4'>
                        <Link onClick={()=>setShow(false)} href={'/'} className='text-xl font-semibold text-white'>
                           Home
                        </Link>  


                        <Link onClick={()=>setShow(false)} href={'/phones'} className='text-xl font-semibold text-white'>
                           Phones
                        </Link>  

                        <Link onClick={()=>setShow(false)} href={'/phonecases'} className='text-xl font-semibold text-white'>
                        Phone Cases
                        </Link>  

                        <Link onClick={()=>setShow(false)} href={'/watches'} className='text-xl font-semibold text-white'>
                        Watches
                        </Link> 

                        <Link onClick={()=>setShow(false)} href={'/accessories'} className='text-xl font-semibold text-white'>
                        Accessories
                        </Link> 

                        </div>                    
                       </div>



                     </div>
                    </>
                  }
                 </div>


            </div>

        </div>
    )
}

export default MobileMenu