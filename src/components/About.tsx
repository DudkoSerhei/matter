import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: '42px',
    fontWeight: 500,
    lineHeight: 1.43,
    textAlign: 'center',
    marginBottom: '24px',
  },
  container: {
    display: 'flex',
  },
  image: {
    width: '50%',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '30px',
  },
  text: {
    fontSize: '18px',
    lineHeight: 1.67,
    color: '#030303',
  },
  subTitle: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 3.33,
    letterSpacing: '1px',
    color: '#33333a',
    textTransform: 'uppercase',
  },
  list: {
    listStyleType: 'none',
  },
});

const About: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <h2 className={classes.title}>About Matter</h2>
      <div className={classes.container}>
        <img
          className={classes.image}
          src={require('../../public/images/about-matter.png')} // eslint-disable-line global-require
          alt="About Matter"
        />
        <div className={classes.description}>
          <p className={classes.text}>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
          <section>
            <h4 className={classes.subTitle}>
              Artisan Employment Days Created
            </h4>
            <p className={classes.text}>123456</p>
          </section>
          <section>
            <h4 className={classes.subTitle}>Countries Involved To Date</h4>
            <ul className={classes.list}>
              <li className={classes.text}>India</li>
              <li className={classes.text}>China</li>
              <li className={classes.text}>Sri Lanka</li>
            </ul>
          </section>
          <section>
            <h4 className={classes.subTitle}>#MatterTribe</h4>
            <ul className={classes.list}>
              <li className={classes.text}>12 designers</li>
              <li className={classes.text}>12 Factories</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
