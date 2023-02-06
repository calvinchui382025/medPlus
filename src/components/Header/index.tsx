import { styled } from '@mui/system';
import { FC } from 'react';
import NavBar, { NavBarTypes } from '../NavBar';

const HeaderContainer = styled('div')({
  display: 'flex',
  // height: '10%',
  // alignItems: 'center',
  justifyContent: 'center',
})

const Header: FC<NavBarTypes> = ({ theme, handleToggleTheme }) => {


  return (
    <HeaderContainer>
      <NavBar theme={theme} handleToggleTheme={handleToggleTheme} />
    </HeaderContainer>
  )
}

export default Header;