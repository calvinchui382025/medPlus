import { Root } from '../../styled-components'
import { ContentContainer } from '../../styled-components'
import { styled, Card, CardActions, TextField } from '@mui/material'

const MediaBanner = styled('div')({

})

const QuoteCard = styled(Card)({
  
})

export const Quote = () => {
  return (
    <Root>
      <ContentContainer>
        <MediaBanner>
          {/* <img 
          src={require("../../images/quotebanner.jpg")}
          style={{height: "100%", width: "100"}}
          /> */}
        </MediaBanner>
      </ContentContainer>
    </Root>
  )
}