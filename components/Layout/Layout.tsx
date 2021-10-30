import * as React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

type ILayout = {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <div className='flex flex-col min-h-screen text-black'>
        <Header />
        <main className='flex-1 mt-4'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
