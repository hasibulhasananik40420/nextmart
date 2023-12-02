"use client"
import React from 'react'
import { ProductType, StateProps } from '../../type'
import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import FormattedPrice from './FormattedPrice'
import {  useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFavorite } from '@/redux/proSlice'
import toast, { Toaster } from 'react-hot-toast';

interface Item {
  products: ProductType[]
}

const Product = ({ products }: Item) => {
  const {productData,favoriteData} = useSelector((state:StateProps)=> state.pro)

   const isFavorite = (productData:any)=>{
      return favoriteData.some((favoriteItem)=> favoriteItem._id === productData)
   }


  const dispatch = useDispatch()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 py-10 '>
      {
        products.map((item) => (
          <div key={item._id} className='relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden'>
            <Link href={{pathname:`/${item?._id}`, query:{_id:item?._id}}}>
              <Image src={item.image} height={500} width={500} alt='' className='w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300' />
            </Link>


            
            <Heart
            fill={isFavorite(item._id) ? "red" : "black"}
            onClick={() => {
              dispatch(addToFavorite(item));
              if (isFavorite(item?._id)) {
                toast.error(`${item.title} removed from favorites!`);
              } else {
                toast.success(`${item.title} added to favorites!`);
              }
            }}
            className="absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200"
          />

            <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
              <p className="group-hover:text-designColor duration-300">
                {item?.title}
              </p>

              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>

              <div className="flex items-center justify-between text-sm mt-2">
              <button onClick={()=>{dispatch(addToCart(item)), toast.success(`${item?.title} is added to Cart`)}} className="uppercase font-semibold hover:text-designColor duration-300">
                Add to cart
              </button>
              <Link
                className="uppercase font-semibold hover:text-designColor duration-300"
                href={{pathname:`/${item?._id}`, query:{_id:item?._id}}}
              >
                More Info
              </Link>
            </div>

            </div>


          </div>
        ))
      }
      <Toaster
  position="top-right"
  toastOptions={{
    style:{
      background:'',
      color:''
  
  }
  }}
  reverseOrder={false}
/>
    </div>
  )
}

export default Product