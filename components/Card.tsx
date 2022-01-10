import { Badge, Box, Flex, Spacer, Text, Image } from '@chakra-ui/react'
import React, { Component } from 'react'

const property = {
    imageUrl: 'https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg',
    productUrl: 'https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg',
    imageAlt: 'Tracker',
    year: 2017,
    title: 'Tracker 2017',
    formattedPrice: '$180,900.00',
    mileage: 12000,
  };

const dimensions = {
    width: '20vw',
    height: '48vh',
};

export default class Card extends Component {
    render() {
        return (
            <Box w={dimensions.width} h={dimensions.height} borderWidth="2px" borderRadius="15px" onClick={() => { console.log(property.productUrl); }}>
                <Image src={property.imageUrl} alt={property.imageAlt} />

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
                            {property.year}                        
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
                            {property.title}
                        </Text>
                    </Box>

                    <Box h="2vh" />

                    <Flex>
                        <Box>
                            <Box as="span" color="gray.600" fontSize="sm">
                            R$
                            {' '}
                            {property.formattedPrice}
                            </Box>
                        </Box>
                        <Spacer />
                        <Box>
                            <Box as="span" color="gray.600" fontSize="sm">
                                {property.mileage}
                                {' '}
                                km
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                </Box>
        )
    }
}
