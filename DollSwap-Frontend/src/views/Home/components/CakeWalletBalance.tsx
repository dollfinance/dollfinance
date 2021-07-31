import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CakeWalletBalance = ({ cakeBalance }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text fontSize="18px" style={{ lineHeight: '56px', color: "#ff0077" }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={cakeBalance} fontSize="24px" color="pink" />
}

export default CakeWalletBalance
