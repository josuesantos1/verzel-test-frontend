import { useDisclosure, Box, AspectRatio, 
    Badge, Flex, Spacer, Modal, ModalOverlay, 
    ModalContent, ModalHeader, ModalCloseButton, 
    ModalBody, ModalFooter, Button, Image, Text, FormControl, 
    FormErrorMessage, FormLabel, Input, InputGroup, Stack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import React from "react";
import { patchCars } from "../clients/api";

export default function FormCarUpdate(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setName] = React.useState('');
    const [model, setModel] = React.useState('');
    const [year, setYear] = React.useState(0);
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [mileage, setMileage] = React.useState('');

    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = props.image;
        const id = props.id;
        const newCar = {
            id,
            image,
            name,
            model,
            year,
            price,
            description,
            mileage
        }

        const result = patchCars(newCar);
        route.reload();
        onClose();
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleModel = (e) => {
        setModel(e.target.value);
    }

    const handleYear = (e) => {
        setYear(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleMileage = (e) => {
        setMileage(e.target.value);
    }

    const dimensions = {
        width: '100%',
        height: '100%',
    };

    return (
        <Box>
            <Button colorScheme='teal' variant='outline' onClick={onOpen}>
                Update
            </Button>
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
                }}>

                <Modal blockScrollOnMount={false} size="md" isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Sale car - Update</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    <Stack spacing={4}>
                        <InputGroup>
                            <Input placeholder='Name' onChange={(e) => handleName(e)} />
                        </InputGroup>
                        <InputGroup>
                            <Input placeholder='Model' onChange={(e) => handleModel(e)}/>
                        </InputGroup>
                        <InputGroup>
                        </InputGroup>
                        <InputGroup>
                            <Input type="number" placeholder='Year' onChange={(e) => handleYear(e)}/>
                        </InputGroup>
                        <InputGroup>
                            <Input placeholder='Price' onChange={(e) => handlePrice(e)}/>
                        </InputGroup>
                        <InputGroup>
                            <Input placeholder='Description' onChange={(e) => handleDescription(e)}/>
                        </InputGroup>
                        <InputGroup>
                            <Input placeholder='Mileage' onChange={(e) => handleMileage(e)}/>
                        </InputGroup>
                    </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={ (e) => handleSubmit(e) }>
                            Save    
                        </Button>
                        <Button colorScheme="red" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    )
}


