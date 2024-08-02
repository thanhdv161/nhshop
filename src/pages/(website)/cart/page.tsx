import React from 'react'
import CartBanner from './_components/Banner'
import ShowCart from './_components/ShowCart'
import CartTotal from './_components/CartTotal'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <div>
      <CartBanner/>
      <main className="pt-6 lg:pt-8 mb-[64px] lg:mb-[100px]">
        <div className="container">
            <div className="lg:grid lg:grid-cols-[686px,auto] gap-[64px]">
                <ShowCart/>
                <CartTotal/>
            </div>
        </div>
      </main>
    </div>
  )
}

export default CartPage