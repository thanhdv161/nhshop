import { bag_2, ticket_2, wallet } from '@/components/icons'
import React from 'react'

type Props = {}

const CartBanner = (props: Props) => {
  return (
    <section>
        <div className="bg-[#F4F4F4] py-4 lg:py-7">
            <div className="container flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] bg-[#05422C] p-2 rounded-full flex items-center">
                    <img src={bag_2} alt="" />
                </div>
                <h4 className="text-[#060709] text-sm/[150%] font-medium">Shopping Cart</h4>
                </div>
                <hr className="bg-[#C3D2CC] h-[1px] border-none w-10 lg:w-[75px]" />
                <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] bg-[#FFF] p-2 rounded-full flex items-center">
                    <img src={wallet} alt="" /> 
                </div>
                <h4 className="text-[#717378] text-sm/[150%] lg:block hidden">Checkout</h4>
                </div>
                <hr className="bg-[#C3D2CC] h-[1px] border-none w-10 lg:w-[75px]" />
                <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] bg-[#FFF] p-2 rounded-full flex items-center">
                    <img src={ticket_2} alt="" /> 
                </div>
                <h4 className="text-[#717378] text-sm/[150%] lg:block hidden">Order Complete</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartBanner