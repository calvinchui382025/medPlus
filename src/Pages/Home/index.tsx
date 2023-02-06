import React, { useEffect, useState } from 'react'
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
interface ImageboxProps {
  height: number
}
const Imagebox = styled('div')<ImageboxProps>(({height}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    animation: `${moveDownAnimation} 2s`,
    minHeight: height,
  })
)

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
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [cardHovered, setCardHovered] = useState<string>('')

  const handleCardClicked = (cardTitle: any) => {
    console.log(cardTitle);
  }

  const handleCardHovered = (cardTitle: string) => {
    setCardHovered(cardTitle);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Root>
      <Imagebox height={windowWidth / 2.334}>
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
      </ProductCardsContainer>

    </Root>
  )
}