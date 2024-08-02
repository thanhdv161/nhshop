import Footer from '@/pages/(website)/_components/Footer'
import Header from '@/pages/(website)/_components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout