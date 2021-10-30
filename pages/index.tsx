import * as React from 'react'
import { NextSeo } from 'next-seo'

// import FadeInWhenVisible from '@components/FadeInWhenVisible'
import ImageSwiper from '@components/ImageSwiper'
import Hero from '@components/Hero'
import About from '@components/About'
import Roadmap from '@components/Roadmap'
import FAQ from '@components/FAQ'

const HomePage = () => {
  return (
    <>
      <NextSeo title='Home' />
      <div className='flex flex-col items-center justify-center w-full'>
        <section id='hero' className='w-full'>
          <div className='container pb-20 mx-auto space-y-20 hero'>
            <Hero />
          </div>
        </section>

        <section id='about' className='w-full'>
          <div className='container w-full py-20 pt-0 mx-auto space-y-20 md:pt-12'>
            <About />
          </div>
        </section>

        <section id='roadmap' className='w-full bg-orange-gradient'>
          <div className='container w-full py-20 mx-auto space-y-20'>
            <Roadmap />
          </div>
        </section>

        <section id='faq' className='w-full'>
          <div className='container w-full py-20 mx-auto space-y-20'>
            <FAQ />
          </div>
        </section>

        <section id='swiper' className='w-full bg-orange-gradient'>
          <div className='container w-full py-10 mx-auto space-y-12'>
            <ImageSwiper />
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
