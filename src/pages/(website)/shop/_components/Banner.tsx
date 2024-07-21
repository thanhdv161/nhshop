import React from 'react'

type Props = {}

const BannerShop = (props: Props) => {
  return (
    <div>
        <section className="bg-[#F2F6F4]">
  <div className="container">
    <div className="grid grid-cols-3 py-4 lg:py-6 gap-[64px]">
      <div className="lg:grid lg:grid-cols-[48px,auto] lg:items-center lg:space-x-4">
        <div className="bg-white lg:w-[48px] w-[32px] h-[32px] lg:h-[48px] flex items-center justify-center rounded-full">
          <img src="./svg/1.svg" alt="" className="w-[18px] lg:w-[26px]" />
        </div>
        <h2 className="text-sm lg:font-medium lg:text-xl">Reliable Shipping</h2>
      </div>
      <div className="lg:grid lg:grid-cols-[48px,auto] items-center lg:space-x-4">
        <div className="bg-white lg:w-[48px] w-[32px] h-[32px] lg:h-[48px] flex items-center justify-center rounded-full">
          <img src="./svg/2.svg" alt="" className="w-[18px] lg:w-[26px]" />
        </div>
        <h2 className="text-sm lg:font-medium lg:text-xl">You’re Safe With Us</h2>
      </div>
      <div className="lg:grid lg:grid-cols-[48px,auto] items-center lg:space-x-4">
        <div className="bg-white lg:w-[48px] w-[32px] h-[32px] lg:h-[48px] flex items-center justify-center rounded-full">
          <img src="./svg/3.svg" alt="" className="w-[18px] lg:w-[26px]" />
        </div>
        <h2 className="text-sm lg:font-medium lg:text-xl">Best Quality &amp; Pricing</h2>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default BannerShop