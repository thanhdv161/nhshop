import React from 'react'
import Banner from './_components/Banner'
import BestSellers from './_components/BestSellers '
import Testimonials from './_components/Testimonials '
import FilterByInterest from './_components/FilterByInterest'
import Service from './_components/Service'
import RecentlyAdded from './_components/RecentlyAdded'
import InfoDescription from './_components/InfoDescription'
import WeedEducation from './_components/WeedEducation'
import { useQuery } from '@tanstack/react-query'
import instance from '@/configs/axios'

type Props = {}

const HomePage = (props: Props) => {
  const { data: products, isLoading } = useQuery({
      queryKey: ["products"],
      queryFn: () => instance.get("/products"),
  });
  
  return (
    <div>
      <Banner />
      <BestSellers/>
      <Testimonials/>
      <FilterByInterest products={products?.data?.data} isLoading={isLoading}/>
      <Service/>
      <RecentlyAdded/>
      <InfoDescription/>
      <WeedEducation/>
    </div>
  )
}

export default HomePage