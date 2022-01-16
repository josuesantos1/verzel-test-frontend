import { Box, Button, Center, Checkbox, Divider, Input, InputGroup, InputRightElement, SimpleGrid, Spacer, Wrap } from '@chakra-ui/react'
import axios from 'axios';
import type { NextPage } from 'next'
import React, { useEffect, useMemo } from 'react';
import { BsSearch } from 'react-icons/bs';
import Card from '../components/Card';
import ListCars from '../components/ListCars';
import { CARS } from '../types/cars';


const Home: NextPage = () => {
  
    const [search, setSearch] = React.useState('');
    const [listCars, setListCars] = React.useState<CARS[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cars').then(res => {
            console.log(res.data); 
            setListCars(res.data);
        });
    }, [])

  return (
      <Box align="center" p="3vh">
          <Box h="20vh">
              <InputGroup w="50vw">
                  <Input
                      pr="4.5rem"
                      type="text"
                      placeholder="buscar"
                      color="#15a080"
                      borderWidth="2px"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}/>
                  <InputRightElement width="4.5rem" color="#15a080">
                      <Button h="1.75rem" size="sm">
                          <BsSearch />
                      </Button>
                  </InputRightElement>
              </InputGroup>
          </Box>

          <Center>
              <ListCars/>
          </Center>
          <Spacer h="10vh"/>
      </Box>
  )
}

export default Home
