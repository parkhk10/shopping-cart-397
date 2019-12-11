import React, {useState, useEffect} from 'react';
import ProductContainer from './components/ProductContainer';
import ShoppingCart from './components/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import './App.css';


const App = () => {
  // static state using react hooks already here
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    console.log("adding to cart!" + product.title)
    var newCart = cartItems.concat([product]);
    setCartItems(newCart);
    setIsOpen(true);
  }

  const deleteFromCart = (product) => {
    console.log("deleting")
    var newCart = cartItems.filter(p => p != product);
    setCartItems(newCart);
  }

  const items = products.map(p => <ProductContainer
                                      product={p}
                                      addToCart={addToCart}
                                  />);

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
        height: 300,
        width: 150,
      },
      control: {
        padding: theme.spacing(2),
      },
      button: {
        margin: theme.spacing(1),
      },
  }));

  const classes = useStyles();

  return (
    <div>
      <h1>Sick Tees Co.</h1>
      
      <ShoppingCart cartItems={cartItems} isOpen={isOpen} setIsOpen={setIsOpen} deleteFromCart={deleteFromCart}></ShoppingCart>

      <Grid container direction="row" justify="center" alignItems="center" className={classes.root} spacing={2}>
        {items.map(pContainer => 
        <Grid item xs={4}>
          <Grid container justify="center" spacing={2}>
            <Grid item value={2}>
              {pContainer}
            </Grid>
          </Grid>
        </Grid>)}
      </Grid>

      {/* <div class="ui grid">{items}</div> */}
    </div>
  );
};

export default App;