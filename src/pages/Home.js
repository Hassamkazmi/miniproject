import React from 'react';
import Item from '../Components/Item';
import Reciept from '../Components/Reciept';
import { Flex,Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <React.Fragment>
      <Flex color="white">
        <Box flex="1" bg="gray.200">
          <Item/>
        </Box>
        <Box w="500px" h='700' bg="gray.100">
          <Reciept/>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Home;