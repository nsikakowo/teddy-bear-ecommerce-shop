import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {Link, useLocation} from 'react-router-dom'
import useStyles from './styles'

import logo from '../../assests/logo.png'

const NavBar = ({totalItems}) => {
    const location = useLocation();
    const classes = useStyles();

    return (
        <>
            <AppBar position ='fixed' className= {classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component ={Link} to ='/' variant ='h6' className ={classes.title} color = 'inherit'>
                        <img src={logo} alt= 'Teddy Bear Shop' height ='60px' className = {classes.image} />
                        TeddyBear Store
                    </Typography>
                    <div className = {classes.grow}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component ={Link} to ='/cart' aria-label = 'Show cart items' color='inherit'>
                            <Badge badgeContent ={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
