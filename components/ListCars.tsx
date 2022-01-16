import { SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { Component } from 'react'
import { client } from '../clients/api'
import { CARS } from '../types/cars'
import Card from './Card'

export default class ListCars extends Component {

    state = {
        cars: [],
    }

    async componentDidMount() {    
        const response = (await client.get("cars")).data as CARS[];

        this.setState({
            cars: response,
        });
    }

    render() {     
        return (
            <SimpleGrid columns={[1, 2, 3]} spacing={10} w="60vw">
                  {this.state.cars.map(car => {
                      return (<Card key="cars"
                                  id={car.id}
                                  model={car.model}
                                  description={car.description}
                                  name={car.name}
                                  image={car.image}
                                  year={car.year}
                                  price={car.price}
                                  mileage={car.mileage}/>)
                  })}
            </SimpleGrid>
        )
    }
}
