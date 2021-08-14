import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import Layout from '../src/components/Layout';

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '100vh',
  },
});

const About: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.banner}>About</div>
    </Layout>
  );
};

export default About;
