import { bank1, bank2, bank3, bank4, Logo_footer } from '@/components/icons'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
<div>
  <section className="relative -mb-[178px] lg:-mb-[229px] z-10">
    <div className="container">
      <div className="bg-[#05422C] lg:h-[458px] rounded-3xl p-6 lg:p-[64px]">
        <h2 className="text-white text-[32px]/[120%] -tracking-[1.5px] lg:text-[64px]/[110%] lg:-tracking-[4px] font-semibold w-9/12">UNLOCK 20% OFF YOUR FIRST ORDER</h2>
        <p className="text-[#C3D2CC] text-sm/[150%] lg:text-xl/[150%] mt-4 lg:mt-6">Reveal coupon code by entering your email</p>
        <hr className="bg-[#346654] h-[1px] border-none my-4 lg:my-8" />
        <form className="lg:flex items-center lg:space-x-8">
          <input type="text" placeholder="Email Address" className="w-full rounded-full px-6 py-4 lg:py-6 lg:px-[44px] border border-[#346654]" />
          <button className="bg-[#17AF26] rounded-full text-white inline-block text-base/[150%] transition ease-in-out duration-300  py-4 px-4 lg:py-6 lg:w-[200px] hover:bg-green-700 hover:shadow-md lg:mt-0 mt-3 w-full">Reveal coupon</button>
        </form>
      </div>
    </div>
  </section>
  <footer className="pb-[64px]">
    <div className="container pt-[240px] lg:pt-[380px]">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <img src={Logo_footer} alt="" />
          <p className="text-[#9D9EA2] text-base mt-6 lg:w-9/12">#1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.</p>
        </div>
        <div className="lg:col-span-8 space-y-8 lg:space-y-10">
          <div>
            <h4 className="text-xl text-white uppercase mb-6">QUICK LINK</h4>
            <ul className="columns-2 *:mb-4">
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Track Your Order</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Shop All</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Flower</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Edibles</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Concentrates</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Refunds</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Mushrooms</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Promotions / Bundles</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Support</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Reward</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Blog</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Shipping Faq</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white uppercase mb-6">CONTACT US</h4>
            <ul>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">info@topshelfbc.cc</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-white uppercase mb-6">MORE</h4>
            <ul className="columns-2 *:mb-4">
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Canada</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in New Brunswick</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Prince Edward Island</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Northwest Territories</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Saskatchewan</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Manitoba</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Quitebec</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in British Columbia</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Ontario</a></li>
              <li><a href="#" className="text-[#9D9EA2] text-sm ">Buy weed online in Alberta</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-white rounded-md w-[56px] h-[32px] flex items-center justify-center">
              <img src={bank3} alt="" />
            </a>
            <a href="#" className="bg-white rounded-md w-[56px] h-[32px] flex items-center justify-center">
              <img src={bank4} alt="" />
            </a>
            <a href="#" className="bg-white rounded-md w-[56px] h-[32px] flex items-center justify-center">
              <img src={bank2} alt="" />
            </a>
            <a href="#" className="bg-white rounded-md w-[56px] h-[32px] flex items-center justify-center">
              <img src={bank1} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-t border-[#46494F] mt-[64px] pt-10">
        <p className="order-2 lg:order-1 text-[#9D9EA2] text-base lg:mt-0 mt-10">© 2022 Top Shelf BC. All Rights Reserved.</p>
        <ul className="order-1 lg:order-2 flex items-center lg:gap-8 gap-4">
          <li><a href="#" className="text-[#9D9EA2] text-sm ">Out Of Stock</a></li>
          <li><a href="#" className="text-[#9D9EA2] text-sm ">Privacy Policy</a></li>
          <li><a href="#" className="text-[#9D9EA2] text-sm ">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Footer