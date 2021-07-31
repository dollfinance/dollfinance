import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import VisionCard from 'views/Home/components/VisionCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/img1.png'), url('/images/img2.png');
    // background-position: left center, right center;
    height: 210px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const CardsLarge = styled(BaseLayout)`
  align-items: stretch;
  justify-self: center;
  margin-bottom: 32px;

  & > div {
    grid-column: span 12;
    width: 100%;
    text-align: center;

  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" mb="10px" color="text" style={{ fontSize: "52px" , color: "#fff" }}>
          {TranslateString(576, 'DollSwap')}
        </Heading>
        <Text className="dash_subheading" color="text">{TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain')}</Text>
      </Hero>
      <div>
        {/* <CardsLarge>
          <VisionCard />
        </CardsLarge> */}
        <Cards>
          <FarmStakingCard />
          <CakeStats />
        </Cards>
        <CardsLarge>
          <TotalValueLockedCard />
        </CardsLarge>
      </div>
    </Page>
  )
}

export default Home
