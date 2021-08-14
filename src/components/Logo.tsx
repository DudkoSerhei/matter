import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';

interface Props {
  className?: string;
}

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  logo: {
    fontSize: '40px',
    fontWeight: 500,
    color: '#030303',
    letterSpacing: '1.3px',
    lineHeight: '28px',
    textDecoration: 'none',
  },
});

const Logo: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const { className } = props;

  return (
    <Link href="/">
      <a className={cn(classes.logo, className)}>matter</a>
    </Link>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
