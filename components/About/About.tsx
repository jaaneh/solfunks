import * as React from 'react'
import Image from 'next/image'

import { IMG_BASE_URL } from '@constants'

const images: Array<{ path: string; alt: string }> = [
  {
    path: '2_tr.png',
    alt: 'Solfunk'
  },
  {
    path: '10_tr.png',
    alt: 'Solfunk'
  },
  {
    path: '6_tr.png',
    alt: 'Solfunk'
  },
  {
    path: '4_tr.png',
    alt: 'Solfunk'
  }
]

const About = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full px-12 md:flex-row min-h-[50vh]'>
      <div className='grid w-full grid-cols-2 gap-4 md:order-1 md:mr-12'>
        {images.map((img, i) => (
          <figure
            key={i}
            className='relative w-full h-40 mb-6 overflow-hidden md:mb-0 sm:h-60'
          >
            <Image
              src={IMG_BASE_URL + img.path}
              alt={img.alt}
              layout='fill'
              className='object-cover object-center w-full h-full rounded-lg'
            />
          </figure>
        ))}
      </div>
      <div className='w-full pr-0 space-y-4 md:pr-8 md:order-2'>
        <h2 className='pt-4 text-4xl font-bold md:pt-0 text-shadow-primary'>
          About Solfunks
        </h2>
        <div className='flex flex-col justify-center font-semibold prose'>
          <p>
            Solfunks are generated with 87 unique attributes over 10 categories, giving a
            possibility of 23,057,667,360 different combinations! Each of the 4,444
            Solfunks generated will therefore all be unique 1-of-1s.
          </p>
          <p>
            We will be releasing 4,444 groovy Solfunks on Nov 20th at 13:00 UTC. We want
            to make sure you have an easy time to get what you want. So, unlike the lame
            club you go to, we'll keep giving you what you what you want.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
