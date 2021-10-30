import * as React from 'react'

type IContentLayout = {
  children: React.ReactNode
  title: string
  undertitle?: string
  color?: 'white' | 'black'
}

const ContentLayout = ({
  children,
  title,
  color = 'white'
}: IContentLayout): JSX.Element => {
  return (
    <section className='flex flex-col items-center justify-center w-full mx-auto my-2'>
      <div className='w-full px-8 mb-2 text-center'>
        <h1
          className={`mb-2 text-4xl font-bold text-shadow-primary leading-normal uppercase text-${color}`}
        >
          {title}
        </h1>
      </div>
      <div className='w-full h-full mx-auto'>
        <div className='relative h-full px-0 py-4 overflow-hidden sm:px-8 wrap'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default ContentLayout
