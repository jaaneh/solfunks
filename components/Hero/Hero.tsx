import * as React from 'react'
import Image from 'next/image'

import { IMG_BASE_URL } from '@constants'
import StylishButton from '@components/StylishButton'

// import Minter from '@components/Minter'
// import * as anchor from '@project-serum/anchor'

// const treasury = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_TREASURY_ADDRESS)
// const config = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CONFIG)
// const candyMachineId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
// const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST
// const connection = new anchor.web3.Connection(rpcHost)
// const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE, 10)
// const txTimeout = 30000

const Hero = (): JSX.Element => {
  return (
    <div className='w-full px-4 py-4 hero-content max-w-7xl'>
      <div className='flex flex-col justify-center w-full my-0 md:my-6 md:flex-row'>
        <div className='flex items-center justify-center w-full px-4 md:w-1/2 lg:w-2/5'>
          <figure className='relative w-full h-72 md:min-h-[50vh] overflow-hidden select-disabled'>
            <Image
              src={IMG_BASE_URL + '1_tr.png'}
              alt='Showcasing possible NFT for mint'
              layout='fill'
              className='object-cover object-center w-full h-full rounded-2xl'
              priority={true}
            />
          </figure>
        </div>
        <div className='flex flex-col w-full px-4 pt-8 md:w-1/2 md:pt-0'>
          <div className='flex-1 space-y-4'>
            <h1 className='text-4xl text-shadow-primary'>Solfunks</h1>
            <div className='flex flex-col justify-center font-semibold prose'>
              <p>
                We are here to bring the world back to a more funky time. That's why we’re
                releasing 4,444 Solfunks which will act as an invite to this legendary
                disco.
              </p>
              <p>Welcome to the disco.</p>
            </div>
          </div>
          <div className='flex flex-col justify-center w-full pt-6'>
            <div className='mb-2 text-lg'>
              <p>
                Date: <span className='font-bold'>Nov 20th - 13:00 UTC</span>
              </p>
              <p>
                Price: <span className='font-bold'>0.5 SOL</span>
              </p>
            </div>
            {/* <Minter
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout}
            /> */}
            <StylishButton fullWidth disabled>
              Coming Soon
            </StylishButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
