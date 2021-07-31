import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton, Text } from '@pancakeswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
// import { getFarmApy } from 'utils/apy'
// import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAPYCard = () => {
  const TranslateString = useI18n()
  // const farmsLP = useFarms()
  // const prices = useGetApiPrices()
  // const cakePrice = usePriceCakeBusd()

  // const highestApy = useMemo(() => {
  //   const apys = farmsLP
      // Filter inactive farms, because their theoretical APY is super high. In practice, it's 0.
  //     .filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  //     .map((farm) => {
  //       if (farm.lpTotalInQuoteToken && prices) {
  //         const quoteTokenPriceUsd = prices[farm.quoteToken.symbol.toLowerCase()]
  //         const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
  //         return getFarmApy(farm.poolWeight, cakePrice, totalLiquidity)
  //       }
  //       return null
  //     })

  //   const maxApy = max(apys)
  //   return maxApy?.toLocaleString('en-US', { maximumFractionDigits: 2 })
  // }, [cakePrice, farmsLP, prices])

  return (
    <StyledFarmStakingCard className="white_box">
      <CardBody>
        <Text color="pink" style={{ fontSize:'18px' }}>
          Earn up to
        </Text>
        <CardMidContent color="secondary">
          {/* {highestApy ? (
            `${highestApy}% ${TranslateString(736, 'APR')}`
          ) : (
            <Skeleton animation="pulse" variant="rect" height="44px" />
          )} */}
          <Heading size="xl">413.43% APR</Heading>
        </CardMidContent>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="pink" style={{ fontSize:'18px' }}>
            in Farms
          </Text>
          {/* <NavLink exact activeClassName="active" to="/farms" id="farm-apy-cta" color="secondary">
            <ArrowForwardIcon color="primary" />
          </NavLink> */}
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAPYCard
