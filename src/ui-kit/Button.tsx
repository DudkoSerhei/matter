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
  button: {},
  white: {},
  black: {},
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
