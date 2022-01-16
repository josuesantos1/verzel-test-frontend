import { Box, Button, Center, Flex, Heading, Input, InputGroup, InputRightElement, Link, SimpleGrid } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { client } from "../clients/api";

const Login: NextPage = () => {
    
    const router = useRouter();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClickLogin = () => {

        console.log(email, password)

        client.post('/login', {
            email,
            password
        }).then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data)
                router.push('/admin');
            } 
        }).catch(err => {
            router.push('/login');
        })
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
                <Heading>Log-in</Heading>
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
                <Button colorScheme="teal" variant="outline" onClick={handleClickLogin}>
                    Log-in
                </Button>
                <Box h="10px"/>
                <Link href="/signup">
                    i don't have account
                </Link>
            </Box>
        </Center>
    )
}

export default Login
