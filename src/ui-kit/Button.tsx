import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import { makeStyles, Button as Btn } from '@material-ui/core';

interface Props {
  className?: string;
  children: JSX.Element | string;
  variant: 'white' | 'black';
  onClick?: MouseEventHandler;
}

const defaultProps = {
  onClick: () => {},
  className: '',
};

const useStyles = makeStyles({
  button: {
    padding: '7px 30px',
    fontSize: '14px',
    textTransform: 'uppercase',
    border: '1px solid',
    borderRadius: 0,
    transition: '0.3s color ease',
  },
  white: {
    backgroundColor: '#fff',
    color: '#33333a',
    borderColor: '#fff',
    '&:hover': {
      color: '#fff',
    },
  },
  black: {
    backgroundColor: '#33333a',
    color: '#fff',
    borderColor: '#33333a',
    '&:hover': {
      color: '#33333a',
    },
  },
});

const Button: React.FC<Props> = (props: Props) => {
  const { children, variant, onClick, className } = props;
  const classes = useStyles();

  const buttonClassName = cn(classes.button, className, {
    [classes.white]: variant === 'white',
    [classes.black]: variant === 'black',
  });

  return (
    <Btn className={buttonClassName} onClick={onClick}>
      {children}
    </Btn>
  );
};

Button.defaultProps = defaultProps;

export default Button;
