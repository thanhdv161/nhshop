import React from 'react'
import CheckoutShipping from './_components/Shipping'
import CheckoutTotalPrice from './_components/TotalPrice'
import BannerCheckout from './_components/Banner'

type Props = {}

const CheckoutPage = (props: Props) => {
  return (
    <div>
      <BannerCheckout/>
      <main className="pt-6 lg:pt-8 mb-[64px] lg:mb-[80px]">
        <div className="container">
            <div className="lg:grid lg:grid-cols-[686px,auto] gap-[64px]">
              <CheckoutShipping/>
              <CheckoutTotalPrice/>
            </div>
        </div>
      </main>
    </div>
  )
}

export default CheckoutPage