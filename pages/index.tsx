import React, { FunctionComponent } from 'react';
import { makeStyles, Link, IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import {
  Layout,
  Banner,
  Main,
  ProductCard,
  About,
  Article,
  SmArticle,
  ShopCard,
} from '../src/components';
import { Play } from '../src/icons';
import { Button } from '../src/ui-kit';
import {
  products,
  articles,
  ROUTES,
  categories,
  brands,
  videos,
} from '../src/constants';

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
  shop: {
    padding: '62px 0',
    backgroundColor: '#fff',
  },
  brands: {
    padding: '62px 0',
    backgroundColor: '#fff',
  },
  brandWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0 10%',
  },
  link: {
    '&:hover': {
      '& $brand': {
        filter: 'drop-shadow(2px 1px 0px #ff6008)',
      },
    },
  },
  brand: {
    height: '25px',
    filter: 'contrast(0.2)',
  },
  videoItem: {
    width: '31%',
    '& .react-player__preview': {
      backgroundSize: 'auto !important',
    },
    '& div': {
      transition: '0.3s all ease',
    },
    '&:hover': {
      '& div': {
        boxShadow: '#33333a 0px 5px 15px',
      },
      '& $playIcon': {
        color: '#33333a',
      },
      '& $videoName': {
        transform: 'scale(1.05)',
      },
    },
  },
  videoName: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.56',
    padding: '25px 0 0 20px',
    transition: '0.3s all ease',
  },
  playIcon: {
    width: '75px',
    height: '75px',
    color: '#fff',
    filter: 'drop-shadow(2px 4px 6px black)',
    transition: '0.3s all ease',
  },
});

const Home: FunctionComponent = () => {
  const classes = useStyles();
  const router = useRouter();

  const goToJournal = () => {
    router.push(ROUTES.JOURNAL);
  };

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
          <Button
            className={classes.button}
            variant="black"
            onClick={goToJournal}
          >
            See the journal
          </Button>
        </Main>
      </div>
      <div className={classes.shop}>
        <Main>
          <h2 className={classes.title}>Shop</h2>
          <div className={classes.wrapper}>
            {categories.map((category) => (
              <ShopCard
                key={category.id}
                className={classes.card}
                category={category}
              />
            ))}
          </div>
        </Main>
      </div>
      <div className={classes.explore}>
        <Main>
          <h2 className={classes.title}>Recommended Videos</h2>
          <div className={classes.wrapper}>
            {videos.map((video) => (
              <div key={video.id} className={classes.videoItem}>
                <ReactPlayer
                  playing
                  controls
                  width="100%"
                  height="260px"
                  light
                  url={video.url}
                  playIcon={
                    <IconButton>
                      <Play className={classes.playIcon} />
                    </IconButton>
                  }
                />
                <h3 className={classes.videoName}>{video.name}</h3>
              </div>
            ))}
          </div>
          <Button className={classes.button} variant="black">
            Show More
          </Button>
        </Main>
      </div>
      <div className={classes.brands}>
        <Main>
          <h2 className={classes.title}>As Seen On</h2>
          <div className={classes.brandWrapper}>
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.url}
                className={classes.link}
                target="_blank"
              >
                <img
                  className={classes.brand}
                  src={brand.image}
                  alt={brand.name}
                />
              </Link>
            ))}
          </div>
        </Main>
      </div>
    </Layout>
  );
};

export default Home;
