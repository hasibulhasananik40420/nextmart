"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../type'
import { ProductType } from './../../type';
import { Minus, Plus, X } from 'lucide-react';
import { deleteProduct } from '@/redux/proSlice';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import FormattedPrice from './FormattedPrice';
import { clsx } from 'clsx';

const Cart = () => {
    const { productData, favoriteData } = useSelector((state: StateProps) => state.pro)
    const dispatch = useDispatch()
    return (
        <div>
            {
                productData.length > 0 ?

                    <div className="mt-5 flex flex-col">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-white uppercase bg-zinc-950">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product Information
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Unit Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            SubTotal
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Saving
                                        </th>
                                    </tr>
                                </thead>

                                {
                                    productData.map((item: ProductType) => (
                                        <tbody key={item?._id}>
                                            <tr className="bg-white border-b-[1px] border-b-zinc-300">
                                                <th scope='row' className="px-6 py-4 flex items-center gap-3">
                                                    <X onClick={() => {
                                                        dispatch(deleteProduct(item?._id)), toast.success(
                                                            `${item.title} is removed from Cart!`
                                                        );
                                                    }}

                                                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                                                    />

                                                    <Image className='w-24 object-contain' src={item?.image} height={500} width={500} alt='' />
                                                    <p className='text-base font-medium text-black'>{item?.title}</p>

                                                </th>

                                                <td className="px-6 py-4">
                                                    <FormattedPrice amount={item?.price} />
                                                </td>

                                                <td className="px-6 py-4 flex items-center gap-4">
                                                    <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                                                        <Minus className='w-4 h-4' />
                                                    </span>

                                                    <span className='font-semibold'>{item?.quantity}</span>

                                                    <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                                                        <Plus className="w-4 h-4" />
                                                    </span>
                                                </td>


                                                <td className="px-6 py-4">
                                                    <FormattedPrice amount={item?.price * item?.quantity} />
                                                </td>


                                                {/* 1 .02 mit */}

                                            </tr>
                                        </tbody>
                                    ))
                                }

                            </table>
                        </div>
                    </div>
                    :
                    <div>
                        <p>Your cart is emptyt continue shopping</p>
                    </div>
            }



            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '',
                        color: ''

                    }
                }}
                reverseOrder={false}
            />
        </div>
    )
}

export default Cart