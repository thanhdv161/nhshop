import React from 'react'
import AsideShop from './AsideShop'
import ContentShop from './ContentShop'

type Props = {}

const ShopMain = (props: Props) => {
  return (
    <div>
        <main className="pt-4 lg:pt-10">
            <div className="container">
                <div className="grid grid-cols-12 gap-8">
                <AsideShop/>
                <ContentShop/>
                </div>
            </div>
        </main>
    </div>
  )
}

export default ShopMain