import { IProduct } from '@/common/types/product'
import instance from '@/configs/axios'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

type ProductItemProps = {
    product: IProduct
}

const ProductItem = ({product}: ProductItemProps) => {
  const {data: categories, isLoading, isError, error} = useQuery({
    queryKey: ["categories"],
    queryFn: () => instance.get(`/categories`)
  })
  const categoryNames = product.category.map((id: number | string) => {
    const category = categories?.data?.find((category: any) => category._id == id)
    return category ? category.name : 'Unknown Category';
  })
  console.log(categoryNames);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
        <div>
            <Link to={`/products/${product._id}`}>
            <div className="flex items-center justify-center group bg-[url('./assets/images/products/bg-product.png')] bg-cover bg-center bg-no-repeat rounded-lg lg:px-[60px] lg:py-[30px] p-5 relative">
              <img src={product.image} alt={product.name} className="lg:w-[164px] w-[120px]" />
              <span className="absolute bg-[#17AF26] lg:px-4 lg:py-2 px-2 py-1 text-sm/[150%] rounded-tl-lg  rounded top-0 left-0 text-white">$60 ounce</span>
              <span className="out-of-stock absolute rounded-full px-6 py-3 lg:px-8 lg:py-5 text-white text-sm/[150%] lg:w-[152px] scale-0 group-hover:scale-100 group-hover:translate-y-0 -translate-y-full duration-200 ">Out Of Stock</span>
            </div>
            <div className="product-content text-center">
              <a href="#" className="block mt-6 mb-2 text-sm text-[#9D9EA2] uppercase">
              {/* {product?.category && product?.category.map((item) => <span>{item}</span>)} */}
              {categoryNames}
              </a>
              <h3><a href="#" className="text-[#1A1E26] text-lg">{product?.name}</a></h3>
              <div className="rating my-2 flex justify-center items-center text-sm">
                <span className="flex items-center"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} id="star"><path style={{marker: 'none'}} fill="#f8b84e" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" /></svg></span>4.6/5<span className="text-[#C8C9CB] mx-3">|</span>135</span>
                <a href="#" className="text-[#C8C9CB] ml-[6px]">Reviews</a>
              </div>
              <span className="bg-[#F2F6F4] text-[12px] text-[#05422C] px-[10px] py-[5px] rounded">Sativa 100%</span>
              <div className="my-5">
                <span className="text-[#9D9EA2] text-sm mr-4">${product?.price}</span>
                <span className="text-[#EB2606] text-base">${product?.discount}</span>
              </div>
              <ul className="flex items-center justify-center gap-2">
                <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">28g</li>
                <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/2lb</li>
                <li className="text-[#1A1E26] border border-[#F4F4F4] px-[10px] py-[6px] rounded">1/4lb</li>
              </ul>
              <div className="mt-5">
                <a href="#" className="btn">Add to Cart</a>
              </div>
            </div> 
            </Link>
          </div>
    </>
  )
}

export default ProductItem