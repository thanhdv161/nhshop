import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <>
        <nav>
            <ul className="lg:flex items-center justify-center space-x-10 text-base text-[#46494F]">
                <li><a href="/shop" className="block py-4">Shop All</a></li>
                <li><a href="#" className="block py-4">Flower</a></li>
                <li><a href="#" className="block py-4">Edibles</a></li>
                <li><a href="#" className="block py-4">Concentrates</a></li>
                <li><a href="#" className="block py-4">Mushrooms</a></li>
                <li><a href="#" className="block py-4">Promotions/Bundles</a></li>
                <li><a href="#" className="block py-4">Support</a></li>
                <li><a href="#" className="block py-4">Rewards</a></li>
                <li><a href="#" className="block py-4">Blog</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav