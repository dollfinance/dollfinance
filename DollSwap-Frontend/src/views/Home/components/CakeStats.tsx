import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-image: url('/images/swap_02.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 376px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 30px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats className="white_box">
      <CardBody>
        <Heading size="xl" mb="24px" style={{color: "#ff0077"}}>
          {TranslateString(534, 'Doll Swap Stats')}
        </Heading>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue color="textGreen" fontSize="18px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(536, 'Total DOLL Minted')}</Text>
          {totalSupply && <CardValue color="textGreen" fontSize="18px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(538, 'Total DOLL Burned')}</Text>
          <CardValue fontSize="18px" color="textGreen" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue color="textGreen" fontSize="18px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(540, 'New DOLL/block')}</Text>
          <Text bold fontSize="18px" color="textGreen">{eggPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
