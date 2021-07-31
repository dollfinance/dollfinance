import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
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
  * {
      font-family: 'Pacifico', cursive;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background: #ff0094;
    border-radius: 8px;
  }
  .white_box {    
    box-shadow: -4px 5px 10px 2px rgb(0 0 0 / 20%);
  }
  // .swap_box {
  //   max-width: 100%;
  //   width: 486px;
  // }
  .swap_box > div {
    // background: url("../images/swap_bg.png");
    // width: 486px;
    // height: 619px;
    background-color: #fff !important;
    box-shadow: none;
    background-size: 100%;
    padding: 0px 40px;
  }
  .modal_header h2 {
    color: #fff !important;
  }
  nav button {
    color: #fff !important;
  }
  #swap-page button {
    color: #000 !important;
  }
  button.logout_btn {
    border: 2px solid #fff;
    padding: 0 20px;
    height: 35px;
  }
  #swap-currency-input input,
  #swap-currency-input input::placeholder,
  #swap-currency-output input,
  #swap-currency-output input::placeholder {
    color: #ff0094 !important;
  }
  #swap-page button.unlock_btn {
    color: #fff !important;
  }
  .pink_btn {
    color: #ff0094 !important;
  }
  input {
    color: #ff0094 !important;
  }
  ::placeholder {
    color: #ff0094 !important;
  }
  .add-liquidity-input-tokena button {
    color: #ff0094 !important;
  }
  
`

export default GlobalStyle
