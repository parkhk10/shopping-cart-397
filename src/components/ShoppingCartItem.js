import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      position: 'absolute',
      left: '92%',
      top: 0
    },
}));

const ShoppingCartItem = ({item}) => {
    const classes = useStyles();

    return (
        <ListItem >
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={item.title} secondary={"$" + item.price} />
        </ListItem>
    )
}

export default ShoppingCartItem;