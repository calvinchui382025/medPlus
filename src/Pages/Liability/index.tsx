import { Root } from '../../styled-components'
import { styled, Card } from '@mui/material'

const IntroInformationArea = styled('div')({
  position: "absolute",
  top: 0,

})

export const Liability = () => {
  return (
    <Root>
      <IntroInformationArea>
        <img
        src="/images/liabilitytop.jpg"
        style={{height: '271.17px'}}
        >
        </img>
      </IntroInformationArea>
    </Root>
  )
}