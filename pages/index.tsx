import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Layout,
  Banner,
  Main,
  ProductCard,
  About,
  Article,
  SmArticle,
} from '../src/components';
import { Button } from '../src/ui-kit';
import { products, articles } from '../src/constants';

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
  explore: {
    display: 'grid',
    padding: '62px 0',
  },
  article: {
    width: '49%',
  },
  smArticle: {
    width: '48%',
  },
  button: {
    margin: '30px auto 0',
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
      <div className={classes.explore}>
        <Main>
          <h2 className={classes.title}>Explore</h2>
          <div className={classes.wrapper}>
            <Article className={classes.article} article={articles[0]} />
            <div className={classes.wrapper} style={{ width: '49%' }}>
              {articles.slice(1, 5).map((article) => (
                <SmArticle
                  key={article.id}
                  className={classes.smArticle}
                  article={article}
                />
              ))}
            </div>
          </div>
          <Button className={classes.button} variant="black">
            See the journal
          </Button>
        </Main>
      </div>
    </Layout>
  );
};

export default Home;
