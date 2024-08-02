import { google, star_review, user1, user2, user3 } from '@/components/icons'
import React from 'react'

type Props = {}

const Testimonials  = (props: Props) => {
  return (
    <div>
        <section className="pb-[64px] lg:pb-[120px] lg:pt-0">
  <div className="container">
    <div className="mb-[32px] lg:mb-[64px]">
      <h2 className="main-title uppercase">CUSTOMER TESTIMONIALS</h2>
    </div>
    <div>
      <div className="tabs-content">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-secondary rounded-2xl px-6 py-6 lg:px-10 lg:py-10">
              <h3 className="text-[32px]/[120%] text-white -tracking-[1.5px] font-semibold">VOTED BEST ONLINE DISPENSARY IN CANADA</h3>
              <hr className="bg-[#346654] h-[1px] border-none my-8" />
              <a href="#"><img src={google} alt="" /></a>
              <span className="block mt-8 my-4 text-white">EXELLENCET</span>
              <div className="flex items-center">
                <img src={star_review} alt="" />
                <span className="px-6 text-[#648A7C]">|</span>
                <p className="text-white">on 135<span className="text-[#648A7C] pl-[6px]">Reviews</span></p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 relative">
            <div className="swiper testimonials">
              <div className="swiper-wrapper ">
                <div className="swiper-slide w-[330px] h-[433px] border border-gray-200 rounded-2xl p-10 relative">
                  <div className="flex items-center space-x-4 border-b border-[#C8C9CB] pb-8 mb-8">
                    <div className="rounded-full bg-[#73C255]">
                      <img src={user1} alt="" />
                    </div>
                    <h4>Vikki Starr</h4>
                  </div>
                  <div>
                    <div className="my-rating" data-rating="3.5" />
                  </div>
                  <p className="mt-4">Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
                  </p>
                  <span className="text-sm text-[#9D9EA2] block absolute bottom-10 font-light">January 15, 2023</span>
                </div>
                <div className="swiper-slide w-[330px] h-[433px] border border-gray-200 rounded-2xl p-10 relative">
                  <div className="flex items-center space-x-4 border-b border-[#C8C9CB] pb-8 mb-8">
                    <div className="rounded-full bg-[#594F27]">
                      <img src={user2} alt="" />
                    </div>
                    <h4>Terry Baskey</h4>
                  </div>
                  <div>
                    <div className="my-rating" data-rating="3.5" />
                  </div>
                  <p className="mt-4">Best damn place to buy your canabis at great prices
                  </p>
                  <span className="text-sm text-[#9D9EA2] block absolute bottom-10 font-light">January 5, 2023</span>
                </div>
                <div className="swiper-slide w-[330px] h-[433px] border border-gray-200 rounded-2xl p-10 relative">
                  <div className="flex items-center space-x-4 border-b border-[#C8C9CB] pb-8 mb-8">
                    <div className="rounded-full bg-[#594F27]">
                      <img src={user3} alt="" />
                    </div>
                    <h4>Vikki Starr</h4>
                  </div>
                  <div>
                    <div className="my-rating" data-rating="3.5" />
                  </div>
                  <p className="mt-4">Best damn place to buy your canabis at great prices
                  </p>
                  <span className="text-sm text-[#9D9EA2] block absolute bottom-10 font-light">January 15, 2023</span>
                </div>
                <div className="swiper-slide w-[330px] h-[433px] border border-gray-200 rounded-2xl p-10 relative">
                  <div className="flex items-center space-x-4 border-b border-[#C8C9CB] pb-8 mb-8">
                    <div className="rounded-full bg-[#594F27]">
                      <img src="./svg/icons/user2.svg" alt="" />
                    </div>
                    <h4>Terry Baskey</h4>
                  </div>
                  <div>
                    <div className="my-rating" data-rating="3.5" />
                  </div>
                  <p className="mt-4">Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
                  </p>
                  <span className="text-sm text-[#9D9EA2] block absolute bottom-10 font-light">January 15, 2023</span>
                </div>
                <div className="swiper-slide w-[330px] h-[433px] border border-gray-200 rounded-2xl p-10 relative">
                  <div className="flex items-center space-x-4 border-b border-[#C8C9CB] pb-8 mb-8">
                    <div className="rounded-full bg-[#594F27]">
                      <img src="./svg/icons/user2.svg" alt="" />
                    </div>
                    <h4>Vikki Starr</h4>
                  </div>
                  <div>
                    <div className="my-rating" data-rating="3.5" />
                  </div>
                  <p className="mt-4">Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
                  </p>
                  <span className="text-sm text-[#9D9EA2] block absolute bottom-10 font-light">January 15, 2023</span>
                </div>
              </div>
              <div className="swiper-button-next swiper-testimonials-button-next" />
              <div className="swiper-button-prev swiper-testimonials-button-prev" />
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Testimonials 