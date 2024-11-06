import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

//  pages
import Home from './pages/Home'
import About from './pages/About'
import JoinUs from './pages/JoinUs'
import Contact from './pages/Contact' 
import Donate from './pages/Donate';
import Support from './pages/Support';

import NavBar from './components/NavBar';
import Footer from './components/Footer';


import theme from './theme';

function App() { 

  return (
    <ChakraProvider theme={theme}> 
           <Router>
            <NavBar /> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/join-us" element={<JoinUs />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/donate" element={<Donate />} /> 
                <Route path="/support" element={<Support />} /> 
              </Routes> 
            <Footer />
          </Router> 
    </ChakraProvider>
  )
}

export default App
