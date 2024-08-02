import React from 'react'

type Props = {}

const YourOrder = (props: Props) => {
  return (
    <main className="pt-6 lg:pt-8 mb-[64px] lg:mb-[100px]">
        <div className="container">
            <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[#060709] text-xl/[150%]">Your Order</h2>
                <div className="flex items-center gap-[6px]">
                <img src="./svg/icons/tick-circle.svg" alt="" />
                <p className="text-[#17AF26] text-base">Paid</p>
                </div>
            </div>
            <hr className="bg-[#C8C9CB] h-[1px] border-none my-6" />
            <div className="space-y-3">
                <div className="lg:grid grid-cols-2 gap-16">
                <div className="flex items-center gap-4">
                    <div className="border border-[#F4F4F4] p-1">
                    <img src="./images/products/product2.png" alt="" className="w-10 h-10" />
                    </div>
                    <p className="text-[#9D9EA2] text-sm/[150%]">1x Khalifa Kush (AAAA)</p>
                </div>
                <div className="flex items-center justify-between lg:ml-0 ml-[65px]">
                    <div className="flex items-center gap-3">
                    <span className="text-[#9D9EA2] text-sm/[150%] font-light">2x</span>
                    <span className="text-[#060709] text-sm/[150%]">$120.00</span>
                    </div>
                    <div>
                    <span className="text-[#9D9EA2] text-sm/[150%]">$240.00</span>
                    </div>
                </div>
                </div>
                <div className="lg:grid grid-cols-2 gap-16 space-y-3 lg:space-y-0">
                <div className="ml-[65px]">
                    <p className="text-[#9D9EA2] text-sm/[150%]">Add Integra Pack - 4g</p>
                </div>
                <div className="flex items-center justify-between lg:ml-0 ml-[65px]">
                    <div className="flex items-center gap-3">
                    <span className="text-[#9D9EA2] text-sm/[150%] font-light">1x</span>
                    <span className="text-[#060709] text-sm/[150%]">$2.00</span>
                    </div>
                    <div>
                    <span className="text-[#9D9EA2] text-sm/[150%]">$2.00</span>
                    </div>
                </div>
                </div>
                <div className="lg:grid grid-cols-2 gap-16 space-y-3 lg:space-y-0">
                <div className="ml-[65px]">
                    <p className="text-[#9D9EA2] text-sm/[150%]">Add Integra Pack - 8g</p>
                </div>
                <div className="flex items-center justify-between lg:ml-0 ml-[65px]">
                    <div className="flex items-center gap-3">
                    <span className="text-[#9D9EA2] text-sm/[150%] font-light">1x</span>
                    <span className="text-[#060709] text-sm/[150%]">$3.00</span>
                    </div>
                    <div>
                    <span className="text-[#9D9EA2] text-sm/[150%]">$3.00</span>
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-between ml-[65px] space-y-3 lg:space-y-0 border-t border-[#F4F4F4] pt-4">
                <div>
                    <p className="text-[#9D9EA2] text-sm/[150%]">Subtotal</p>
                </div>
                <div>
                    <span className="text-[#060709] text-sm/[150%]">$245.00</span>
                </div>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-16 border-t border-[#F4F4F4] mt-4 pt-4 lg:mt-6 lg:pt-6">
                <div className="flex items-center gap-4">
                <div className="border border-[#F4F4F4] p-1">
                    <img src="./images/products/product3.png" alt="" className="w-10 h-10" />
                </div>
                <p className="text-[#9D9EA2] text-sm/[150%]">1x Jungle Diamond (AA+)</p>
                </div>
                <div className="flex items-center justify-between lg:ml-0 ml-[65px]">
                <div className="flex items-center gap-3">
                    <span className="text-[#9D9EA2] text-sm/[150%] font-light">1x</span>
                    <span className="text-[#060709] text-sm/[150%]">$200.00</span>
                </div>
                <div>
                    <span className="text-[#9D9EA2] text-sm/[150%]">$200.00</span>
                </div>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-16 border-t border-[#F4F4F4] mt-4 pt-4 lg:mt-6 lg:pt-6">
                <div className="flex items-center gap-4">
                <div className="border border-[#F4F4F4] p-1">
                    <img src="./images/products/product4.png" alt="" className="w-10 h-10" />
                </div>
                <p className="text-[#9D9EA2] text-sm/[150%]">Shipwreck Edibles Gummy</p>
                </div>
                <div className="flex items-center justify-between lg:ml-0 ml-[65px]">
                <div className="flex items-center gap-3">
                    <span className="text-[#9D9EA2] text-sm/[150%] font-light">4x</span>
                    <span className="text-[#060709] text-sm/[150%]">$13.00</span>
                </div>
                <div>
                    <span className="text-[#9D9EA2] text-sm/[150%]">$52.00</span>
                </div>
                </div>
            </div>
            <div className="flex items-center justify-between border-y border-[#F4F4F4] my-4 py-4 lg:my-6 lg:py-8">
                <h2 className="text-[#060709] text-sm/[150%]">TOTAL</h2>
                <span className="text-[#EB2606] text-xl/[150%] font-medium">$497.00</span>
            </div>
            <div className="lg:grid grid-cols-2 gap-16 space-y-4 lg:space-y-0">
                <div className="col-span-1 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Shipping</span>
                    <span className="text-[#060709] text-sm/[150%]">New York, US</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Shipping Options</span>
                    <span className="text-[#060709] text-sm/[150%]">Same-Day Dispatching</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Email Money Transfer</span>
                    <span className="text-[#060709] text-sm/[150%]">Interac</span>
                </div>
                </div>
                <div className="col-span-1 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Subtotal</span>
                    <span className="text-[#060709] text-sm/[150%]">$497.00</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Discount</span>
                    <span className="text-[#060709] text-sm/[150%]">$0.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Shipping Costs</span>
                    <span className="text-[#060709] text-sm/[150%]">$50.00</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[#9D9EA2] text-sm/[150%]">Point</span>
                    <span className="text-[#060709] text-sm/[150%]">- $250</span>
                </div>
                <div className="flex items-center justify-between border-y border-[#F4F4F4] my-4 py-4">
                    <h2 className="text-[#060709] text-sm/[150%]">TOTAL</h2>
                    <span className="text-[#EB2606] text-xl/[150%] font-medium">$297.00</span>
                </div>
                </div>
            </div>
            <div className="text-center border-t border-[#F4F4F4] my-6 py-6 space-y-6">
                <p className="text-base/[150%] text-[#9D9EA2]">New Order, Click button bellow</p>
                <button className="btn btn-lg lg:w-auto w-full lg:!px-16 !px-5">Shop Now</button>
            </div>
            </div>
        </div>
    </main>
  )
}

export default YourOrder