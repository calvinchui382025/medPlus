import { ListItem, Typography, Collapse } from '@mui/material'

import { useState } from 'react'
import { Root } from '../../styled-components'
import { CarrierRatingColorObj, CarriersList } from '../../utils/constants'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer'
import { CarrierContentContainer, CarrierTextContainer, CarrierPageText, InfoContainer, StyledListContainer, CarrierList, CarrierListItem, CarrierListButton, CarrierName, CarrierDetailsWrapper, CarrierDescription, CarrierRating, RatingInfoContainer, RatingList, RatingListItemTextLeft, leftTextProps, RatingListItemTextRight, rightTextProps } from './styledComponents'
//==============================================================================

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
            <RatingList>
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
            </RatingList>
          </RatingInfoContainer>
        </InfoContainer>



      </CarrierContentContainer>
      <Footer />
    </Root>
  )
}