
type Props = {}

const Banner = (props: Props) => {
  return (
   <div>
  <section className="bg-[url('./images/banner-mobile.jpg')] lg:bg-[url('./images/banner-desktop.jpg')] bg-no-repeat bg-cover bg-center text-white min-h-[720px] flex py-[56px] lg:py-0 lg:items-center">
    <div className="container">
      <div className="lg:w-2/3">
        <span className="text-[#F2BC1B] block mb-4 text-sm tracking-[4px] lg:text-base">BEST SELLER</span>
        <h1 className="main-title">BEST DISPENSARY TO BUY WEED ONLINE </h1>
        <a href='#' className="text-[#F4F4F4] text-base/[150%] block mb-10 lg:mb-[102px] lg:text-2xl/[150%] lg:-tracking-[0.5px]">Vitamins &amp; Supplements</a>
        <div className="space-x-6 lg:space-x-8 flex items-center mb-6 lg:mb-10">
          <span className="text-base/[150%] lg:text-2xl/[150%]">Get 25% off</span> <span className="text-[#9D9EA2]">|</span>
          <span className="text-base/[150%] lg:text-2xl/[150%]">Free Shipping</span>
        </div>
        <a href='/shop' className="btn lg:btn-lg">Shop All</a>
      </div>
    </div>
  </section>
  <section className="bg-[#F2F6F4] py-[64px] lg:py-[80px]">
    <div className="container">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="grid grid-cols-[64px,auto] lg:grid-cols-[100px,auto] gap-6">
          <div>
            <div className="bg-[#FFFFFF] rounded-full h-[64px] lg:h-[100px] flex items-center justify-center">
              <img src="./svg/1.svg" alt='' className="w-[36px] lg:w-[56px]" />
            </div>
          </div>
          <div>
            <h3 className="text-[#1A1E26] text-[20px]/[150%] lg:text-2xl/[150%] -tracking-[0.5px] mb-3 lg:mb-4 font-medium">Reliable Shipping</h3>
            <p className="text-[#717378] text-sm/[150%] lg:text-base/[150%]">Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
          </div>
        </div>
        <div className="grid grid-cols-[64px,auto] lg:grid-cols-[100px,auto] gap-6">
          <div>
            <div className="bg-[#FFFFFF] rounded-full h-[64px] lg:h-[100px] flex items-center justify-center">
              <img src="./svg/2.svg" alt='' className="w-[36px] lg:w-[56px]" />
            </div>
          </div>
          <div>
            <h3 className="text-[#1A1E26] text-[20px]/[150%] lg:text-2xl/[150%] -tracking-[0.5px] mb-3 lg:mb-4 font-medium">You’re Safe With Us</h3>
            <p className="text-[#717378] text-sm/[150%] lg:text-base/[150%]">Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.</p>
          </div>
        </div>
        <div className="grid grid-cols-[64px,auto] lg:grid-cols-[100px,auto] gap-6">
          <div>
            <div className="bg-[#FFFFFF] rounded-full h-[64px] lg:h-[100px] flex items-center justify-center">
              <img src="./svg/3.svg" alt='' className="w-[36px] lg:w-[56px]" />
            </div>
          </div>
          <div>
            <h3 className="text-[#1A1E26] text-[20px]/[150%] lg:text-2xl/[150%] -tracking-[0.5px] mb-3 lg:mb-4 font-medium">Best Quality &amp; Pricing</h3>
            <p className="text-[#717378] text-sm/[150%] lg:text-base/[150%]">Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Banner