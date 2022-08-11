import React from 'react'
import {Flex,Center} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <React.Fragment>
      <Flex color="white">
        <Center flex="1" bg="gray.400">
        <Link to='/'>
          LOGO
          </Link>
        </Center>
        <Center w="500px" h='100' bg="gray.400">
          <Link to='/sales'>
          Sales
          </Link>
         
        </Center>
      </Flex>
    </React.Fragment>
  )
}

export default Navbar