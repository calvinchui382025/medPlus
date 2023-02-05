import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Nav = styled('nav')({
    display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'row',
})

const NavBar = () => {
  return (
    <Nav>
      <Button>
        <Link to='/home'>
          home
        </Link>
      </Button>
      <Button>
        <Link to='/about'>
          about
        </Link>
      </Button>
      <Button>
        <Link to='/products'>
          products
        </Link>
      </Button>
      <Button>
        <Link to='/carriers'>
          carriers
        </Link>
      </Button>
      <Button>
        <Link to='/contact'>
          contact
        </Link>
      </Button>
      <Button>
        <Link to='/quote'>
          quote
        </Link>
      </Button>
      <Button>
        <Link to='/liability'>
          liability
        </Link>
      </Button>
    </Nav>
  )
}

export default NavBar;