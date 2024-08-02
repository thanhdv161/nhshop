import React from 'react'

type Props = {}

const ShowCart = (props: Props) => {
  return (
    <div>
        <div className="flex items-center justify-between">
        <h2 className="text-[#060709] text-xl/[150%]">Your Cart</h2>
        <p className="text-[#9D9EA2] text-base/[150%] font-light">(3)</p>
        </div>
        <hr className="bg-[#C8C9CB] h-[1px] border-none my-6" />
        <div className="space-y-3">
        <div className="lg:grid grid-cols-2 lg:space-y-0 space-y-3">
            <div className="flex items-center gap-4">
            <a className="border border-[#F4F4F4] rounded-md p-1">
                <img src="./images/products/product2.png" alt="" className="w-10" />
            </a>
            <h4 className="text-[#9D9EA2] text-sm">1x Khalifa Kush (AAAA)</h4>
            </div>
            <div className="flex items-center justify-between lg:ml-0 ml-[54px]">
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                <button id="decrease" className="w-8 h-8 text-sm">-</button>
                <div id="counter" className="bg-[#F4F4F4] rounded w-8 h-8 flex items-center justify-center text-sm">1</div>
                <button id="increase" className="w-8 h-8 text-sm">+</button>
                </div>
                <span className="text-[#060709] text-sm">$120.00</span>
            </div>
            <span className="text-[#9D9EA2] text-sm">$240.00</span>
            </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center lg:space-y-0 space-y-3">
            <div className="ml-[65px]">
            <h4 className="text-[#9D9EA2] text-sm">Add Integra Pack - 4g</h4>
            </div>
            <div className="flex flex-1 items-center justify-between lg:ml-0 ml-[54px]">
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                <button id="decrease" className="w-8 h-8 text-sm">-</button>
                <div id="counter" className="bg-[#F4F4F4] rounded w-8 h-8 flex items-center justify-center text-sm">1</div>
                <button id="increase" className="w-8 h-8 text-sm">+</button>
                </div>
                <span className="text-[#060709] text-sm">$2.00</span>
            </div>
            <span className="text-[#9D9EA2] text-sm">$2.00</span>
            </div>
        </div>
        <div className="flex items-center justify-between ml-[65px] lg:space-y-0 space-y-3 border-t border-[#F4F4F4] mt-4 pt-4 lg:mt-6 lg:pt-6">
            <div className=''>
            <h4 className="text-[#9D9EA2] text-sm">Subtotal</h4>
            </div>
            <span className="text-[#060709] text-sm">$245.00</span>
        </div>
        </div>
        <div className="space-y-3 border-t border-[#F4F4F4] mt-4 pt-4 lg:mt-6 lg:pt-6">
        <div className="lg:grid grid-cols-2 items-center lg:space-y-0 space-y-3">
            <div className="flex items-center gap-4">
            <a className="border border-[#F4F4F4] rounded-md p-1">
                <img src="./images/products/product3.png" alt="" className="w-10" />
            </a>
            <h4 className="text-[#9D9EA2] text-sm">1x Jungle Diamond (AA+)</h4>
            </div>
            <div className="flex flex-1 items-center justify-between lg:ml-0 ml-[54px]">
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                <button id="decrease" className="w-8 h-8 text-sm">-</button>
                <div id="counter" className="bg-[#F4F4F4] rounded w-8 h-8 flex items-center justify-center text-sm">1</div>
                <button id="increase" className="w-8 h-8 text-sm">+</button>
                </div>
                <span className="text-[#060709] text-sm">$200.00</span>
            </div>
            <span className="text-[#060709] text-sm">$200.00</span>
            </div>
        </div>
        </div>
        <div className="space-y-3 border-t border-[#F4F4F4] mt-4 pt-4 lg:mt-6 lg:pt-6">
        <div className="lg:grid grid-cols-2 items-center lg:space-y-0 space-y-3">
            <div className="flex items-center gap-4">
            <a className="border border-[#F4F4F4] rounded-md p-1">
                <img src="./images/products/product4.png" alt="" className="w-10" />
            </a>
            <h4 className="text-[#9D9EA2] text-sm">Shipwreck Edibles Gummy</h4>
            </div>
            <div className="flex flex-1 items-center justify-between lg:ml-0 ml-[54px]">
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                <button id="decrease" className="w-8 h-8 text-sm">-</button>
                <div id="counter" className="bg-[#F4F4F4] rounded w-8 h-8 flex items-center justify-center text-sm">1</div>
                <button id="increase" className="w-8 h-8 text-sm">+</button>
                </div>
                <span className="text-[#060709] text-sm">$13.00</span>
            </div>
            <span className="text-[#060709] text-sm">$52.00</span>
            </div>
        </div>
        </div>
        <hr className="bg-[#F4F4F4] h-[1px] border-none my-6" />
        <hr className="bg-[#F4F4F4] h-[1px] border-none my-6" />
        <div>
        <div className="lg:grid grid-cols-3 gap-x-6">
            <div className="space-y-4"> 
            <h4 className="text-[#17AF26] text-base/[150%]">Delivery</h4>
            <div className="border border-[#F4F4F4] rounded-xl p-4 space-y-4">
                <div className="rounded-full w-12 h-12 p-[13px] bg-[#F2F6F4] ">
                <img src="./svg/icons/transaction-minus.svg" alt="" className='' />
                </div>
                <h4 className="text-[#1A1E26] text-lg/[150%]">Order by 10pm for free next day delivery on Orders overs $100</h4>
                <p className="text-[#717378] text-base/[150%]">We deliver Monday to Saturday - excluding Holidays</p>
            </div>
            </div>
            <div className="space-y-4"> 
            <br className="lg:block hidden" />
            <div className="border border-[#F4F4F4] rounded-xl p-4 space-y-4">
                <div className="rounded-full w-12 h-12 p-[13px] bg-[#F2F6F4] ">
                <img src="./svg/icons/box-time.svg" alt="" />
                </div>
                <h4 className="text-[#1A1E26] text-lg/[150%]">Free next day delivery to stores.</h4>
                <p className="text-[#717378] text-base/[150%]">Home delivery is $4.99 for orders under $100 and is FREE for all orders over $100  </p>
            </div>
            </div>
            <div className="space-y-4 lg:mt-0 mt-5"> 
            <h4 className="text-[#17AF26] text-base/[150%]">Free Returns</h4>
            <div className="border border-[#F4F4F4] rounded-xl p-4 space-y-4">
                <div className="w-12 h-12 p-[13px] bg-[#F2F6F4] rounded-full">
                <img src="./svg/icons/truck-time.svg" alt="" />
                </div>
                <p className="text-[#717378] text-base/[150%]">30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ShowCart