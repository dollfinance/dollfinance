import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const CakeHarvestBalance = ({earningsSum}) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text fontSize="18px" style={{ lineHeight: '56px', color: "#ff0077" }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={earningsSum} />
}

export default CakeHarvestBalance
