import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  },
  item: {
    fontSize: '14px',
    fontWeight: 600,
    marginRight: '40px',
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      '& $button': {
        color: '#ff5e1b',
      },
      '& $icon': {
        transform: 'rotate(180deg)',
      },
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    textTransform: 'uppercase',
    color: '#33333a',
    cursor: 'pointer',
    transition: '0.3s color ease',
  },
  icon: {
    width: '14px',
    marginLeft: '5px',
    transition: '0.3s transform ease',
  },
});

const Navigation: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <li className={classes.item}>
        <button className={classes.button} type="button">
          <span>shop</span>
          <ExpandMore className={classes.icon} />
        </button>
      </li>
      <li className={classes.item}>
        <button className={classes.button} type="button">
          <span>fabric</span>
          <ExpandMore className={classes.icon} />
        </button>
      </li>
      <li className={classes.item}>
        <button className={classes.button} type="button">
          <span>journal</span>
          <ExpandMore className={classes.icon} />
        </button>
      </li>
      <li className={classes.item}>
        <button className={classes.button} type="button">
          <span>about</span>
          <ExpandMore className={classes.icon} />
        </button>
      </li>
    </nav>
  );
};

export default Navigation;
