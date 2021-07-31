import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://doll.finance/',
    calloutClass: 'menulink'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.doll.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.doll.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://doll.finance/farms',
    calloutClass: 'menulink'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://doll.finance/pools',
    calloutClass: 'menulink'
  },
  // {
  //   label: 'Overview',
  //   icon: 'OverviewIcon',
  //   href: '#',
  // },
  {
    label: 'Doll Give Away',
    icon: 'GiveIcon',
    href: 'https://doll.finance/giveaway',
  },
  {
    label: 'NFD',
    icon: 'NftIcon',
    href: 'https://doll.finance/nfd',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://doll.finance/lottery',
  },
  {
    label: 'Games',
    icon: 'GamesIcon',
    href: 'https://doll.finance/games',
  },


  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },

]

export default config
