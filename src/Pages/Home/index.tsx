import React, { useState } from 'react'
import { Root } from '../../styled-components'
import { Box, styled } from '@mui/system'
import { Button, Card } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { moveDownAnimation, moveUpAnimation, niceBoxShadow } from '../../utils/constants';
import { useInView } from 'react-intersection-observer';
import { animateProps } from '../../utils/constants';
import { HomeCards } from '../../utils/constants';
//======================================================
const Imagebox = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  animation: `${moveDownAnimation} 2s`,
})

const ProductCardsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  padding: '24px',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const ProductCard = styled(Card)({
  width: '30%',
  display: 'flex',
  justifyContent: 'top',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: niceBoxShadow,
  padding: '12px',
  animation: `${moveUpAnimation} 2s`,

  '&:hover': {
    transform: 'scale(1.04)',
    transition: "transform 0.5s ease-in-out",
  },

  '@media (max-width: 768px)': {
    width: '100%',
    marginBottom: '12px',
  },
})
//======================================================
export const Home = () => {

  const [cardHovered, setCardHovered] = useState<string>('')

  const handleCardClicked = (cardTitle: any) => {
    console.log(cardTitle);
  }

  const handleCardHovered = (cardTitle: string) => {
    setCardHovered(cardTitle);
  }

  return (
    <Root>
      <Imagebox>
        <img
          src="/images/homestock.jpg"
          style={{height: '100%', width: '100%'}}
        />
      </Imagebox>

      <ProductCardsContainer>
        {HomeCards.map((card, index) => {
          const cardIcon = card.icon;
          return (
            <ProductCard
              key={index}
              onClick={() => handleCardClicked(card.title)}
              onMouseOver={() => handleCardHovered(card.title)}
              raised={cardHovered === card.title}
            >
              {cardIcon}
              <strong>{card.title}</strong>
              <p>{card.description}</p>
            </ProductCard>
          )
        })
        }
        {/* <ProductCard onClick={handleProfessionalClick} onMouseOver={() => {}}>
          <VolunteerActivismIcon sx={{fontSize: 60}} />
          <strong>Professional Liability Insurance</strong>
          <p>The medical profession is more challenged today by medical malpractice than it has been at any other point in history. You'd like to think it will never happen to you, but unfortunately, it can. MedPLUS offers several liability coverage options that can protect you and your practice from the devastating effects of a lawsuit. Depending on the insurance carrier, professional liability insurance coverage includes the following:</p>
        </ProductCard>
        

        <ProductCard onClick={handleCommercialClick}>
          <LocalLibraryIcon sx={{fontSize: 60 }} />
          <strong>Commercial Insurance Products</strong>
          <p>Our experienced staff is committed to delivering commercial products tailored to meet your professional needs. We are ready to work with you to develop a program that makes sense for you and your employees. Our wide variety of services and lines of coverage include, but are not limited to, the following:</p>
        </ProductCard>

        <ProductCard onClick={handlePersonalClick}>
          <Diversity1Icon sx={{fontSize: 60}} />
          <strong>Personal Insurance Products</strong>
          <p>Life and health insurance have many variables and decisions. How much coverage is enough and what type of policy is best for you and your family are just two of the questions that might arise. After determining your personal product needs, our agency will provide you with the most comprehensive plan with the greatest value for you and your family. We specialize in a wide variety of services and lines of coverage that include, but are not limited to, the following:</p>
        </ProductCard> */}

      </ProductCardsContainer>

    </Root>
  )
}