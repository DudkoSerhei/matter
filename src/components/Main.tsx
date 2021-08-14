import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  main: {
    width: '80%',
    margin: '0 auto',
    display: 'inherit',
    flexDirection: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
  },
});

const Main: FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  const classes = useStyles();

  return <div className={classes.main}>{children}</div>;
};

export default Main;
