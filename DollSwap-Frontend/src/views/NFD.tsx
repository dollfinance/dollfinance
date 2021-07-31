import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  text-align: center;
`

const NFD = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>        
        <img src="/images/Doll_NFD_Banner.jpg" alt="Give Away" style={{marginTop: "60px", marginBottom: "30px"}} />
      </StyledNotFound>
    </Page>
  )
}

export default NFD
