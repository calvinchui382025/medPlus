import { List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { mainColor } from '../../App'
import { ContentContainer, Root } from '../../styled-components'
import { CarriersList } from '../../utils/constants'
//==============================================================================
const StyledListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const CarrierList = styled(List)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));
const CarrierListItem = styled(ListItem)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const CarrierName = styled(Typography)(({theme}) => ({
    color: mainColor,
    fontWeight: 'bold',
    fontSize: '1rem',
  })
)
const CarrierDescription = styled(Typography)(({theme}) => ({
    
  })
)
const CarrierRating = styled(Typography)(({theme}) => ({
    fontWeight: 'bold',
  })
)
//==============================================================================
export const Carriers = () => {
  return (
    <Root>
      <ContentContainer>


        <StyledListContainer>
          <CarrierList>
          {
            CarriersList.map((carrier, index) => {
              const { name, description, rating, url } = carrier
              return (
                <CarrierListItem>
                  <CarrierName variant='h6'>{name}</CarrierName>
                  <Typography variant='caption'>{description}</Typography>
                  <CarrierRating variant='button'>{rating}</CarrierRating>
                </CarrierListItem>
            )})
          }
          </CarrierList>
        </StyledListContainer>

      </ContentContainer>
    </Root>
  )
}