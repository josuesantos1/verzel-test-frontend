import { Box, Center, SimpleGrid, Spacer, } from '@chakra-ui/react'
import React, { Component } from 'react'
import Card from '../components/Card'

export default class Cars extends Component {
    render() {
        return (
            <Box align="center" p="3vh">
                <Box h="30vh">

                </Box>
                <Spacer />
                <Center>
                    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </SimpleGrid>
                </Center>
                <Spacer h="10vh"/>
            </Box>
        )
    }
}
