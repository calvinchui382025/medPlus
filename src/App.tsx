import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.css';
import Navbar from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#00e676',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
