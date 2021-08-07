import React from 'react';
import { makeStyles, Link, TextField } from '@material-ui/core';
import Main from './Main';
import { Button } from '../ui-kit';
import { Twitter, Facebook } from '../icons';
import { footerNav } from '../constants';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#33333a',
  },
  container: {},
  item: {},
  title: {},
  list: {},
  label: {},
  link: {},
  form: {},
  row: {},
  input: {},
  button: {},
  socials: {},
  socItem: {},
  icon: {},
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Main>
        <div className={classes.container}>
          {footerNav.map((item) => (
            <div key={item.title} className={classes.item}>
              <h3 className={classes.title}>{item.title}</h3>
              <ul className={classes.list}>
                {item.items &&
                  item.items.map((element) => (
                    <li key={element.label} className={classes.label}>
                      <Link
                        className={classes.link}
                        href={element.url}
                        target="_blank"
                      >
                        {element.label}
                      </Link>
                    </li>
                  ))}
                {item.address && (
                  <li className={classes.label}>{item.address}</li>
                )}
                {item.phone && (
                  <li className={classes.label}>
                    <Link className={classes.link} href={`tel:${item.phone}`}>
                      {item.phone}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
          <form className={classes.form}>
            <h3 className={classes.title}>Subscribe to newsletter</h3>
            <div className={classes.row}>
              <TextField
                className={classes.input}
                placeholder="Enter your email"
              />
              <Button className={classes.button} variant="white">
                Subscribe
              </Button>
            </div>
            <ul className={classes.socials}>
              <li className={classes.socItem}>
                <Facebook className={classes.icon} />
              </li>
              <li className={classes.socItem}>
                <Twitter className={classes.icon} />
              </li>
            </ul>
          </form>
        </div>
      </Main>
    </footer>
  );
};

export default Footer;
