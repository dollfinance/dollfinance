import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard className="white_box center_card_panel">
      <CardBody> 
        <Text color="pink" style={{ fontSize:'18px' }}>
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Text>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          <Heading size="xl">{`$${tvl}`}</Heading>
          <Text color="pink" style={{ fontSize:'18px' }}>{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
