import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Pacifico', cursive;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  nav {
    background-color: ${({ theme }) => theme.colors.topnav} !important;  
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background: #ff0094;
    border-radius: 8px;
  }
  .white_box {    
    box-shadow: -4px 5px 10px 2px rgb(0 0 0 / 20%) !important;
    background-color: ${({ theme }) => theme.colors.topnav} !important;  
  }
  .toggle_wrapper > div:nth-child(2) {
    background-color: rgb(255 255 255 / 30%);
    border-radius: 30px;
  }
  .toggle_wrapper > div:nth-child(2) a {
    color: ${({ theme }) => theme.colors.pink};
  }
  .toggle_wrapper > div div:first-child {
    background-color: ${({ theme }) => theme.colors.card};
  }
  .toggle_wrapper > div div:first-child div {
    background-color: #fff;
  }
  button {
    color: #fff !important;
  }
  .center_card_panel {
    max-width: 450px;
    margin: 10px auto 0px;
    justify-content: center;
  }
`

export default GlobalStyle
