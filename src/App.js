import React, {useState, useEffect} from 'react';
import ProductContainer from './components/ProductContainer';
import ShoppingCart from './components/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBpHp-AKZswDaKCoKAN2KY1LCVC7Nnj97g",
  authDomain: "shopping-cart-397.firebaseapp.com",
  databaseURL: "https://shopping-cart-397.firebaseio.com",
  projectId: "shopping-cart-397",
  storageBucket: "shopping-cart-397.appspot.com",
  messagingSenderId: "737583244838",
  appId: "1:737583244838:web:b2aa56a239e8d62fa328e7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const App = () => {
  // static state using react hooks already here
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setData(snap.val())
    }
    db.on('value', handleData, error => alert(error));
    return () => {
      db.off('value', handleData);
    };
  }, [])

  const products = Object.values(data);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch('./data/products.json');
  //     const json = await response.json();
  //     setData(json);
  //   };
  //   fetchProducts();
  // }, []);

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