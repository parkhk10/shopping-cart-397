import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Drawer, List, ListItem } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({cartItems, isOpen, setIsOpen, deleteFromCart}) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
          },
        button: {
          margin: theme.spacing(1),
          position: 'absolute',
          left: '92%',
          top: 0
        },
        listEmpty: {
            width: '300px',
        }
    }));

    const classes = useStyles();

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setIsOpen(open);
      };
    
    const openShoppingCart = () => {
        setIsOpen(true);
    }

    return (
        <React.Fragment>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ShoppingCartIcon></ShoppingCartIcon>}
            onClick={() => openShoppingCart()}
            >
                Cart
            </Button>

            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
                <ListItem className={classes.listEmpty}></ListItem>
                <React.Fragment className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        {cartItems.map(item => <ShoppingCartItem item={item} deleteFromCart={deleteFromCart}></ShoppingCartItem>)}
                    </List>
                </React.Fragment>
            </Drawer>
        </React.Fragment>
    )
}

export default ShoppingCart;