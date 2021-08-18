import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';
import { Button } from '../ui-kit';
import { Category } from '../interfaces';

interface Props {
  className?: string;
  category: Category;
}

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  link: {
    position: 'relative',
    textDecoration: 'none',
    color: '#33333a',
    '&:hover': {
      '& $btn': {
        visibility: 'visible',
        bottom: '40%',
      },
      '& $img': {
        filter: 'brightness(0.8)',
      },
      '& $title': {
        visibility: 'hidden',
      },
    },
  },
  title: {
    visibility: 'visible',
    position: 'absolute',
    textAlign: 'center',
    padding: '12px 0',
    bottom: '60px',
    left: '0',
    right: '0',
    fontSize: '18px',
    backgroundColor: '#fff',
    color: '#030303',
    zIndex: 1,
  },
  img: {
    width: '100%',
    transition: '0.3s all ease',
  },
  btn: {
    visibility: 'hidden',
    position: 'absolute',
    width: '180px',
    bottom: '15%',
    left: '42px',
    right: '42px',
  },
});

const ShopCard: FunctionComponent<Props> = (props: Props) => {
  const { className, category } = props;
  const classes = useStyles();

  return (
    <Link href={category.href} passHref>
      <a className={cn(className, classes.link)}>
        <span className={classes.title}>{category.title}</span>
        <img
          className={classes.img}
          src={category.image}
          alt={category.title}
        />
        <Button className={classes.btn} variant="black">
          SHOP NOW
        </Button>
      </a>
    </Link>
  );
};

ShopCard.defaultProps = defaultProps;

export default ShopCard;
