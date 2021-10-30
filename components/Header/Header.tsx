import * as React from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import ActiveLink from '@components/ActiveLink'
import StylishButton from '@components/StylishButton'
// import Button from '@components/Button'

import styles from './Header.module.css'
import clsx from 'clsx'

const nav: Array<{ title: string; href: string }> = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Roadmap',
    href: '#roadmap'
  },
  {
    title: 'FAQ',
    href: '#faq'
  }
]

const Header = (): JSX.Element => {
  return (
    <Popover
      as='header'
      className='flex flex-col items-center justify-center px-4 space-y-4 md:flex-col min-h-16'
    >
      <div className='flex flex-col items-center w-full p-4 mx-2 md:flex-row'>
        <div className='flex justify-start flex-1'></div>
        <div className='flex items-center justify-center'>
          <Link href='/'>
            <a tabIndex={0} className='relative px-2 md:px-4'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/header_logo.png' alt='' className='w-full h-full max-w-sm' />
            </a>
          </Link>
        </div>
        <div className='flex justify-end flex-1 py-4 md:py-0'>
          <div className='flex box-shadow-primary'>
            <div className='md:hidden'>
              <Popover.Button
                className={clsx(
                  styles.mobile_menu_btn,
                  'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent'
                )}
              >
                <span className='sr-only'>Open menu</span>
                <AiOutlineMenu
                  className='w-6 h-6'
                  aria-hidden='true'
                  style={{
                    filter:
                      'drop-shadow(2px 2px 0 #3b4156) drop-shadow(1px 1px 0 #6cacbe)'
                  }}
                />
              </Popover.Button>
            </div>
            <div>
              <WalletMultiButton className={styles.connect_btn} />
            </div>
          </div>
        </div>
      </div>
      <nav className='hidden w-full max-w-5xl mx-2 box-shadow-primary md:flex'>
        <div className='grid w-full grid-cols-4 font-extrabold border-2 border-solid border-sf-primary'>
          {nav.map((link, i) => (
            <ActiveLink key={i} href={link.href}>
              <span className='items-center justify-center w-full btn'>{link.title}</span>
            </ActiveLink>
          ))}
        </div>
      </nav>

      <Transition
        as={React.Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-left transform md:hidden'
        >
          {({ close }) => (
            <div className='text-white w-full bg-gradient-to-br from-sf-two to-sf-one divide-sf-one rounded-lg shadow-lg divide-y-[1px] ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <Link href='/'>
                    <a
                      tabIndex={0}
                      className='text-4xl font-bold md:text-lg text-shadow-primary'
                    >
                      Solfunks
                    </a>
                  </Link>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-sf-two active:bg-sf-two focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <AiOutlineClose
                        className='w-6 h-6'
                        aria-hidden='true'
                        style={{
                          filter:
                            'drop-shadow(2px 2px 0 #3b4156) drop-shadow(1px 1px 0 #6cacbe)'
                        }}
                      />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='px-8 py-6 space-y-6'>
                <div className='flex flex-col space-y-6'>
                  {nav.map((link, i) => (
                    <span className='flex items-center' onClick={() => close()} key={i}>
                      <Link href={link.href}>
                        <a className='items-center justify-center w-full text-lg font-bold uppercase text-shadow-primary'>
                          {link.title}
                        </a>
                      </Link>
                    </span>
                  ))}
                </div>

                <StylishButton
                  tabIndex={0}
                  className='w-full'
                  fullWidth
                  href='https://solfunks.com/discord'
                  target='_blank'
                >
                  Join Discord
                </StylishButton>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
