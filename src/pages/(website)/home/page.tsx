import React from 'react'
import Banner from './_components/Banner'
import BestSellers from './_components/BestSellers '
import Testimonials from './_components/Testimonials '
import FilterByInterest from './_components/FilterByInterest'
import Service from './_components/Service'
import RecentlyAdded from './_components/RecentlyAdded'
import InfoDescription from './_components/InfoDescription'
import WeedEducation from './_components/WeedEducation'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <BestSellers/>
      <Testimonials/>
      <FilterByInterest/>
      <Service/>
      <RecentlyAdded/>
      <InfoDescription/>
      <WeedEducation/>
    </div>
  )
}

export default HomePage