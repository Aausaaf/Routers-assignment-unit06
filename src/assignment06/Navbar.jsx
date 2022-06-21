import React, { useContext } from 'react'

import {Box, Heading} from '@chakra-ui/react'
import Login from './Login'
import Logout from './Logout'
import Userdetails from './Userdetails'
const  Navbar = () =>  {

    
    
  return (
    <>
       <Box  display="flex" justifyContent="space-around" bg='pink' w='100%' h="10vh" p={4} color='white'>
      <Heading cursor="pointer" mt="-1.3vh" onClick={()=>{
        
      }}>Login</Heading>
      <Heading cursor="pointer"  mt="-1.3vh" onClick={()=>{
        
      }}>Logout</Heading>
      <Heading cursor="pointer"  mt="-1.3vh" onClick={()=>{
       
      }}>Userdetails</Heading>
    
</Box>



    </>
  )
}

export default Navbar