import { Menu, MenuButton, Button, 
    MenuList, MenuGroup, MenuItem, 
    MenuDivider, Avatar } from '@chakra-ui/react'
import { useRouter } from 'next/router';

    import { useState } from 'react'
import { client, isLoggedIn } from '../clients/api';

export default function NavBar() {

    const router = useRouter();

    const handleProdileRoutes = () => {;
        client.get('/cars/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            if (res.status === 200) {
                router.push('/admin');
            } 
            router.push('/login');
        }).catch(err => {
            router.push('/login');
        })
    }

    return (
        <Menu>
            <MenuButton as={Button}>
                <Avatar size="sm" />
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile' >
                    <MenuItem onClick={handleProdileRoutes}>
                        Profile
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                    <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
