import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  main: {
    backgroundColor: '#fcfcfc',
    color: '#33333a',
  },
});

const Layout: FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
