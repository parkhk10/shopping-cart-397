import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const container = {
    textAlign: 'center',
};

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
  }));

const ProductContainer = ({product, addToCart}) => {
    const classes = useStyles();
    return (
        <div style={container}>
            <img src={"data/products/" + product.sku + "_1.jpg"} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Button variant="outlined" color="secondary" className={classes.button} onClick={() => addToCart(product)}>Add to Cart</Button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ProductContainer; 