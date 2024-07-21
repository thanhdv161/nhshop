import React from 'react'

type Props = {}

const InfoDescription = (props: Props) => {
  return (
    <div>
        <section className="pb-[64px] lg:pb-[120px] lg:pt-0">
  <div className="container">
    <div className="tabs-content min-w-[342px] pt-[64px] border-t border-[#717378]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 rounded-lg">
        <div className="border border-[#F4F4F4] p-6 lg:p-8">
          <div className="lg:h-[240px] h-[164px] flex items-center justify-center bg-[#F2F6F4] rounded-lg">
            <img src="./images/products/indica.jpg" alt="" />
          </div>
          <h4 className="text-2xl lg:text-[32px]/[120%] -tracking-[1.5px] font-semibold text-[#1A1E26] pt-8 py-4">Indica</h4>
          <p className="text-[#717378] text-sm/[150%]">This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.</p>
          <a href="" className="text-[#17AF26] text-base block mt-4 underline">Shop Indica</a>
        </div>
        <div className="border border-[#F4F4F4] p-6 lg:p-8">
          <div className="h-[164px] lg:h-[240px] flex items-center justify-center bg-[#F2F6F4] rounded-lg">
            <img src="./images/products/sativa.jpg" alt="" />
          </div>
          <h4 className="text-2xl lg:text-[32px]/[120%] -tracking-[1.5px] font-semibold text-[#1A1E26] pt-8 py-4">Sativa</h4>
          <p className="text-[#717378] text-sm/[150%]">Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day.</p>
          <a href="" className="text-[#17AF26] text-base block mt-4 underline">Shop Sativa</a>
        </div>
        <div className="border border-[#F4F4F4] p-6 lg:p-8">
          <div className="h-[164px] lg:h-[240px] flex items-center justify-center bg-[#F2F6F4] rounded-lg">
            <img src="./images/products/hybrids.jpg" alt="" />
          </div>
          <h4 className="text-2xl lg:text-[32px]/[120%] -tracking-[1.5px] font-semibold text-[#1A1E26] pt-8 py-4">Hybrids</h4>
          <p className="text-[#717378] text-sm/[150%]">Hybrid strains are just that – they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced (the best of both worlds).</p>
          <a href="" className="text-[#17AF26] text-base block mt-4 underline">Shop Hybrids</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default InfoDescription