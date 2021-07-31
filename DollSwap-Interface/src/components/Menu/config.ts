import { MenuEntry, menuStatus } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://doll.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
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
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://doll.finance/pools',
  },
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
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  //   status: menuStatus.SOON,
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },

]

export default config
