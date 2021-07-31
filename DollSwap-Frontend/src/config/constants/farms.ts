import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DOLL-BUSD LP',
    lpAddresses: {
      97: '0xA4c26482a428408F308057fa877c26dc3130Fc87',
      56: '0x7Db5bb702c6705937F4735247A299d28398bf003',
    },
    tokenSymbol: 'DOLL',
    tokenAddresses: {
      97: '0xe1b3C5b3DA0Cd96339FDB7729Ae66D5B7fa42099',
      56: '0x92a996B29Bf9EB45c938b5E43e9704d79375F35E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DOLL-BNB LP',
    lpAddresses: {
      97: '0x4Db25a9b14C7F5e637B0d64Aa7ed584F9d97eBD3',
      56: '0x607528eD115eA91304504ff0ae59409446A4e4f1',
    },
    tokenSymbol: 'DOLL',
    tokenAddresses: {
      97: '0xe1b3C5b3DA0Cd96339FDB7729Ae66D5B7fa42099',
      56: '0x92a996B29Bf9EB45c938b5E43e9704d79375F35E',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOLL',
    lpAddresses: {
      97: '0xA4c26482a428408F308057fa877c26dc3130Fc87',
      56: '0x7Db5bb702c6705937F4735247A299d28398bf003',
    },
    tokenSymbol: 'DOLL',
    tokenAddresses: {
      97: '0xe1b3C5b3DA0Cd96339FDB7729Ae66D5B7fa42099',
      56: '0x92a996B29Bf9EB45c938b5E43e9704d79375F35E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
