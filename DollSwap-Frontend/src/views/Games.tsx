import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Games = () => {
  const TranslateString = useI18n()

  return (
    <Page>
       <StyledNotFound>        
        <img src="/images/Doll_Games.jpg" alt="Doll Games" style={{marginTop: "60px", marginBottom: "30px"}} />
      </StyledNotFound>
    </Page>
  )
}

export default Games
