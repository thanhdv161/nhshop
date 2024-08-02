import React from 'react'
import ProductList from '../../_components/ProductList'
import { Skeleton } from 'antd';

type Props = {
  products: any[];
  isLoading: boolean
}

const FilterByInterest = ({products, isLoading}: Props) => {
  return (
    <>
        <Skeleton loading={isLoading} active>
        <section className="pb-[64px] lg:pb-[120px] lg:pt-0">
          <div className="container">
            <div className="mb-[32px] lg:mb-[64px]">
              <h2 className="main-title uppercase">CHOOSE YOUR WEED</h2>
            </div>
            <div>
              <div className="tabs mb-8 lg:mb-[64px]">
                <div className="lg:flex gap-10 items-center">
                  <span className="block mb-5 lg:mb-0">Filter by Interest</span>
                  <ul className="flex items-center space-x-6 whitespace-nowrap overflow-y-auto">
                    <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Flowers</a></li>
                    <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Mushrooms</a></li>
                    <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Concentrate</a></li>
                    <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Edibles</a></li>
                    <li><a href="#" className="block border border-[#05422C] text-center rounded-full text-[#05422C] px-5 py-[9.5px] lg:py-3 hover:bg-[#F2F6F4] ease-in-out duration-300">Shop All Weed</a></li>
                  </ul>
                </div>
              </div>
              <div className="tabs-content min-w-[342px]">
                <ProductList products={products}/>
              </div>
              <div className="tabs-content min-w-[342px] mt-8">
                <ProductList products={products}/>
              </div>
            </div>
          </div>
        </section>
        </Skeleton>;
    </>
  )
}

export default FilterByInterest