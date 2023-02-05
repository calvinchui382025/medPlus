import { styled } from '@mui/system';
import React from 'react';
import NavBar from '../NavBar';

const HeaderContainer = styled('div')({
  display: 'flex',
  height: '10%',
  // alignItems: 'center',
  justifyContent: 'center',
})

const Header = () => {


  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  )
}

export default Header;