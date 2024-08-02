import React from 'react'

type Props = {}

const CheckoutTotalPrice = (props: Props) => {
  return (
    <section className="lg:mt-0 mt-8">
        <div className="p-6 border border-[#F4F4F4] rounded-2xl">
            <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Subtotal</h4>
                <span className="text-[#060709] text-sm/[150%]">$497.00</span>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Shipping</h4>
                <span className="text-[#060709] text-sm/[150%]">New York, US</span>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Discount</h4>
                <span className="text-[#060709] text-sm/[150%]">$0.0</span>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Shipping Costs</h4>
                <span className="text-[#060709] text-sm/[150%]">$50.00</span>
            </div>
            <div className="flex items-center justify-between border-t border-[#F4F4F4] mt-5 pt-5">
                <h4 className="text-[#9D9EA2] text-sm/[150%]">Email Money Transfer</h4>
                <img src="./svg/bank1.svg" alt='' />
            </div>
            </div>
            <div className="flex items-center justify-between mt-5 gap-2">
            <input type="text" placeholder="Coupon code" className="px-6 py-3 rounded-lg border border-[#F4F4F4] text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%] lg:w-auto w-6/12" /> 
            <button className="text-[#17AF26] text-sm font-medium px-5 py-3 rounded-full hover:bg-[#F3FBF4]">Apply Coupon</button>
            </div>
            <div className="border-y border-[#F4F4F4] my-5 py-5">
            <div className="custom-checkbox flex gap-3">
                <input type="checkbox" />
                <p className="text-[#717378] text-sm/[150%] w-11/12">I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect address. *</p>
            </div>
            <div className="custom-checkbox flex gap-3 mt-5">
                <input type="checkbox" />
                <p className="text-[#717378] text-sm/[150%] w-11/12">Sign me up to receive email updates and news (optional)</p>
            </div>
            </div>
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src="./svg/icons/point.svg" alt='' />
                <p className="text-[#9D9EA2] text-sm/[150%]">Your point</p>
                <span className="text-[#060709] text-sm/[150%]">10.850</span>
            </div>
            <div>
                <div className="checkbox-wrapper-6">
                <input className="tgl tgl-light " id="cb1-6" type="checkbox" />
                <label className="tgl-btn" htmlFor="cb1-6">
                </label></div>
            </div>
            </div>
            <div>
            <button className="btn btn-lg !bg-[#C8C9CB] mt-5 lg:!h-[56px] lg:!leading-[56px] !leading-[48px] !h-[48px] lg:!px-[100px] !px-[10px] lg:!text-base !text-sm hover:!bg-gray-400 w-full">Place Order <span className="px-4">|</span> <span>$547.00</span></button>
            </div>
            <div className="space-y-4 mt-5">
            <h4 className="text-[#717378] text-[12px]/[150%] tracking-[1px] font-light">SECURE PAYMENTS PROVIDED BY</h4>
            <div className="flex items-center gap-3">
                <a href='' className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src="./svg/bank3.svg" alt='' />
                </a>
                <a href='' className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src="./svg/bank4.svg" alt='' />
                </a>
                <a href='' className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src="./svg/bank2.svg" alt='' />
                </a>
                <a href='' className="border border-[#F4F4F4] rounded-md w-[56px] h-[32px] flex items-center justify-center">
                <img src="./svg/bank1.svg" alt='' />
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default CheckoutTotalPrice