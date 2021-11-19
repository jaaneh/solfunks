import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import * as anchor from '@project-serum/anchor'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import toast from 'react-hot-toast'

import StylishButton from '@components/StylishButton'
import styles from './Minter.module.css'

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken
} from '../../candy-machine'

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  treasury: anchor.web3.PublicKey
  txTimeout: number
}

const Minter = (props: HomeProps) => {
  const [isActive, setIsActive] = useState(false)
  const [isSoldOut, setIsSoldOut] = useState(false)
  const [isMinting, setIsMinting] = useState(false)

  const [itemsAvailable, setItemsAvailable] = useState(0)
  const [itemsRedeemed, setItemsRedeemed] = useState(0)

  const [startDate, setStartDate] = useState(new Date(props.startDate))

  const wallet = useAnchorWallet()
  const [candyMachine, setCandyMachine] = useState<CandyMachine>()

  const refreshCandyMachineState = () => {
    ;(async () => {
      if (!wallet) return

      const { candyMachine, goLiveDate, itemsRemaining, itemsAvailable, itemsRedeemed } =
        await getCandyMachineState(
          wallet as anchor.Wallet,
          props.candyMachineId,
          props.connection
        )

      setItemsAvailable(itemsAvailable)
      setItemsRedeemed(itemsRedeemed)

      setIsSoldOut(itemsRemaining === 0)
      setStartDate(goLiveDate)
      setCandyMachine(candyMachine)
    })()
  }

  const onMint = async () => {
    if (!isActive) return

    try {
      setIsMinting(true)
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        )

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          'singleGossip',
          false
        )

        if (status && !status?.err) {
          toast.success('Congratulations! Mint succeeded!')
        } else {
          toast.error('Mint failed! Please try again!')
        }
      }
    } catch (error) {
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = 'SOLD OUT!'
        } else if (error.message.indexOf('0x135')) {
          message = 'Insufficient funds to mint. Please fund your wallet.'
        }
      } else {
        if (error.code === 311) {
          message = 'SOLD OUT!'
          setIsSoldOut(true)
        } else if (error.code === 312) {
          // eslint-disable-next-line quotes
          message = "Minting period hasn't started yet."
        }
      }

      toast.error(message)
    } finally {
      setIsMinting(false)
      refreshCandyMachineState()
    }
  }

  useEffect(refreshCandyMachineState, [wallet, props.candyMachineId, props.connection])

  return (
    <>
      {!wallet ? (
        <span className='box-shadow-primary'>
          <WalletMultiButton className={styles.mint_btn} style={{ width: '100%' }} />
        </span>
      ) : (
        <>
          <div className='flex flex-col items-center mb-2'>
            <p className='mb-1'>
              <span className='font-bold'>
                {itemsRedeemed} / {itemsAvailable}
              </span>
            </p>
            <progress
              className='progress progress-secondary bg-df-two'
              value={itemsRedeemed}
              max={itemsAvailable}
            ></progress>
          </div>
          <StylishButton
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
            loading={isMinting}
            fullWidth
          >
            {isSoldOut ? (
              'SOLD OUT'
            ) : isActive ? (
              isMinting ? (
                <span>Minting..</span>
              ) : (
                'MINT'
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </StylishButton>
        </>
      )}
    </>
  )
}

type IRenderer = {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}

const renderCounter = ({ hours, minutes, seconds }: IRenderer) => {
  return (
    <span className='flex items-center justify-center text-base'>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  )
}

export default Minter
