import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import Layout from '../src/components/Layout';
import Banner from '../src/components/Banner';
import Main from '../src/components/Main';
import ProductCard from '../src/components/ProductCard';
import About from '../src/components/About';
import { products } from '../src/constants';

const useStyles = makeStyles({
  products: {
    padding: '62px 0',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: '42px',
    fontWeight: 500,
    lineHeight: 1.43,
    textAlign: 'center',
    marginBottom: '24px',
  },
  card: {
    width: '23%',
    marginTop: '40px',
    '&:nth-child(-n+4)': {
      marginTop: 0,
    },
  },
  about: {
    padding: '62px 0',
    backgroundColor: '#fff',
  },
});

const Home: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Banner />
      <div className={classes.products}>
        <Main>
          <h2 className={classes.title}>Featured</h2>
          <div className={classes.wrapper}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                className={classes.card}
                product={product}
              />
            ))}
          </div>
        </Main>
      </div>
      <div className={classes.about}>
        <Main>
          <About />
        </Main>
      </div>
    </Layout>
  );
};

export default Home;
