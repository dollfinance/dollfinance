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

const GiveAway = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>        
        <img src="/images/Doll_Give_away.jpg" alt="Give Away" style={{marginTop: "60px", marginBottom: "30px"}} />
        <Text mb="16px">{TranslateString(999, "Bring a smile to an underprivileged kid's face by donating Dolls…")}</Text>
        <Text mb="16px">{TranslateString(999, "Every child, as he or she grows up, deserves dolls to play with. Dolls not only entertain the child, but also help in the child’s emotional and educational development. A toddler’s skills improve as it identifies colours and shapes in doll toys.")}</Text>
        <Text mb="16px">{TranslateString(999, "Underprivileged children from poor backgrounds are no different from other children. But they are deprived of the joys and pleasures of playing with dolls simply because their parents lack the means to buy dolls.")}</Text>
        <Text mb="16px">{TranslateString(999, "We doll community donate doll tokens across the world who are taking care of charity activities to kids education and health.")}</Text>
      </StyledNotFound>
    </Page>
  )
}

export default GiveAway
