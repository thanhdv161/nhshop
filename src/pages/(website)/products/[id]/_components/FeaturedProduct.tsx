import instance from '@/configs/axios';
import ProductItem from '@/pages/(website)/_components/ProductItem';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

const FeaturedProduct = (props: Props) => {
  const {id} = useParams();
  const { data: productData, isLoading: productLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => instance.get(`/products/${id}`),
  });

  const categoryId = productData?.data?.category[0];

  const { data: relatedData, isLoading: relatedLoading } = useQuery({
    queryKey: ["relatedProducts", categoryId, id],
    queryFn: () => instance.get(`/products/${categoryId}/related/${id}`),
  });
  
  if (productLoading || relatedLoading) return <div>Loading...</div>;

  return (
    <div className="mb-[64px] lg:mb-[100px] border-t border-[#C8C9CB] mt-8 pt-8 lg:mt-[64px] lg:pt-[64px]">
  <h2 className="text-[#1A1E26] text-2xl/[150%] -tracking-[0.5px] mb-[40px]">Featured Product</h2>
  <div className="tabs-content min-w-[342px]">
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
      {relatedData?.data.map((product: any, index: number) => (
        <ProductItem key={index} product={product}/>
      ))}
    </div>
  </div>
</div>

  )
}

export default FeaturedProduct