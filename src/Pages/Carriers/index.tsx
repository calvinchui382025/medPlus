import { Divider, List, ListItem, ListItemButton, Typography, Card, Collapse } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import { mainColor } from '../../App'
import { ContentContainer, Root } from '../../styled-components'
import { CarriersList, niceBoxShadow } from '../../utils/constants'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
//==============================================================================
const StyledListContainer = styled('div')(({theme}) => (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '33%',
    minWidth: '350px',
  })
)

const CarrierList = styled(List)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
}))
const CarrierListItem = styled(ListItem)(({theme}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
}))
const CarrierListButton = styled(ListItemButton)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
}))

const CarrierName = styled(Typography)(({theme}) => ({
    color: mainColor,
    fontWeight: 'bold',
    fontSize: '1rem',
  })
)
const CarrierDetailsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '12px 32px',

})
const CarrierDescription = styled(Typography)(({theme}) => ({
    
  })
)
const CarrierRating = styled(Typography)(({theme}) => ({
    fontWeight: 'bold',
  })
)
//==============================================================================
export const Carriers = () => {

  const [openedList, setOpenedList] = useState<any>({});

  const handleCardClicked = (carrierName:string) => {
    if (openedList[carrierName] === true) {
      setOpenedList({...openedList, [carrierName]: false});
    } else {
      setOpenedList({...openedList, [carrierName]: true});
    }
  }

  return (
    <Root>
      <ContentContainer>


        <StyledListContainer>
          <CarrierList>
          {
            CarriersList.map((carrier, index) => {
              const { name, description, rating, url } = carrier
              const opened = openedList[name] === true;
              return (
                <CarrierListItem>
                  <CarrierListButton 
                    onClick={() => handleCardClicked(name)}
                  >
                    <CarrierName variant='h6'>{name}</CarrierName>
                    {opened ? <ExpandLess /> : <ExpandMore />}
                  </CarrierListButton>
                  <Collapse in={opened} unmountOnExit>
                    <CarrierDetailsWrapper>
                      <CarrierDescription variant='body1'>{description}</CarrierDescription>
                      <CarrierRating variant='button'>{rating}</CarrierRating>
                    </CarrierDetailsWrapper>
                  </Collapse>
                </CarrierListItem>
            )})
          }
          </CarrierList>
        </StyledListContainer>



      </ContentContainer>
    </Root>
  )
}