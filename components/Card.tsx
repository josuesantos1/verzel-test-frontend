import { Badge, Box, Flex, 
    Spacer, Text, Image, AspectRatio, 
    Button, FormControl, FormLabel, Input,
    Modal, ModalBody, ModalCloseButton, 
    ModalContent, ModalFooter, ModalHeader, 
    ModalOverlay, useDisclosure, Heading } from '@chakra-ui/react'
import React, { Component } from 'react'
import { CARS } from '../types/cars';

const dimensions = {
    width: '100%',
    height: '100%',
};

export default function Card(props: CARS) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box w={dimensions.width} 
            h={dimensions.height} 
            borderWidth="2px" 
            borderRadius="15px" 
            _hover={{
                background: "white",
                border: "1px solid cyan",
                color: "teal.500",
                zIndex: "2",
                cursor: "pointer",
            }}
            onClick={onOpen}>

            <AspectRatio maxW="90%" maxH="60%" ratio={1}>
                <Image src={props.image} alt={props.name} objectFit="contain" loading="lazy" borderRadius="10px"/>
            </AspectRatio>
            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        Ano
                        {' '}
                        {props.year}                        
                    </Box>
                </Box>

                <Box
                    as="h3"
                    color="gray.600"
                    fontWeight="semibold"
                    mt="1"
                    lineHeight="tight"
                    isTruncated>
                    <Text>
                        {props.name}
                    </Text>
                </Box>

                <Box h="2vh" />

                <Flex>
                    <Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                        R$
                        {' '}
                        {props.price}
                        </Box>
                    </Box>
                    <Spacer />
                    <Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                            {props.mileage}
                            {' '}
                            km
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Modal blockScrollOnMount={false} size="md" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{props.name} - {props.year} - {props.id}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <AspectRatio maxW="100%" ratio={1}>
                        <Image src={props.image} borderRadius="10px"/>
                    </AspectRatio>
                    <Spacer h="20px"/>
                    <Text>Description: {props.description || '*'}</Text>
                    <Text>Price: R$ {props.price}</Text>
                    <Text>Model: {props.model}</Text>
                    <Text>Mileage: {props.mileage} km</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Buy
                    </Button>
                    <Button colorScheme="red" variant="outline" onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

