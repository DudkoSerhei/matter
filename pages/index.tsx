import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
