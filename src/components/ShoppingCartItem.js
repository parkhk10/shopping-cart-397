import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Fab } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      position: 'absolute',
      left: '92%',
      top: 0
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const ShoppingCartItem = ({item, deleteFromCart}) => {
    const classes = useStyles();

    return (
        <ListItem>
        <ListItemIcon>
            <Fab size="small" color="primary" aria-label="remove" className={classes.margin} onClick={() => deleteFromCart(item)}>
            <RemoveIcon />
            </Fab>
        </ListItemIcon>
        <ListItemText primary={item.title} secondary={"$" + item.price} />
        </ListItem>
    )
}

export default ShoppingCartItem;