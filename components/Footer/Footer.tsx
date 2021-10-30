import * as React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex text-gray-900 h-36 sm:h-24'>
      <div className='container flex flex-col items-center justify-center px-8 py-8 mx-auto space-y-4 text-sm sm:space-y-0 sm:justify-between sm:py-0 sm:flex-row'>
        <div className='font-bold'>© {new Date().getFullYear()} solfunks.com</div>
        <div className='flex items-center space-x-3'>
          <a
            href='https://solfunks.com/twitter'
            rel='noopener noreferrer'
            target='_blank'
          >
            <svg
              fill='currentColor'
              viewBox='0 0 1024 1024'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
            >
              <path d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z'></path>
            </svg>
          </a>
          <a
            href='https://solfunks.com/discord'
            rel='noopener noreferrer'
            target='_blank'
          >
            <svg
              fill='currentColor'
              viewBox='0 0 71 55'
              className='w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m60.104 4.8978c-4.5253-2.0764-9.378-3.6062-14.452-4.4824-0.0924-0.01691-0.1847 0.025349-0.2323 0.10987-0.6241 1.11-1.3154 2.5581-1.7995 3.6963-5.4572-0.817-10.886-0.817-16.232 0-0.4842-1.1635-1.2006-2.5863-1.8275-3.6963-0.0476-0.0817-0.1399-0.12396-0.2323-0.10987-5.071 0.87338-9.9237 2.4032-14.452 4.4824-0.0392 0.0169-0.0728 0.0451-0.0951 0.0817-9.2046 13.751-11.726 27.165-10.489 40.412 0.005597 0.0648 0.041978 0.1268 0.092353 0.1662 6.0729 4.4598 11.956 7.1673 17.729 8.9619 0.0924 0.0282 0.1903-0.0056 0.2491-0.0817 1.3657-1.865 2.5831-3.8315 3.6269-5.8995 0.0616-0.1211 0.0028-0.2648-0.1231-0.3127-1.931-0.7325-3.7697-1.6256-5.5384-2.6398-0.1399-0.0817-0.1511-0.2818-0.0224-0.3776 0.3722-0.2789 0.7445-0.5691 1.0999-0.8621 0.0643-0.0535 0.1539-0.0648 0.2295-0.031 11.62 5.3051 24.199 5.3051 35.682 0 0.0756-0.0366 0.1652-0.0253 0.2323 0.0282 0.3555 0.293 0.7277 0.586 1.1027 0.8649 0.1287 0.0958 0.1203 0.2959-0.0196 0.3776-1.7687 1.0339-3.6074 1.9073-5.5412 2.637-0.1259 0.0479-0.1819 0.1944-0.1203 0.3155 1.0662 2.0651 2.2836 4.0316 3.6241 5.8967 0.056 0.0789 0.1567 0.1127 0.2491 0.0845 5.8014-1.7946 11.684-4.5021 17.757-8.9619 0.0532-0.0394 0.0868-0.0986 0.0924-0.1634 1.4804-15.315-2.4796-28.618-10.498-40.412-0.0196-0.0394-0.0531-0.0676-0.0923-0.0845zm-36.379 32.428c-3.4983 0-6.3808-3.2117-6.3808-7.156s2.8266-7.156 6.3808-7.156c3.5821 0 6.4367 3.2399 6.3807 7.156 0 3.9443-2.8266 7.156-6.3807 7.156zm23.592 0c-3.4982 0-6.3807-3.2117-6.3807-7.156s2.8265-7.156 6.3807-7.156c3.5822 0 6.4367 3.2399 6.3808 7.156 0 3.9443-2.7986 7.156-6.3808 7.156z' />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
