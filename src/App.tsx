import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.css';
import { NavBar } from './components';
import { Home,  About, Carriers, Contact, Liability, Products, Quote } from './Pages';
import { styled } from '@mui/system';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "darkgrey"
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "lightgrey"
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
});

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const RouteContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Root>
        <NavBar />
        <RouteContainer>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/carriers' element={<Carriers />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/liability' element={<Liability />} />
            <Route path='/quote' element={<Quote />} />
          </Routes>
        </RouteContainer>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
