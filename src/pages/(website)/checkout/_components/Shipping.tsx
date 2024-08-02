import React from 'react'

type Props = {}

const CheckoutShipping = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[#060709] text-xl/[150%]">Shipping</h2>
        <p className="text-[#9D9EA2] text-base/[150%] font-light">(3)</p>
      </div>
      <hr className="bg-[#C8C9CB] h-[1px] border-none mt-6 mb-5 lg:mb-8" />
      <form>
        <div className="mb-4 lg:mb-5 flex items-center justify-between gap-5">
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">First Name *</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full text-sm/[150%] border border-[#F4F4F4] rounded-2xl" />
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Last Name *</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full border border-[#F4F4F4] rounded-2xl text-sm/[150%]" />
          </div>
        </div>
        <div className="mb-4 lg:mb-5">
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Country / Region *</label>
            <select name='' id='' className="px-4 lg:px-5 py-3 w-full border text-[#060709] text-sm/[150%] border-[#F4F4F4] rounded-2xl">
              <option value={1}>Singapore</option>
              <option value={2}>Viet Nam</option>
              <option value={3}>Thai Lan</option>
              <option value={4}>Lao</option>
            </select>
          </div>
        </div>
        <div className="mb-4 lg:mb-5">
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Country / Region *</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full border border-[#F4F4F4] rounded-2xl text-sm placeholder:text-[#C8C9CB] placeholder:text-sm" placeholder="House number and street name" />
            <input type="text" className="px-4 lg:px-5 py-3 w-full border border-[#F4F4F4] rounded-2xl text-sm placeholder:text-[#C8C9CB] placeholder:text-sm" placeholder="Apartment, suite, unit, etc. (optional)" />
          </div>
        </div>
        <div className="mb-4 lg:mb-5 lg:flex items-center justify-between gap-5 lg:space-y-0 space-y-4">
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Town / City *</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full text-sm/[150%] border border-[#F4F4F4] rounded-2xl" />
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Province *</label>
            <select name='' id='' className="px-4 lg:px-5 py-3 w-full border text-[#060709] text-sm/[150%] border-[#F4F4F4] rounded-2xl">
              <option value={1}>Ha Noi</option>
              <option value={2}>Ha Nam</option>
              <option value={3}>Hai Phong</option>
              <option value={4}>Da Nang</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Postcode / ZIP *</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full text-sm/[150%] border border-[#F4F4F4] rounded-2xl" />
          </div>
        </div>
        <div className="mb-4 lg:mb-5 flex items-center justify-between gap-5">
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Phone (optional)</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full text-sm/[150%] border border-[#F4F4F4] rounded-2xl" />
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Email address *</label>
            <input type="text" className="px-4 lg:px-5 py-3 w-full border border-[#F4F4F4] rounded-2xl text-sm/[150%] placeholder:text-[#C8C9CB] placeholder:text-sm" placeholder="johndoe@example.com" />
          </div>
        </div>
        <div className="custom-checkbox flex items-center gap-2 border-t border-[#C8C9CB] mt-8 pt-5 lg:pt-8 mb-5">
          <input type="checkbox" />
          <label htmlFor="" className="text-[#060709] text-base/[150%]">Ship to a different Address?</label>
        </div>
        <div className=''>
          <div className="space-y-2">
            <label htmlFor="" className="text-[#46494F] text-[12px]/[150%] uppercase tracking-[1px]">Order Notes (optional)</label>
            <textarea name='' id='' cols={30} rows={5} className="px-4 lg:px-5 py-3 w-full border border-[#F4F4F4] rounded-2xl text-sm placeholder:text-[#C8C9CB] placeholder:text-sm" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
          </div>
        </div>
        <div className="border-t border-[#C8C9CB] mt-5 pt-5 lg:mt-8 lg:pt-8">
          <h4 className="text-[#060709] text-base/[150%] mb-5">What would you like us to do if an Item is out os Stock?</h4>
          <select name='' id='' className="px-4 lg:px-5 py-3 w-full border text-[#060709] text-sm/[150%] border-[#F4F4F4] rounded-2xl">
            <option value={1}>Contact me (With delay)</option>
            <option value={2}>Contact me (With delay)</option>
          </select>
        </div>
        <div className="border-t border-[#C8C9CB] mt-5 pt-5 lg:mt-8 lg:pt-8">
          <h4 className="text-[#060709] text-base/[150%] mb-5">Where did you hear About Us?</h4>
          <textarea name='' id='' cols={30} rows={5} className="px-4 lg:px-5 py-3 w-full border border-[#F4F4F4] rounded-2xl text-sm placeholder:text-[#C8C9CB] placeholder:text-sm" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
        </div>
      </form>
    </div>

  )
}

export default CheckoutShipping