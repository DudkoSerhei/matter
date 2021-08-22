import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';
import { Article } from '../interfaces';

interface Props {
  className?: string;
  article: Article;
}

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  container: {
    padding: '8px 0 20px',
    borderTop: '2px solid #33333a',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      borderColor: '#ff6008',
      '& $title': {
        filter: 'drop-shadow(2px 4px 6px #ff6008)',
      },
    },
  },
  label: {
    position: 'relative',
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: '1px',
    color: '#33333a',
    lineHeight: 3.33,
    whiteSpace: 'pre-wrap',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '6px',
      left: '98px',
      width: '2px',
      height: '2px',
      backgroundColor: '#33333a',
      borderRadius: '50%',
    },
  },
  title: {
    fontSize: '24px',
    lineHeight: 1.46,
    color: '#33333a',
    height: '70px',
    marginBottom: '18px',
  },
  text: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.56,
    color: '#33333a',
  },
  image: {
    width: '100%',
  },
});

const SmArticle: FunctionComponent<Props> = (props: Props) => {
  const { className, article } = props;
  const classes = useStyles();

  return (
    <div className={cn(classes.container, className)}>
      <span className={classes.label}>{`FIELDTESTED ${' '} ${
        article.date
      }`}</span>
      <h2 className={classes.title}>{article.title}</h2>
      {article.image ? (
        <img
          className={classes.image}
          src={article.image}
          alt={article.title}
        />
      ) : (
        <p className={classes.text}>{article.text}</p>
      )}
    </div>
  );
};

SmArticle.defaultProps = defaultProps;

export default SmArticle;
