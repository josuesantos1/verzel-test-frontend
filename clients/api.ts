import axios from 'axios';
import { CARS } from '../types/cars';

export const client = axios.create({
    baseURL: 'http://localhost:8080/',
})

export const isLoggedIn = async () => {
    const response = await client.get(
        'cars/me',
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    ).catch(err => {
        console.log(err)
    })
    return true
}

export const patchCars = async (cars: CARS) => {
    const url = 'http://localhost:8080';
    const result = await axios.patch(`${url}/cars/me`, {
        ...cars
    },
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    
    return result.data;
}

export const postCars = async (cars: CARS) => {
    const url = 'http://localhost:8080';
    const result = await axios.post(`${url}/cars/me`, {
        ...cars
    },
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    
    return result.data;
}

export const deleteCars = (id) => {
    const url = 'http://localhost:8080';
    return axios.delete(`${url}/cars/me?id=${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

