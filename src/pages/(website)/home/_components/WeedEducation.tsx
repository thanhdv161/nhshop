import { edu1, edu2, edu3 } from '@/components/icons'
import React from 'react'

type Props = {}

const WeedEducation = (props: Props) => {
  return (
    <div>
        <section className="pb-[94px] lg:pb-[112px] lg:pt-0 bg-[#F4F4F4]">
  <div className="container">
    <div className="header pt-[64px] lg:pt-[120px] flex items-center justify-between border-b border-[#717378] pb-6 lg:pb-8">
      <h2 className="text-[#1A1E26] text-2xl font-medium lg:text-[32px] lg:font-semibold">WEED EDUCATION</h2>
      <a href="#" className="text-[#17AF26] underline text-base">Show All</a>
    </div>
    <div className="tabs-content min-w-[342px] pt-[24px]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 rounded-lg">
        <div>
          <img src={edu1} alt="" />
          <span className="text-[#717378] font-light text-sm block pt-6">January 24, 2023</span>
          <h4 className="text-2xl -tracking-[0.5px] font-medium text-[#1A1E26] py-2">12 Mistakes To Avoid When Buying Cannabis Online</h4>
          <p className="text-[#717378] text-base/[150%] pb-8">Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …</p>
          <a href="#" className="text-[#17AF26] text-base block mt-4 underline">Read More</a>
        </div>
        <div>
          <img src={edu2} alt="" />
          <span className="text-[#717378] font-light text-sm block pt-6">January 20, 2023</span>
          <h4 className="text-2xl -tracking-[0.5px] font-medium text-[#1A1E26] py-2">How To Store Cannabis and Keep it Fresh and Potent?</h4>
          <p className="text-[#717378] text-base/[150%] pb-8">Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ...</p>
          <a href="#" className="text-[#17AF26] text-base block mt-4 underline">Read More</a>
        </div>
        <div>
          <img src={edu3} alt="" />
          <span className="text-[#717378] font-light text-sm block pt-6">January 19, 2023</span>
          <h4 className="text-2xl -tracking-[0.5px] font-medium text-[#1A1E26] py-2">12 Mistakes To Avoid When Buying Cannabis Online
          </h4>
          <p className="text-[#717378] text-base/[150%] pb-8">Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …</p>
          <a href="#" className="text-[#17AF26] text-base block mt-4 underline">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default WeedEducation