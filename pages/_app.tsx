import '@fontsource/ibm-plex-mono/300.css'
import '@fontsource/ibm-plex-mono/400.css'
import '../styles/button.css'
import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/daisy.css'

import * as React from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { Toaster } from 'react-hot-toast'

const WalletConnection = dynamic(() => import('@components/WalletConnection'), {
  ssr: false
})

import Layout from '@components/Layout'

import SEO from '../next-seo.config'

import * as gtag from '@lib/gtag'
const isProd = process.env.NODE_ENV === 'production'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Toaster
        position='bottom-center'
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: '1rem',
            backgroundColor: '#2c384c',
            color: '#ffffff'
          }
        }}
      />
      <WalletConnection>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletConnection>
    </>
  )
}

export default MyApp
