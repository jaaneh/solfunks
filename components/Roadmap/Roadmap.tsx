import * as React from 'react'
import { Chrono } from 'react-chrono'

import useWindowSize, { ISize } from '@hooks/useWindowSize'
import roadmap from '@content/roadmap.json'
import ContentLayout from '@components/ContentLayout'

const Roadmap = (): JSX.Element => {
  const size: ISize = useWindowSize()

  return (
    <ContentLayout title='Roadmap'>
      <Chrono
        items={roadmap}
        mode={size.width > 1024 ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
        cardWidth={500}
        cardHeight={100}
        useReadMore={false}
        hideControls={true}
        theme={{
          primary: 'white',
          secondary: 'white',
          cardBgColor: 'white',
          cardForeColor: 'black',
          titleColor: 'black'
        }}
      />
    </ContentLayout>
  )
}

export default Roadmap
