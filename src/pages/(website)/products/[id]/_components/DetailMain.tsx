import { carbon_smoke, colorfilter, copy, facebook, mdi_brain, tick_circle, twitter, user1, user2, whatsapp } from '@/components/icons'
import React, { useState } from 'react'

type Props = {}

const ProductDetailMain = (props: Props) => {
  const [activeTab, setActiveTab] = useState('description');
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <div className=" ">
        <div className="container">
            <h4 className="text-[#9D9EA2] tracking-[2px] lg:tracking-[4px] text-[12px]/[150%] lg:text-sm/[150%] mb-3 lg:mb-4">CONCENTRATES</h4>
            <h2 className="text-[#060709] font-medium lg:font-semibold text-xl/[150%] lg:text-[32px]/[150%] -tracking-[1.5px] lg:mb-4 mb-3 lg:w-10/12">Mix And Match Shatter/Budder 28g (4 X 7G)</h2>
            <ul className="flex items-center space-x-2 lg:space-x-4 lg:mb-4 mb-3">
            <li><a href="#" className="text-[#05422C] text-[12px] py-1 px-[10px] lg:py-2 lg:px-4 bg-[#F2F6F4] rounded lg:rounded-lg ">Indica</a></li>
            <li><a href="#" className="text-[#05422C] text-[12px] py-1 px-[10px] lg:py-2 lg:px-4 bg-[#F2F6F4] rounded lg:rounded-lg ">Sativa 100%</a></li>
            </ul>
            <div className="flex items-center justify-between">
            <div className="flex items-center lg:space-x-3 space-x-2">
                <span className="text-[#9D9EA2] lg:text-base text-sm">$200.00</span>
                <span className="text-[#EB2606] lg:text-xl text-base font-medium">$120.00</span>
            </div>
            <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
            </div>
            </div>
            <div className="border border-[#F4F4F4] my-5 p-5 space-y-5 rounded-xl">
            <div className="flex space-x-4"> 
                <img src={colorfilter} alt="" />
                <div>
                <span className="text-[#717378] font-light text-[12px] tracking-[1px]">EFFECTS</span>
                <p className="text-sm text-[#060709] ">Calming, Creative, Happy, Relaxing, Sleepy, Uplifting</p>
                </div>
            </div>
            <div className="flex space-x-4"> 
                <img src={mdi_brain} alt="" />
                <div>
                <span className="text-[#717378] font-light text-[12px] tracking-[1px]">MAY RELIEVE</span>
                <p className="text-sm text-[#060709] ">Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</p>
                </div>
            </div>
            <div className="flex space-x-4">
                <img src={carbon_smoke} alt="" />
                <div>
                <span className="text-[#717378] font-light text-[12px] tracking-[1px]">AROMAS</span>
                <p className="text-sm text-[#060709] ">Chemical, Citrus, Earthy, Pungent, Sour</p>
                </div>
            </div>
            </div>
            <div className="mb-5">
            <h4 className="text-[#717378] font-light text-[12px] tracking-[1px] mb-2 lg:mb-3">DESCRIPTION</h4>
            <p className="text-[#46494F] text-sm">Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains.</p>
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-6 lg:space-y-0 space-y-5">
            <div className="col-span-1">
                <h4 className="text-[#717378] font-light text-[12px] tracking-[1px] mb-2 lg:mb-3">WEIGHT</h4>
                <ul className="flex items-center space-x-2 lg:space-x-4 lg:mb-4 mb-3">
                <li><a href="#" className="text-[#060709] text-[12px] py-2 px-4 bg-[#F2F6F4] rounded lg:rounded-lg hover:border-[#17AF26] hover:border">28g</a></li>
                <li><a href="#" className="text-[#060709] text-[12px] py-2 px-4 bg-[#F2F6F4] rounded lg:rounded-lg hover:border-[#17AF26] hover:border">1/2lb</a></li>
                <li><a href="#" className="text-[#060709] text-[12px] py-2 px-4 bg-[#F2F6F4] rounded lg:rounded-lg hover:border-[#17AF26] hover:border">1/4lb</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h4 className="text-[#717378] font-light text-[12px] tracking-[1px] mb-2 lg:mb-3">Add Integra Pack</h4>
                <div className="flex items-center space-x-8">
                <div className="custom-checkbox flex items-center space-x-2"> 
                    <input type="checkbox" defaultChecked />
                    <label htmlFor="">4g (+$2.00)</label>
                </div>
                <div className="custom-checkbox flex items-center space-x-2"> 
                    <input type="checkbox" />
                    <label htmlFor="">4g (+$2.00)</label>
                </div>
                </div>
            </div>
            </div>
            <div className="my-5">
            <p className="bg-[#FEF8E8] text-sm px-3 py-2 w-[342px]">Purchase this product now and earn <span className="text-[#EB2606]">80</span> Points!</p>
            </div>
            <div className="p-6 border border-[#F4F4F4] rounded-2xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                <p className="text-[#46494F] text-sm">Khalifa Kush (AAAA)</p>
                <span className="text-[#9D9EA2] text-sm">2x</span>
                </div>
                <div>
                <p className="text-[#060709] text-sm">$120.00</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div>
                <p className="text-[#46494F] text-sm">Add Integra Pack - 4g</p>
                </div>
                <div>
                <p className="text-[#060709] text-sm">$2.00</p>
                </div>
            </div>
            <div className="border-y border-[#F4F4F4] my-5 py-5">
                <div className="lg:flex items-center justify-between lg:space-y-0 space-y-4">
                <div className="flex items-center border border-[#F4F4F4] p-2 lg:pr-8 lg:px-4 lg:py-[10px] rounded-xl">
                    <button id="decrease" className="counter-button">-</button>
                    <div id="counter" className="counter-display">1</div>
                    <button id="increase" className="counter-button">+</button>
                    <p className="text-[#17AF26] text-[12px] ml-8">In Stock</p>
                </div>
                <button className="btn lg:btn-lg !px-6 !text-base lg:!h-[56px] !h-[46px]">Add to Cart <span className="px-1">|</span> $242.00</button>
                </div>
            </div>
            <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                <img src={tick_circle} alt="" />
                <p className="text-sm text-[#46494F]">Free Xpress Shipping on orders over <span className="F2BC1B">$149</span></p>
                </div>
                <div className="flex items-center gap-2">
                <img src={tick_circle} alt="" />
                <p className="text-sm text-[#46494F]">Order before 12:00pm for same day dispatch</p>
                </div>
                <div className="flex items-center gap-2">
                <img src={tick_circle} alt="" />
                <p className="text-sm text-[#46494F]">Support &amp; ordering open 7 day a week</p>
                </div>
            </div>
            </div>
            <div className="border-t border-[#F4F4F4] mt-5 pt-6">
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="col-span-1 flex items-center">
                <p className="text-[#717378] font-light tracking-[1px] text-[12px] w-[92px]">SKU <span>:</span></p>
                <span className="text-sm text-[#060709]">N/A</span>
                </div>
                <div className="col-span-1 flex items-center">
                <p className="text-[#717378] font-light tracking-[1px] text-[12px] w-[92px]">Categories 
                    <span>:</span></p>
                <span className="text-[#17AF26] text-sm">AAAA Weed, Indica</span>
                </div>
            </div>
            </div>
            <div className="border-t border-[#C8C9CB] mt-8 pt-8 lg:mt-10 lg:pt-10">
            <ul className="flex items-center justify-between">
                <li onClick={() => handleTabClick('description')} className={`text-[#05422C] border py-3 px-3 lg:px-8 text-[12px] lg:text-base rounded-full lg:font-medium hover:bg-[#F2F6F4] hover:border-[#05422C]
                ${activeTab === 'description' ? 'border-[#05422C]' : 'border-[#F4F4F4]'}`}>Description</li>
                <li onClick={() => handleTabClick('reviews')} className={`text-[#05422C] border py-3 px-3 lg:px-8 rounded-full text-[12px] lg:text-base hover:bg-[#F2F6F4] hover:border-[#05422C]
                ${ activeTab === 'reviews' ? 'border-[#05422C]' : 'border-[#F4F4F4]'}`}>Reviews <span className="text-[#9D9EA2]">(350)</span></li>
                <li  onClick={() => handleTabClick('refer')} className={`text-[#05422C] border py-3 px-3 lg:px-8 rounded-full text-[12px] lg:text-base hover:bg-[#F2F6F4] hover:border-[#05422C]
                ${activeTab === 'refer' ? 'border-[#05422C]' : 'border-[#F4F4F4]'}`}>Refer a Friend</li>
            </ul>
            </div>
            {activeTab === 'description' && (
            <div className="border-t border-[#F4F4F4] mt-8 pt-5">
            <p className="text-[#46494F] text-sm/[150%]">Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains. Named for its gorgeous appearance and breeder, Jungle Diamonds is a favorite of indica and hybrid lovers alike thanks to its delicious taste and tingly, arousing high. Jungle Diamonds buds have sparkling oversized spade-shaped olive green nugs with vivid amber hairs and a thick frosty blanket of glittering tiny blue-tinted white crystal trichomes. As you pull apart each sticky little nugget, aromas of spicy mocha coffee and fruity herbs are released. </p>
            <p className="text-[#46494F] text-sm/[150%] mt-4">The flavor is of sweet chocolate with hints of fresh ripe berries to it, too. The Jungle Diamonds high is just as delicious, with happy effects that will boost the spirits and kick negative thoughts and moods to the curb. You’ll feel a tingly sense in your body from start to finish that serves to remove any aches or pains while leaving you pretty aroused at times. This is accompanied by a blissfully unfocused heady lift that leaves your head in the clouds without causing sedation. With these effects and its pretty high 17-24% THC level, Jungle Diamonds is ideal for experienced patients with chronic pain, cramps or muscle spasms and appetite loss or nausea.</p>
            </div>
            )}
            {/* End description */}
            {activeTab === 'reviews' && (
            <div className="border-t border-[#F4F4F4] mt-8 pt-5">
                <div className="border border-[#F4F4F4] rounded-2xl p-5 lg:p-6">
                <div className="flex items-center gap-8 border-b border-[#F4F4F4] pb-4 mb-4">
                    <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[#73C255]">
                        <img src={user1} alt='' />
                    </div>
                    <h4>Vikki Starr</h4>
                    </div>
                    <div>
                    <span className="text-sm text-[#9D9EA2] block font-light">January 15, 2023</span>
                    </div>
                </div>
                <div>
                    <div className="my-rating" data-rating={4.0} />
                </div>
                <p className="mt-4">Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
                </p>
                </div>
                <div className="border border-[#F4F4F4] rounded-2xl p-5 lg:p-6 mt-5">
                <div className="flex items-center gap-8 border-b border-[#F4F4F4] pb-4 mb-4">
                    <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-[#594F27]">
                        <img src={user2} alt='' />
                    </div>
                    <h4>Terry Baskey</h4>
                    </div>
                    <div>
                    <span className="text-sm text-[#9D9EA2] block font-light">January 15, 2023</span>
                    </div>
                </div>
                <div>
                    <div className="my-rating" data-rating={4.0} />
                </div>
                <p className="mt-4">Best damn place to buy your canabis at great prices 
                </p>
                </div>
                <div className="mt-5 text-center">
                <button className="text-[#17AF26] text-sm px-6 py-[10px] border border-gray-200 rounded-full hover:bg-[#F3FBF4]">Show More</button>
                </div>
                <hr className="bg-[#F4F4F4] h-[1px] border-none my-6" />
                <div className=''>
                <h4 className="text-[#060709] text-lg mb-6">Add A Review</h4>
                <div className="flex items-center space-x-4">
                    <p className="text-[#46494F] text-sm">Your rating</p>
                    <span className="text-[#46494F] text-sm">:</span>
                    <div className="rating-review pt-[5px]" data-rating={0} />
                </div>
                </div>
                <div className="flex items-center mt-4">
                <p className="text-[#46494F] text-sm">Your Review<span className="text-[#EB2606]">*</span></p>
                </div>
                <textarea name='' id='' rows={5} className="mt-3 border border-[#F4F4F4] p-4 min-w-[340px] lg:w-[640px] rounded-lg text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%]" placeholder="Enter your review" defaultValue={""} />
                <button className="h-[56px] leading-[56px] bg-[#17AF26] rounded-full text-white text-sm transition ease-in-out duration-300 mt-8 px-10 hover:bg-green-700 hover:shadow-md">Submit</button>
            </div>
            )}
            {/* End Review*/}
            {activeTab === 'refer' && (
            <div className="border-t border-[#F4F4F4] mt-8 pt-5">
                <div className="border border-gray-200 rounded-2xl p-5 lg:p-6">
                <div>
                    <h4 className="text-[#060709] text-lg/[150%] lg:text-xl/[150%]">Referral Program</h4>
                    <p className="mt-4 text-[#717378] text-sm/[150%] lg:text-base/[150%]">Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.</p>
                </div>
                <hr className="bg-[#F4F4F4] h-[1px] border-none my-6" />
                <div className="flex items-center gap-4 bg-[#F3FBF4] p-4">
                    <div className="border-l-2 border-[#EB2606] pl-4 space-y-2">
                    <span className="text-[#46494F] font-light text-sm/[140%]">Your Referral URL</span>
                    <p className="text-[#060709] text-base/[150%]">Referral code is available only to users with at least one order.</p>
                    </div>
                    <img src={copy} alt='' />
                </div>
                <div className="flex items-center gap-4 bg-[#F3FBF4] p-4 mt-5">
                    <div className="border-l-2 border-[#EB2606] pl-4 space-y-2">
                    <span className="text-[#46494F] font-light text-sm/[140%]">Your Coupon Code to share</span>
                    <p className="text-[#060709] text-base/[150%]">Referral code is available only to users with at least one order.</p>
                    </div>
                    <img src={copy} alt='' />
                </div>
                <hr className="bg-[#F4F4F4] h-[1px] border-none my-6" />
                <div className="lg:flex items-center gap-6 space-y-3 lg:space-y-0">
                    <div className="flex lg:flex-col items-center gap-3 border border-[#F4F4F4] rounded-[14px] p-3 lg:px-5 lg:py-4">
                    <a href='' className="w-[26px] h-[26px] lg:w-12 lg:h-12 rounded-full px-[10px] py-[7px] lg:px-[18px] lg:py-3 bg-[#EDF4FF] flex item-center lg:mx-auto lg:mb-4">
                        <img src={facebook} alt='' />
                    </a>
                    <a href='' className="text-[#46494F] text-sm /[150%]">Share Via Facebook</a>
                    </div>
                    <div className="flex lg:flex-col items-center gap-3 border border-[#F4F4F4] rounded-[14px] p-3 lg:px-5 lg:py-4">
                    <a href='' className="w-[26px] h-[26px] lg:w-12 lg:h-12 rounded-full p-[7px] lg:p-3 bg-[#EDF4FF] flex item-center lg:mx-auto lg:mb-4">
                        <img src={twitter} alt='' />
                    </a>
                    <a href='' className="text-[#46494F] text-sm /[150%]">Share Via Twitter</a>
                    </div>
                    <div className="flex lg:flex-col items-center gap-3 border border-[#F4F4F4] rounded-[14px] p-3 lg:px-5 lg:py-4">
                    <a href='' className="w-[26px] h-[26px] lg:w-12 lg:h-12 rounded-full lg:p-1 bg-[#ECFFF5] flex item-center lg:mx-auto lg:mb-4">
                        <img src={whatsapp} alt='' className='' />
                    </a>
                    <a href='' className="text-[#46494F] text-sm /[150%]">Share Via Whatsapp</a>
                    </div>
                </div>
                <div className="text-center my-5 lg:my-6">
                    <h4 className="text-[#C8C9CB] text-sm/[150%] lg:text-base/[150%]">Or share via email</h4>
                </div>
                <form>
                    <div className="lg:flex items-center gap-6">
                    <div className="space-y-2">
                        <label htmlFor="Email" className="text-[#46494F]">Email</label> <br className="lg:hidden block" />
                        <input type="email" placeholder="Enter your email" className="px-4 py-3 border border-[#F4F4F4] rounded-xl lg:w-auto w-full text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%]" />
                    </div>
                    <div className="flex items-center lg:gap-6 gap-2 justify-between">
                        <div className="space-y-2 lg:mt-0 mt-2">
                        <label htmlFor="Name" className="text-[#46494F]">Name</label> <br className="lg:hidden block" />
                        <input type="text" placeholder="Enter your name" className="px-4 py-3 border border-[#F4F4F4] rounded-xl lg:w-auto w-full text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%]" />
                        </div>
                        <a href='' className="rounded-full p-3 bg-[#F3FBF4] h-12 w-12 flex items-center mt-6 lg:mt-8 ">
                        <img src="./svg/icons/add.svg" alt='' />
                        </a>
                    </div>
                    </div>
                    <div className="lg:flex items-center gap-14 mt-4 lg:space-y-0 space-y-4">
                    <div>
                        <input type="email" placeholder="johndoe@example.com" className="px-4 py-3 border border-[#F4F4F4] rounded-xl lg:w-auto w-full text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%]" />
                    </div>
                    <div>
                        <input type="text" placeholder="John Doe" className="px-4 py-3 border border-[#F4F4F4] rounded-xl lg:w-auto w-full text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm/[150%]" />
                    </div>
                    </div>
                    <div className="mt-6">
                    <button className="btn btn-lg !h-[56px] !leading-[56px] !px-10 !text-base">Send Emails</button>
                    </div>
                </form>
                </div>
            </div>
            )}
            {/* End Refer a Friend*/}
        </div>
    </div>
  )
}

export default ProductDetailMain