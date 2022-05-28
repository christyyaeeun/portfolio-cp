import React from 'react';
import {
  ChakraProvider,
  theme,
  CSSReset
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Contact from './pages/Contact';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    <ChakraProvider theme={ theme }>
      <CSSReset />
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/" element={ <PageLayout /> }>
          <Route path="/portfolio" element={ <Portfolio /> } />

        <Route path="/contact" element={ <Contact /> } />
        <Route path="/aboutme" element={ <AboutMe /> } />
      </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
