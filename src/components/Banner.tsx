import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import { makeStyles, Link } from '@material-ui/core';
import { Arrow } from '../icons';

const useStyles = makeStyles({
  slider: {
    height: '600px',
  },
  container: {
    position: 'relative',
    height: '600px',
  },
  description: {
    position: 'absolute',
    top: '173px',
    right: '149px',
    zIndex: 1,
  },
  leftBtn: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 1,
    padding: '38px 22px 30px 2px',
    left: 0,
    top: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '0',
    borderRadius: '0 55px 55px 0',
  },
  rightBtn: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 1,
    padding: '38px 2px 30px 22px',
    right: 0,
    top: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '0',
    borderRadius: '55px 0 0 55px',
    '& $arrow': {
      transform: 'rotate(180deg)',
    },
  },
  arrow: {
    width: '40px',
    height: '35px',
  },
  title: {
    width: '458px',
    marginBottom: '27px',
    lineHeight: '1.33',
    fontSize: '60px',
    color: '#fff',
    fontWeight: 'normal',
  },
  btn: {
    paddingBottom: '12px',
    fontSize: '13px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#fff',
    borderBottom: 'solid 2px #fff',
    transition: '0.3s all ease',
    '&:hover': {
      textDecoration: 'none',
      color: '#ff5e1b',
      borderColor: '#ff5e1b',
    },
  },
});

const Banner: FunctionComponent = () => {
  const classes = useStyles();

  const PrevArrow = (props) => (
    <button {...props} type="button" className={classes.leftBtn}>
      <Arrow className={classes.arrow} />
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} type="button" className={classes.rightBtn}>
      <Arrow className={classes.arrow} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: classes.slider,
  };

  return (
    <Slider {...settings}>
      <div className={classes.container}>
        <div className={classes.description}>
          <h1 className={classes.title}>Perfume Tips Tricks</h1>
          <Link href="/shop" className={classes.btn}>
            Shop now
          </Link>
        </div>
        <img src="./images/first-banner.png" alt="Fashion style" />
      </div>
      <div className={classes.container}>
        <div className={classes.description}>
          <h1 className={classes.title}>Perfume Tips Tricks</h1>
          <Link href="/shop" className={classes.btn}>
            Shop now
          </Link>
        </div>
        <img src="./images/second-banner.png" alt="Casual style" />
      </div>
    </Slider>
  );
};

export default Banner;
