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
      default: '#282829'
    },
    primary: {
      main: '#CDDDF9',
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
      paper: '#f2f2f2'
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
const Root = styled('div')(({theme}) => {
  console.log({theme})
  return ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  })
})

const RouteContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
});

const ScrollableContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  overflow: 'auto',
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
        <ScrollableContainer>
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
        </ScrollableContainer>
        </Root>
      </BrowserRouter>
    </ThemeProvider>
  );
}
//======================================================
export default App;
