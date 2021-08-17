import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

interface Props {
  className?: string;
  src: string;
  alt: string;
}

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  container: {
    '& div': {
      overflow: 'inherit !important',
      position: 'inherit !important',
    },
  },
  image: {
    // @ts-ignore
    position: 'inherit !important',
    inset: 'inherit !important',
    padding: 'inherit !important',
    width: 'inherit !important',
    height: 'inherit !important',
    margin: 'inherit !important',
    maxWidth: 'inherit !important',
    minHeight: 'inherit !important',
    maxHeight: 'inherit !important',
  },
});

const ImageComponent: FunctionComponent<Props> = (props: Props) => {
  const { className, src, alt } = props;
  const classes = useStyles();

  return (
    <div className={cn(classes.container, className)}>
      <Image className={classes.image} layout="fill" src={src} alt={alt} />
    </div>
  );
};

ImageComponent.defaultProps = defaultProps;

export default ImageComponent;
