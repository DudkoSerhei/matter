import React from 'react';
import { makeStyles, Button, IconButton } from '@material-ui/core';
import Main from './Main';
import Logo from './Logo';
import Navigation from './Navigation';
import { Search, Like, Cart } from '../icons';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 0',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '40px',
  },
  button: {
    color: '#33333a',
    fontSize: '15px',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    marginRight: '30px',
    '&:hover': {
      color: '#ff5e1b',
    },
  },
  btn: {
    marginRight: '40px',
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      '& $icon': {
        color: '#ff5e1b',
        '& path': {
          '&:last-child': {
            fill: '#ff5e1b',
          },
        },
      },
    },
  },
  icon: {
    width: '20px',
    height: '20px',
    color: '#33333a',
    '& path': {
      '&:last-child': {
        fill: '#33333a',
      },
    },
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Main>
        <div className={classes.row}>
          <Logo className={classes.logo} />
          <Navigation />
        </div>
        <div className={classes.row}>
          <Button className={classes.button}>login</Button>
          <IconButton className={classes.btn}>
            <Search className={classes.icon} />
          </IconButton>
          <IconButton className={classes.btn}>
            <Like className={classes.icon} />
          </IconButton>
          <IconButton className={classes.btn}>
            <Cart className={classes.icon} />
          </IconButton>
        </div>
      </Main>
    </header>
  );
};

export default Header;
