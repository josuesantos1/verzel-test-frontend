import { Box, Button, Center, Text, Heading, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { client } from "../clients/api";
import DropImage from "../components/DropImage";

const Signup: NextPage = () => {
    
    const route = useRouter();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSigup = () => {
        client.post('/users', {
            name,
            email,
            password,
        }).then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data)
                route.push('/admin');
            }
        }).catch(err => {
            route.push('/');
        })
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }



    return (
        <Center>
            <Box w="40vw" p="20px" align="center" 
                color="#15a080" 
                borderWidth="2px" 
                borderRadius="15px">
                <Heading>Sign-up</Heading>
                <Box h="30px"/>
                <InputGroup size='md'>
                    <Input placeholder='Name' 
                            pr='4.5rem'
                            type="text"
                            onChange={handleName}/>
                </InputGroup>
                <Box h="30px"/>
                <InputGroup size='md'>
                    <Input placeholder='email' 
                            pr='4.5rem'
                            type="email"
                            onChange={handleEmail}/>
                </InputGroup>
                <Box h="30px"/>
                <InputGroup size='md'>
                    <Input placeholder='password'
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        onChange={handlePassword}/>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Box h="30px"/>
                <Button colorScheme="teal" variant="outline" onClick={handleSigup}>
                    Sign-up
                </Button>
                <Box h="10px"/>
                <Link href="/login">
                    I already have an account
                </Link>
            </Box>
        </Center>
    )
}

export default Signup;
