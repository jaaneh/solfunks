/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@blocto/sdk',
  '@project-serum/sol-wallet-adapter',
  '@solana/wallet-adapter-base',
  '@solana/wallet-adapter-react',
  '@solana/wallet-adapter-wallets',
  '@solana/wallet-adapter-react-ui',
  '@solana/wallet-adapter-bitpie',
  '@solana/wallet-adapter-blocto',
  '@solana/wallet-adapter-coin98',
  '@solana/wallet-adapter-ledger',
  '@solana/wallet-adapter-mathwallet',
  '@solana/wallet-adapter-phantom',
  '@solana/wallet-adapter-safepal',
  '@solana/wallet-adapter-slope',
  '@solana/wallet-adapter-solflare',
  '@solana/wallet-adapter-sollet',
  '@solana/wallet-adapter-solong',
  '@solana/wallet-adapter-torus'
])

/** @type {import('next').NextConfig} */
module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/Solfunks',
        permanent: true
      }
    ]
  }
})
