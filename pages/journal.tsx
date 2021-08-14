import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import Layout from '../src/components/Layout';

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '100vh',
  },
});

const Journal: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.banner}>Journal</div>
    </Layout>
  );
};

export default Journal;
