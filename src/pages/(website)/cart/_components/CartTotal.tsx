import { bank1, bank2, bank3, bank4 } from '@/components/icons'
import React from 'react'

type Props = {}

const CartTotal = (props: Props) => {
  return (
   <section className="lg:mt-0 mt-8">
        <div className="p-6 border border-[#F4F4F4] rounded-2xl">
            <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Subtotal</h4>
                <span className="text-[#060709] text-sm/[150%]">$497.00</span>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Discount</h4>
                <span className="text-[#060709] text-sm/[150%]">$0.0</span>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Shipping Costs</h4>
                <span className="text-[#060709] text-sm/[150%]">$50.00</span>
            </div>
            </div>
            <div className="flex items-center justify-between mt-5 gap-2">
            <input type="text" placeholder="Coupon code" className="px-6 py-3 rounded-lg border border-[#F4F4F4] text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%] lg:w-auto w-6/12" /> 
            <button className="text-[#17AF26] text-sm font-medium px-5 py-3 rounded-full hover:bg-[#F3FBF4]">Apply Coupon</button>
            </div>
            <div className="border-y border-[#F4F4F4] mt-5 pt-4">
            <div className="flex w-full h-2 bg-[#F4F4F4] rounded-full mb-[16px]">
                <div className="w-7/12 bg-[#17AF26] rounded-full" />
            </div>
            <p className="text-[#717378] text-sm/[150%]">Get <span className="font-medium">Free</span> <span className="font-medium text-[#1A1E26]">Shipping</span> for orders over <span className="text-[#EB2606]">$100.00</span></p>
            <p className="text-[#1A1E26] text-sm/[150%] underline font-medium mt-[6px]">Continue Shopping</p>
            <button className="btn btn-lg !bg-[#C8C9CB] mt-5 lg:!h-[56px] lg:!leading-[56px] !leading-[48px] !h-[48px] lg:!px-[100px] !px-[10px] lg:!text-base !text-sm hover:!bg-gray-400 w-full">Checkout <span className="px-4">|</span> <span>$547.00</span></button>
            </div>
            <div className="space-y-4 mt-5">
            <h4 className="text-[#717378] text-[12px]/[150%] tracking-[1px] font-light">SECURE PAYMENTS PROVIDED BY</h4>
            <div className="flex items-center gap-3">
                <a href="" className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src={bank3} alt="" />
                </a>
                <a href="" className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src={bank4} alt="" />
                </a>
                <a href="" className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src={bank2} alt="" />
                </a>
                <a href="" className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src={bank1} alt="" />
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default CartTotal