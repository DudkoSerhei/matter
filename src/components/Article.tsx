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
    paddingTop: '20px',
    borderTop: '2px solid #33333a',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      filter: 'drop-shadow(2px 4px 6px black)',
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
    fontSize: '30px',
    lineHeight: 1.67,
    color: '#33333a',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.56,
    color: '#33333a',
    marginBottom: '50px',
  },
  image: {
    width: '100%',
  },
});

const ArticleComponent: FunctionComponent<Props> = (props: Props) => {
  const { className, article } = props;
  const classes = useStyles();

  return (
    <div className={cn(classes.container, className)}>
      <span className={classes.label}>{`FIELDTESTED ${' '} ${
        article.date
      }`}</span>
      <h2 className={classes.title}>{article.title}</h2>
      <p className={classes.text}>{article.text}</p>
      <img className={classes.image} src={article.image} alt={article.title} />
    </div>
  );
};

ArticleComponent.defaultProps = defaultProps;

export default ArticleComponent;
