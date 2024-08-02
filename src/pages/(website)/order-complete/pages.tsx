import React from 'react'
import BannerOrderComplete from './_components/Banner'
import YourOrder from './_components/YourOrder'

type Props = {}

const OrderCompletePage = (props: Props) => {
  return (
    <div>
        <BannerOrderComplete/>
        <YourOrder/>
    </div>
  )
}

export default OrderCompletePage