import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { Face } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
  },
  main: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  footer: {
    display: 'flex',
  },
  icon: {
    fontSize: '40px',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <h1>
          Welcome to{' '}
          <Link target="_blank" href="https://nextjs.org">
            Next.js!
          </Link>
        </h1>

        <footer className={classes.footer}>
          <Face className={classes.icon} />
          <p>{new Date().getFullYear()}</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
