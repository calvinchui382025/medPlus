import React from 'react'
import { Root } from '../../styled-components'
import { Box, styled } from '@mui/system'
import { Card } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { niceBoxShadow } from '../../utils/constants';

const Imagebox = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
})

const ProductCardsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  padding: '24px',
})

const Productcard = styled(Card)({
  width: '30%',
  display: 'flex',
  justifyContent: 'top',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: niceBoxShadow,
  padding: '12px',
})

export const Home = () => {
  return (
    <Root>
      <Imagebox>
        <img
        src="/images/homestock.jpg"
        style={{height: '100%', width: '100%'}}
        >
        </img>
      </Imagebox>
      <ProductCardsContainer>
        <Productcard>
          <LocalLibraryIcon sx={{fontSize: 60 }} />
          <strong>Commercial Insurance Products</strong>
          <p>Our experienced staff is committed to delivering commercial products tailored to meet your professional needs. We are ready to work with you to develop a program that makes sense for you and your employees. Our wide variety of services and lines of coverage include, but are not limited to, the following:</p>
        </Productcard>
        <Productcard>
          <VolunteerActivismIcon sx={{fontSize: 60}} />
          <strong>Professional Liability Insurance</strong>
          <p>The medical profession is more challenged today by medical malpractice than it has been at any other point in history. You'd like to think it will never happen to you, but unfortunately, it can. MedPLUS offers several liability coverage options that can protect you and your practice from the devastating effects of a lawsuit. Depending on the insurance carrier, professional liability insurance coverage includes the following:</p>
        </Productcard>
        <Productcard>
          <Diversity1Icon sx={{fontSize: 60}} />
          <strong>Personal Insurance Products</strong>
          <p>Life and health insurance have many variables and decisions. How much coverage is enough and what type of policy is best for you and your family are just two of the questions that might arise. After determining your personal product needs, our agency will provide you with the most comprehensive plan with the greatest value for you and your family. We specialize in a wide variety of services and lines of coverage that include, but are not limited to, the following:</p>
        </Productcard>
      </ProductCardsContainer>
    </Root>
  )
}