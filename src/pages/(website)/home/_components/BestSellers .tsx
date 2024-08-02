import { product1 } from '@/components/icons'
import React from 'react'

type Props = {}

const BestSellers  = (props: Props) => {
  return (
    <>
      <section className="py-[64px] lg:py-[120px]">
        <div className="container">
          <div className="mb-[32px] lg:mb-[64px]">
            <h2 className="main-title uppercase text-center">BEST DISPENSARY TO BUY <br className="hidden lg:block" /> WEED ONLINE IN CANADA</h2>
          </div>
          <div>
            <div className="tabs overflow-hidden mb-8 lg:mb-[64px]">
              <ul className="flex gap-4 lg:gap-8 whitespace-nowrap overflow-y-auto items-center lg:grid lg:grid-cols-3 lg:overflow-y-hidden">
                <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg-px-[143px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Best Sellers</a></li>
                <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg-px-[143px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Bundles &amp; Promotions</a></li>
                <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg-px-[143px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">On Sale</a></li>
              </ul>
            </div>
            <div className="tabs-content">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-secondary text-center rounded-2xl py-[28px] lg:py-[85px]">
                    <img src={product1} alt="" className="mx-auto lg:w-[213px] w-[164px]" />
                    <h3 className="mb-2 mt-6"><a href="#" className="text-xl text-white">Shop our Best Sellers</a></h3>
                    <p className="text-sm text-gray-400 px-[82px]">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </p>
                    <a href="#" className="text-sm text-[#17AF26] block underline mt-5">View All</a>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div className="swiper best-seller">
                    <div className="swiper-wrapper ">
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg px-[60px] py-[30px]">
                            <img src="./images/products/product2.png" alt="" className="w-[164px]" />
                          </div>
                          <div className="product-content text-center">
                            <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
                            <h3><a href="#" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
                            <div className="rating my-2 flex justify-center items-center text-sm">
                              <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                              <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
                            </div>
                            <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Sativa 100%</span>
                            <div className="my-5">
                              <span className="text-[#9D9EA2] text-sm mr-4">$200.00</span>
                              <span className="text-[#EB2606] text-base">$102.00</span>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
                            </ul>
                            <a href="#" className="btn mt-5">Add to Cart</a>
                          </div> 
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg px-[60px] py-[30px] relative">
                            <img src="./images/products/product3.png" alt="" className="w-[164px]" />
                            <span className="out-of-stock absolute rounded-full px-6 py-3 lg:px-8 lg:py-5 text-white text-sm/[150%] ">Out Of Stock</span>
                          </div>
                          <div className="product-content text-center">
                            <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">CONCENTRATES</a>
                            <h3><a href="#" className="text-[#1A1E26] text-lg">Mix And Match Shatter/Budder 28g (4 X 7G)</a></h3>
                            <div className="rating my-2 flex justify-center items-center text-sm">
                              <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                              <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
                            </div>
                            <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Indica 70%</span>
                            <div className="my-5">
                              <span className="text-[#9D9EA2] text-sm mr-4">$200.00</span>
                              <span className="text-[#EB2606] text-base">$102.00</span>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
                            </ul>
                            <a href="#" className="btn mt-5">Add to Cart</a>
                          </div> 
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg px-[60px] py-[30px] relative">
                            <img src="./images/products/product4.png" alt="" className="w-[164px]" />
                            <span className="absolute bg-[#F2BC1B] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
                          </div>
                          <div className="product-content text-center">
                            <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
                            <h3><a href="#" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
                            <div className="rating my-2 flex justify-center items-center text-sm">
                              <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                              <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
                            </div>
                            <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Sativa 100%</span>
                            <div className="my-5">
                              <span className="text-[#9D9EA2] text-sm mr-4">$200.00</span>
                              <span className="text-[#EB2606] text-base">$102.00</span>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
                            </ul>
                            <a href="#" className="btn mt-5">Add to Cart</a>
                          </div> 
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg px-[60px] py-[30px] relative">
                            <img src="./images/products/product5.png" alt="" className="w-[164px]" />
                            <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
                          </div>
                          <div className="product-content text-center">
                            <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
                            <h3><a href="#" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
                            <div className="rating my-2 flex justify-center items-center text-sm">
                              <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                              <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
                            </div>
                            <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Sativa 100%</span>
                            <div className="my-5">
                              <span className="text-[#9D9EA2] text-sm mr-4">$200.00</span>
                              <span className="text-[#EB2606] text-base">$102.00</span>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
                            </ul>
                            <a href="#" className="btn mt-5">Add to Cart</a>
                          </div> 
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg px-[60px] py-[30px] relative">
                            <img src="./images/products/product2.png" alt="" className="w-[164px]" />
                            <span className="out-of-stock absolute rounded-full px-6 py-3 lg:px-8 lg:py-5 text-white text-sm/[150%] ">Out Of Stock</span>
                          </div>
                          <div className="product-content text-center">
                            <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">CONCENTRATES</a>
                            <h3><a href="#" className="text-[#1A1E26] text-lg">Mix And Match Shatter/Budder 28g (4 X 7G)</a></h3>
                            <div className="rating my-2 flex justify-center items-center text-sm">
                              <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                              <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
                            </div>
                            <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Indica 70%</span>
                            <div className="my-5">
                              <span className="text-[#9D9EA2] text-sm mr-4">$200.00</span>
                              <span className="text-[#EB2606] text-base">$102.00</span>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
                            </ul>
                            <a href="#" className="btn mt-5">Add to Cart</a>
                          </div> 
                        </div>
                      </div>
                      <div className="swiper-slide w-[291px]">
                        <div>
                          <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg px-[60px] py-[30px]">
                            <img src="./images/products/product4.png" alt="" className="w-[164px]" />
                          </div>
                          <div className="product-content text-center">
                            <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
                            <h3><a href="#" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
                            <div className="rating my-2 flex justify-center items-center text-sm">
                              <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                              <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
                            </div>
                            <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Sativa 100%</span>
                            <div className="my-5">
                              <span className="text-[#9D9EA2] text-sm mr-4">$200.00</span>
                              <span className="text-[#EB2606] text-base">$102.00</span>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                              <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
                            </ul>
                            <a href="#" className="btn mt-5">Add to Cart</a>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-next swiper-best-seller-button-next" />
                    <div className="swiper-button-prev swiper-best-seller-button-prev" />
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BestSellers 