import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.css';
import { Header } from './components';
import { Home,  About, Carriers, Contact, Liability, Products, Quote } from './Pages';
import { styled } from '@mui/system';
//======================================================
export const mainColor = '#4682b4';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "darkgrey"
    },
    primary: {
      main: mainColor,
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
      // default: "lightgrey"
    },
    primary: {
      main: mainColor,
    },
    secondary: {
      main: '#00e676',
    },
  }
});
//======================================================
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
//======================================================
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const handleToggleTheme = () => {
    if (theme?.palette?.mode === 'light') setTheme(darkTheme);
    else setTheme(lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Root>
        <Header theme={theme} handleToggleTheme={handleToggleTheme} />
        <RouteContainer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/carriers' element={<Carriers />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/liability' element={<Liability />} />
            <Route path='/quote' element={<Quote />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </RouteContainer>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}
//======================================================
export default App;
