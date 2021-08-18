import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';
import { Button } from '../ui-kit';
import { Product } from '../interfaces';

interface Props {
  product: Product;
  className?: string;
}

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  card: {
    position: 'relative',
    cursor: 'pointer',
    transition: '0.3s all ease',
    maxHeight: '450px',
    '&:hover': {
      transform: 'scale(1.1)',
      padding: '13.5px',
      backgroundColor: '#fff',
      boxShadow: '#ff6008 0px 20px 30px -10px',
      '& $button': {
        visibility: 'visible',
        top: '38%',
        transition: '0.3s all ease',
      },
      '& $label': {
        opacity: 1,
      },
      '& $image': {
        opacity: '0.5',
      },
      '& $new': {
        top: '23.5px',
        left: '28.5px',
      },
    },
  },
  image: {
    width: '100%',
    marginBottom: '12px',
    opacity: '1',
    transition: '0.3s all ease',
  },
  new: {
    position: 'absolute',
    fontSize: '12px',
    color: '#fff',
    backgroundColor: '#ff6008',
    padding: '1.5px 11px',
    top: '10px',
    left: '15px',
    zIndex: 1,
    transition: '0.3s all ease',
  },
  name: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.56,
  },
  price: {
    fontSize: '14px',
    lineHeight: 2.14,
  },
  button: {
    visibility: 'hidden',
    position: 'absolute',
    top: '20%',
    left: '57px',
    zIndex: 1,
    padding: '12px 30px',
    transition: '0s all ease',
  },
  label: {
    opacity: 0,
    transition: '1s opacity ease',
  },
});

const ProductCard: FunctionComponent<Props> = (props: Props) => {
  const { product, className } = props;
  const classes = useStyles();

  return (
    <div className={cn(className, classes.card)}>
      {product.new && <span className={classes.new}>NEW</span>}
      <img className={classes.image} src={product.image} alt={product.name} />
      <h3 className={classes.name}>{product.name}</h3>
      <p className={classes.price}>{`$${product.price.toFixed(2)}`}</p>
      <Button className={classes.button} variant="black">
        <span className={classes.label}>QUICK VIEW</span>
      </Button>
    </div>
  );
};

ProductCard.defaultProps = defaultProps;

export default ProductCard;
