import { Logo } from '@/components/icons'
import FormSearch from './FormSearch'
import Nav from './Nav'
import TopNav from './TopNav'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
        <header> 
          <TopNav/>
          <div className="py-4 lg:border-b lg:border-neutral-400">
            <div className="container">
              <div className="flex flex-wrap lg:flex-nowrap justify-between lg:gap-8">
                <div className="order-1 flex items-center space-x-4 lg:-ml-9">
                  <button className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </button>
                  <div>
                    <a href="/">
                      <img src={Logo} alt='' className="w-[119px] lg:w-[167px]" />
                    </a>
                  </div>
                </div>
                <FormSearch/>
                <div className="order-2 lg:order-3 flex items-center gap-6 lg:-mr-9">
                  <a href="#" className="text-sm lg:text-base">Your Account</a> | 
                  <button className="cart-icon relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="w-4 h-4 rounded-full bg-red-500 text-white absolute -top-1 -right-1 text-[12px] leading-4 cart-count">0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:border-t border-[#F4F4F4]">
            <div className="container">
              <Nav/>
            </div>
          </div>
        </header>
        <div>
      </div>
    </>
  )
}

export default Header