import React from 'react'

type Props = {}

const AsideShop = (props: Props) => {
  return (
        <aside className="col-span-3 border-r border-[#F4F4F4] pr-[32px] lg:block hidden">
  <h2 className="text-[#1A1E26] text-lg mt-3 mb-5">Filters</h2>
  <div className="pt-5 border-y border-[#F4F4F4]">
    <h3 className="text-[#717378] font-light tracking-[1px] mb-5">PRODUCT CATEGORY</h3>
    <div className="space-y-3 mb-5">
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Sales</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">12</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input defaultChecked type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label htmlFor="default-radio-2">Cannabis</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">430</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Pre-Rolls</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">40</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>CBD Oil</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">20</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Magic Mushrooms</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">34</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Extracts</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">26</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Sales</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">12</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Edibles</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">32</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Vape Pens</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">12</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Accessories</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">10</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Bath &amp; Body</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">8</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Bundles</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">24</span>
        </div>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio"  name="radio" />
        <div className="flex items-center space-x-3">
          <label>Wholesale</label>
          <span className="text-[#F4F4F4]">|</span>
          <span className="text-[14px] font-light text-[#9D9EA2]">28</span>
        </div>
      </div>
    </div>
  </div>
  <div className="my-5 pt-5 border-y border-[#F4F4F4]">
    <h3 className="text-[#717378] font-light tracking-[1px] mb-6">FILTER BY PRICE</h3>
    <div className="slider-values">
      <span id="min-value">$0</span>
      <span id="max-value">$50,000.00</span>
    </div>
    <div className="slider-wrapper">
      <input type="range" id="min-range" min={0} max={50000} step={1000} defaultValue={0} className="range-slider" />
      <input type="range" id="max-range" min={0} max={50000} step={1000} defaultValue={50000} className="range-slider" />
      <div className="slider-track" />
    </div>
    <button className="btn mb-6">Apply</button>
  </div>
  <div className="mt-5">
    <h3 className="text-[#717378] font-light tracking-[1px] mb-5">ORDER BY</h3>
    <form className="space-y-3">
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Sales</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input defaultChecked type="radio" name="radio" />
        <label>Review Count</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Popularity</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Average Rating</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Newness</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Price: Low to High</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Price: High to Low</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Random Products</label>
      </div>
      <div className="flex items-center custom-radio space-x-3">
        <input type="radio" name="radio" />
        <label>Product Name</label>
      </div>
    </form>
  </div>
  <div className="my-5 pt-5 border-y border-[#F4F4F4]"> 
    <h3 className="text-[#717378] font-light tracking-[1px]">FILTER BY REVIEWS</h3>
    <div className="space-y-4 my-5">
      <div className="custom-checkbox flex items-center space-x-2"> 
        <input type="checkbox" />
        <label htmlFor=''><img src="./assets/svg/icons/5star.svg" alt='' /></label>
      </div>
      <div className="custom-checkbox flex items-center space-x-2"> 
        <input type="checkbox" />
        <label htmlFor=''><img src="./assets/svg/icons/4star.svg" alt='' /></label>
      </div>
      <div className="custom-checkbox flex items-center space-x-2"> 
        <input type="checkbox" />
        <label htmlFor=''><img src="./assets/svg/icons/3star.svg" alt='' /></label>
      </div>
      <div className="custom-checkbox flex items-center space-x-2"> 
        <input type="checkbox" />
        <label htmlFor=''><img src="./assets/svg/icons/2star.svg" alt='' /></label>
      </div>
      <div className="custom-checkbox flex items-center space-x-2"> 
        <input type="checkbox" />
        <label htmlFor=''><img src="./assets/svg/icons/1star.svg" alt='' /></label>
      </div>
    </div>
  </div>
  <div>
    <button className="text-[#17AF26] py-[10px] px-[32px] rounded-full hover:bg-[#F3FBF4]">Clear Filters</button>
  </div>
</aside>

  )
}

export default AsideShop