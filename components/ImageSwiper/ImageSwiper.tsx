import * as React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { IMG_BASE_URL } from '@constants'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

SwiperCore.use([EffectCoverflow, Pagination])

const ImageSwiper = (): JSX.Element => {
  return (
    <Swiper
      effect='coverflow'
      grabCursor={true}
      centeredSlides={true}
      slidesPerView='auto'
      loop={true}
      coverflowEffect={{
        rotate: 28,
        depth: 150,
        modifier: 1,
        slideShadows: false
      }}
    >
      {new Array(13).fill('').map((_, i) => (
        <SwiperSlide key={i}>
          <div className='relative w-full h-full shadow-lg'>
            <Image
              src={IMG_BASE_URL + `${i + 1}.png`}
              alt=''
              className='rounded-lg'
              layout='fill'
              priority={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSwiper
