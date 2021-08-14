import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import Layout from '../src/components/Layout';
import Banner from '../src/components/Banner';

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '100vh',
  },
});

const Home: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Banner />
      <div className={classes.banner}>Home</div>
    </Layout>
  );
};

export default Home;
