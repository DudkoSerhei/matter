import React from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  main: {
    minWidth: '80%',
    margin: '0 auto',
    display: 'inherit',
    flexDirection: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
  },
});

const Main: React.FC = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return <div className={classes.main}>{children}</div>;
};

export default Main;
