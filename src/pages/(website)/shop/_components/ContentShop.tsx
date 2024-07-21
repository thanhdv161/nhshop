import React from 'react'

type Props = {}

const ContentShop = (props: Props) => {
  return (
        <div className="content lg:col-span-9 col-span-12">
  <div className="flex items-center justify-between border-b border-[#F4F4F4] pb-5 mb-6 lg:pb-7 lg:mb-8">
    <h2>SHOP</h2>
    <select className="rounded-full border border-[#F4F4F4] py-3 px-5 lg:hidden">
      <option>Filter</option>
    </select>
    <select className="rounded-full border border-[#F4F4F4] py-3 px-5">
      <option>Short By Lates</option>
    </select>
  </div>
  <div className="mb-6 lg:mb-[32px]">
    <h4 className="text-[#17AF26] text-base lg:text-xl pb-4 font-medium">Cannabis</h4>
    <p className="text-sm lg:text-base text-[#717378] lg:w-11/12">Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!</p>
  </div>
  <div className="p-6 lg:px-[32px] bg-[#F2F6F4] rounded-2xl">
    <h2 className="text-[#060709] mb-6 text-lg font-medium">Top Selling</h2>
    <div className="swiper top-selling">
      <div className="swiper-wrapper ">
        <div className="swiper-slide w-[283px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF] rounded-lg px-[60px] py-[30px]">
              <img src="./images/products/product2.png" alt="" className="w-[164px]" />
            </div>
            <div className="product-content text-center">
              <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
              <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
              <a href="" className="btn mt-5">Add to Cart</a>
            </div> 
          </div>
        </div>
        <div className="swiper-slide w-[283px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF] rounded-lg px-[60px] py-[30px]">
              <img src="./images/products/product3.png" alt="" className="w-[164px]" />
              <span className="out-of-stock absolute rounded-full px-6 py-3 lg:px-8 lg:py-5 text-white text-sm/[150%] ">Out Of Stock</span>
            </div>
            <div className="product-content text-center">
              <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">CONCENTRATES</a>
              <h3><a href="" className="text-[#1A1E26] text-lg">Mix And Match Shatter/Budder 28g (4 X 7G)</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
              <a href="" className="btn mt-5">Add to Cart</a>
            </div> 
          </div>
        </div>
        <div className="swiper-slide w-[283px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF] rounded-lg px-[60px] py-[30px] relative">
              <img src="./images/products/product4.png" alt="" className="w-[164px]" />
              <span className="absolute bg-[#F2BC1B] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
            </div>
            <div className="product-content text-center">
              <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
              <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
              <a href="" className="btn mt-5">Add to Cart</a>
            </div> 
          </div>
        </div>
        <div className="swiper-slide w-[283px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF] rounded-lg px-[60px] py-[30px] relative">
              <img src="./images/products/product5.png" alt="" className="w-[164px]" />
              <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
            </div>
            <div className="product-content text-center">
              <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
              <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
              <a href="" className="btn mt-5">Add to Cart</a>
            </div> 
          </div>
        </div>
        <div className="swiper-slide w-[283px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF] rounded-lg px-[60px] py-[30px]">
              <img src="./images/products/product3.png" alt="" className="w-[164px]" />
            </div>
            <div className="product-content text-center">
              <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">CONCENTRATES</a>
              <h3><a href="" className="text-[#1A1E26] text-lg">Mix And Match Shatter/Budder 28g (4 X 7G)</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
              <a href="" className="btn mt-5">Add to Cart</a>
            </div> 
          </div>
        </div>
        <div className="swiper-slide w-[283px]">
          <div>
            <div className="flex items-center justify-center bg-[#FFFFFF] rounded-lg px-[60px] py-[30px] relative ">
              <img src="./images/products/product2.png" alt="" className="w-[164px]" />
              <span className="absolute bg-[#F2BC1B] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
            </div>
            <div className="product-content text-center">
              <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
              <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
              <a href="" className="btn mt-5">Add to Cart</a>
            </div> 
          </div>
        </div>
      </div>
      <div className="swiper-button-next swiper-top-selling-button-next" />
      <div className="swiper-button-prev swiper-top-selling-button-prev" />
      <div className="swiper-pagination" />
    </div>
  </div>
  <div className="tabs-content lg:mt-[32px] mt-6 min-w-[342px]">
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5">
          <img src="./images/products/product2.png" alt="" className="lg:w-[164px] w-[120px]" />
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
          <img src="./images/products/product4.png" alt="" className="lg:w-[164px] w-[120px]" />
          <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
          <img src="./images/products/product3.png" alt="" className="lg:w-[164px] w-[120px]" />
          <span className="out-of-stock absolute rounded-full px-6 py-3 lg:px-8 lg:py-5 text-white text-sm/[150%] ">Out Of Stock</span>
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5">
          <img src="./images/products/product5.png" alt="" className="lg:w-[164px] w-[120px]" />
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5">
          <img src="./images/products/product2.png" alt="" className="lg:w-[164px] w-[120px]" />
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
          <img src="./images/products/product4.png" alt="" className="lg:w-[164px] w-[120px]" />
          <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
    </div>
  </div>
  <section className="my-10 bg-[url('./images/bg.png')] bg-no-repeat bg-center bg-cover rounded-xl p-12">
    <div className="lg:grid lg:grid-cols-2 gap-8">
      <div>
        <a href="" className="block mb-2 text-[12px] text-sm font-light text-[#9D9EA2] uppercase tracking-[4px] ">CONCENTRATES</a>
        <h3 className="mb-5">
          <a href="" className="text-[32px]/[120%] -tracking-[1.5px] text-white lg:font-semibold font-medium">Mix And Match Shatter/Budder 28g <br className="lg:block hidden" /> (4 X 7G)</a>
        </h3>
        <div className="rating mb-5 flex items-center">
          <span className="flex items-center text-white"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5 <span className="text-[#C8C9CB] mx-3">|</span> 135</span>
          <a href="" className="text-[#C8C9CB] ml-2">Reviews</a>
        </div>
        <ul className="mb-5 flex space-x-3 items-center *:border *:border-gray-400 *:rounded *:py-[5px] *:px-[10px] text-white">
          <li>28g</li>
          <li>1/2lb</li>
          <li>1/4lb</li>
        </ul>
        <div className="flex items-center lg:space-x-10 space-x-5">
          <a href="" className="btn p-0 !h-[56px] !leading-[56px] lg:text-base text-[12px] min-w-[130px]">Add To Cart</a>
          <div className="flex items-center">
            <span className="text-[#F2BC1B] text-lg lg:text-xl mr-2">$102.00</span>
            <span className="text-[#C8C9CB] text-sm line-through ">$200.00</span>
          </div>
        </div>
      </div>
      <div className="relative lg:mt-0 mt-10">
        <div className="swiper mix-match p-5 bg-[rgba(255,255,255,0.2)] rounded-xl">
          <div className="swiper-wrapper">
            <div className="swiper-slide flex items-center justify-center">
              <img src="./images/Buddha-Bomb-Green-Apple-Gummies-768x768-1 1.png" alt="" />
            </div>
            <div className="swiper-slide flex items-center justify-center">
              <img src="./images/Buddha-Bomb-Green-Apple-Gummies-768x768-1 1.png" alt="" />
            </div>
            <div className="swiper-slide flex items-center justify-center">
              <img src="./images/Buddha-Bomb-Green-Apple-Gummies-768x768-1 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-mix-match-pagination" />
      </div>
    </div>
  </section>
  <div className="tabs-content lg:mt-[32px] mt-6 min-w-[342px]">
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5">
          <img src="./images/products/product2.png" alt="" className="lg:w-[164px] w-[120px]" />
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
          <img src="./images/products/product4.png" alt="" className="lg:w-[164px] w-[120px]" />
          <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
          <img src="./images/products/product3.png" alt="" className="lg:w-[164px] w-[120px]" />
          <span className="out-of-stock absolute rounded-full px-6 py-3 lg:px-8 lg:py-5 text-white text-sm/[150%] ">Out Of Stock</span>
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5">
          <img src="./images/products/product5.png" alt="" className="lg:w-[164px] w-[120px]" />
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5">
          <img src="./images/products/product2.png" alt="" className="lg:w-[164px] w-[120px]" />
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
      <div>
        <div className="flex items-center justify-center bg-[url('./images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
          <img src="./images/products/product4.png" alt="" className="lg:w-[164px] w-[120px]" />
          <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
        </div>
        <div className="product-content text-center">
          <a href="" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">FLOWER</a>
          <h3><a href="" className="text-[#1A1E26] text-lg">2 Oz Deal Watermelon Zkittles + Purple Gushers</a></h3>
          <div className="rating my-2 flex justify-center items-center text-sm">
            <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
            <a href="" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
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
          <a href="" className="btn mt-5">Add to Cart</a>
        </div> 
      </div>
      {/* End-Product */}
    </div>
  </div>
  <div className="border-t border-[#F4F4F4] pt-[32px] mt-[32px] mb-[56px] lg:mb-[128px] ">
    <div className="lg:flex items-center justify-between">
      <p className="text-[#717378] text-[14px]/[150%] font-light lg:mb-0 mb-5">Showing 1-30 of 393 results</p>
      <div>
        <ul className="flex items-center space-x-8 text-[14px]">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>...</li>
          <li>55</li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default ContentShop