import instance from '@/configs/axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SliderProduct from './_components/SliderProduct'
import ProductDetailMain from './_components/DetailMain'
import FeaturedProduct from './_components/FeaturedProduct'

type Props = {}

const ProductDetailPage = (props: Props) => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
      queryKey: ["product", id],
      queryFn: () => instance.get(`/products/${id}`),
  });
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [id]);
  if (isLoading) return <div>Loading...</div>;
  console.log(product?.data);
  return (
    <div>
       <main className="pt-6 lg:pt-10">
        <div className="container">
          <div className="lg:grid lg:grid-cols-[500px,auto] gap-[90px]">
            <SliderProduct/>
            <ProductDetailMain/>
          </div>
          <FeaturedProduct/>
        </div>
      </main>
    </div>
  )
}

export default ProductDetailPage