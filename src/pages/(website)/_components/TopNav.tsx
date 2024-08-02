import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <>
        <div className="bg-secondary">
            <div className="container py-2 flex items-center justify-center gap-4">
              <p className="text-[12px] lg:text-sm text-white truncate">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
              <span className="text-[12px] lg:text-sm text-white min-w-[60px]">23 : 15 : 00</span>
            </div>
          </div>
    </>
  )
}

export default TopNav