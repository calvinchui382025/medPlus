import { Divider, List, ListItem, ListItemButton, Typography, Card, Collapse } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import { mainColor } from '../../App'
import { ContentContainer, Root } from '../../styled-components'
import { CarrierRatingColorObj, CarriersList, niceBoxShadow } from '../../utils/constants'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer'
import ListItemText from '@mui/material/ListItemText'
//==============================================================================
const CarrierContentContainer = styled(ContentContainer)(({theme}) => ({
}));
const CarrierTextContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '24px',
}));
const CarrierPageText = styled(Typography)(({theme}) => ({
}))
const InfoContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
const RatingInfoContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '33%',
  minWidth: '350px',
}));
const leftTextProps = {
  fontSize: '0.8rem',
  fontWeight: 'bold'
}
const rightTextProps = {
  // textAlign: 'right',
  fontSize: '0.8rem',
}
const RatingListItemTextLeft = styled(ListItemText)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}));

const RatingListItemTextRight = styled(ListItemText)(({theme}) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  textAlign: 'right',
}));

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
      <CarrierContentContainer>
        <CarrierTextContainer>
          <CarrierPageText>
            Below is a list of some of our medical professional carriers that we have established good working relationships with over the years. In order to ensure quality, we carefully review each company's experience, longevity, claims handling expertise, financial strength, and degree of commitment to their medical professionals. For each carrier you will find an AM Best rating which is based on a comprehensive quantitative and qualitative evaluation of a company's balance sheet strength, operating performance and business profile. We use these ratings to ensure that all of our carriers are financially secure and have the ability to meet their ongoing contractual obligations.
          </CarrierPageText>
        </CarrierTextContainer>

        <InfoContainer>
          <StyledListContainer>
            <CarrierList>
            {
              CarriersList.map((carrier, index) => {
                const { name, description, rating, url } = carrier
                const opened = openedList[name] === true;
                const ratingValue = rating.split(' ').slice(-1);
                const ratingColor = CarrierRatingColorObj[ratingValue[0]];
                console.log(ratingValue, ratingColor)
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
                        <CarrierRating variant='button' style={{color: ratingColor ? ratingColor : ''}}>{rating}</CarrierRating>
                      </CarrierDetailsWrapper>
                    </Collapse>
                  </CarrierListItem>
              )})
            }
            </CarrierList>
          </StyledListContainer>

          <RatingInfoContainer>
            <Typography variant='h6'>Understanding Best’s Insurer Financial Strength Ratings</Typography>
            <List>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'green'}}>A++, A+</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'green'}}>Superior</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'green'}}>A, A-</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'green'}}>Excellent</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'green'}}>B++, B+</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'green'}}>Good</RatingListItemTextRight>
              </ListItem>

              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'orange'}}>B, B-</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'orange'}}>Fair</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'orange'}}>C++, C+</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'orange'}}>Marginal</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'red'}}>C, C-</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'red'}}>Weak</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: 'red'}}>D</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: 'red'}}>Poor</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps}}>E</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps}}>Under Regulatory Supervision</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps}}>F</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps}}>In Liquidation</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps}}>S</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps}}>Suspended</RatingListItemTextRight>
              </ListItem>

              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: '#2b76c3'}}>NR-1</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: '#2b76c3'}}>Insufficient Data</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: '#2b76c3'}}>NR-2</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: '#2b76c3'}}>Insufficient Size and/or Operating Experience</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: '#2b76c3'}}>NR-3</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: '#2b76c3'}}>Rating Procedure Inapplicable</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: '#2b76c3'}}>NR-4</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: '#2b76c3'}}>Company Request</RatingListItemTextRight>
              </ListItem>
              <ListItem>
                <RatingListItemTextLeft primaryTypographyProps={{...leftTextProps, color: '#2b76c3'}}>NR-5</RatingListItemTextLeft>
                <RatingListItemTextRight primaryTypographyProps={{...rightTextProps, color: '#2b76c3'}}>Not Formally Followed</RatingListItemTextRight>
              </ListItem>
            </List>
          </RatingInfoContainer>
        </InfoContainer>



      </CarrierContentContainer>
      <Footer />
    </Root>
  )
}