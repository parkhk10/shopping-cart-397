import React, {useState, useEffect} from 'react';
import ProductContainer from './components/ProductContainer';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const App = () => {
  // static state using react hooks already here
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  const items = products.map(p => <ProductContainer
                                      pImg={p.sku}
                                      pTitle={p.title}
                                      pPrice={p.price}
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
  }));

  const classes = useStyles();

  return (
    <div>
      <h1>Sick Tees Co.</h1>
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