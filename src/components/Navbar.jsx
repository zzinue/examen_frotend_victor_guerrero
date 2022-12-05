import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import {NavLink} from 'react-router-dom'

const Header=styled(AppBar)`
background:#111111
`
const Tabs=styled(NavLink)`
font-size:20px;
margin-right: 20px;
color:inherit;
text-decoration:none`

const Navbar = () => {
    return (
        <Header position='static'>
            <Toolbar>
            <Tabs to='/'>Home</Tabs>
            <Tabs to='/all'>Todos los usuarios</Tabs>
            <Tabs to='/add'>Agregar usuario</Tabs>

            </Toolbar>
        </Header>
    )
}

export default Navbar