import React, { useContext } from 'react'
import {
  Button,
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import SS from './assignment06/SS';
import {} from 'react-router-dom'
import Routing from './assignment07/Routing';
function App() {

  return (
    
    <ChakraProvider theme={theme}>
     {/* <SS></SS> */}
  <Routing></Routing>
    </ChakraProvider>
  
  );
}

export default App;
