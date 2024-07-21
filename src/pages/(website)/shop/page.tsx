import React from 'react'
import BannerShop from './_components/Banner'
import ShopMain from './_components/ShopMain'

type Props = {}

const ShopPage = (props: Props) => {
  return (
    <div>
      <BannerShop/>
      <ShopMain/>
    </div>
  )
}

export default ShopPage