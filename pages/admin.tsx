import { Box, Button, Flex, 
    Heading, List, 
    ListItem, SimpleGrid, 
    Spacer, Text, Wrap, WrapItem,
    Avatar, 
    Center} from '@chakra-ui/react'
import axios from 'axios'
import { NextPage } from 'next'

import React, { useEffect, useMemo, useState } from 'react'
import Card from '../components/Card'
import Cars from '../components/Cars'
import FormCar from '../components/FormCar'
import { CARS } from '../types/cars'

  const Admin: NextPage = () => {

    const [cars, setCars] = useState<CARS[]>([])

    useEffect(() => {
        const url = 'http://localhost:8080/cars/me';
        const result = axios.get(
            url,
            {
                headers: {
                    Authorization: `Bearer ${ token }`
                }
            }
        ).then(res => res.data)
        .catch(err => console.log("[ERROR: ]", err));
        
        result.then(res => {
            setCars(res)
        }).catch(err => console.log("[ERROR: ]", err));
    }, [])

    let token: string | null;

    if(typeof window !== "undefined") {
        if(localStorage.getItem("token")) {
            token = localStorage.getItem("token");
        } else{
        return []
        }
     }

    return (
        <Box align="center">
            <Flex h="20vh" w="60vw" justifyContent="space-between" p="20px">
                <Center>
                    <FormCar />
                </Center>
            </Flex>
            <Heading>Your cars</Heading>
            <Box h="30px"/>
            {/* <Wrap w="70vw" spacing="30px" align="center" justify="center" borderRadius="20px" p="20px"> */}
            <SimpleGrid columns={[1, 2, 3]} spacing={10} w="60vw">
                  {cars.map(car => {
                      return (<Cars key={car}
                                  id={car.id}
                                  name={car.name}
                                  image={car.image}
                                  model={car.model}
                                  year={car.year}
                                  price={car.price}
                                  mileage={car.mileage}
                                  description={car.description}/>)
                  })}
            </SimpleGrid>
            <Box h="50px"/>
        </Box>
    )
}

export default Admin;