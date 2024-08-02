import React from 'react'

type Props = {}

const FormSearch = (props: Props) => {
  return (
    <>
         <form className="order-3 lg:order-2 flex gap-2 lg:gap-8 w-full lg:w-auto lg:border-none border-t border-[#F4F4F4] lg:pt-0 pt-3 lg:mt-0 mt-3">
            <input type="text" placeholder="Search" className="w-full py-2 px-5 lg:py-3 lg:px-6 rounded-full bg-white border border-gray-200 lg:w-[400px]" />
            <button type="submit" className="bg-[#17AF26] rounded-full w-[50px] h-[42px] lg:w-12 lg:h-12 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:size-6 size-5 text-white mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
        </form>
    </>
  )
}

export default FormSearch