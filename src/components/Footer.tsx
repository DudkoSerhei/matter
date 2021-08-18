import React, { useState, FunctionComponent } from 'react';
import { makeStyles, Link } from '@material-ui/core';
import Main from './Main';
import { Button, Input } from '../ui-kit';
import { Twitter, Facebook } from '../icons';
import { footerNav } from '../constants';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#33333a',
    padding: '40px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 400,
    color: '#fff',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
  },
  label: {
    color: '#dedede',
    fontSize: '14px',
    fontWeight: 400,
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    transition: '0.3s color ease',
    '&:hover': {
      color: '#3CB371',
    },
  },
  address: {
    color: '#dedede',
    fontSize: '14px',
    maxWidth: '150px',
    fontWeight: 400,
    lineHeight: 2.1,
    transform: 'translateY(-4px)',
    marginBottom: '34px',
    transition: '0.3s color ease',
    '&:hover': {
      color: '#3CB371',
    },
  },
  form: {
    width: '40%',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '65%',
    marginRight: '30px',
    transition: '0.3s border-color ease',
    '&:hover': {
      borderColor: '#3CB371',
    },
    '&input': {
      transition: '0.3s color ease',
      '&:hover': {
        color: '#3CB371',
      },
    },
  },
  socials: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  socItem: {
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    width: '24px',
    height: '24px',
    color: '#b2b2b2',
    transition: '0.3s color ease',
    '&:hover': {
      color: '#3CB371',
    },
  },
  description: {
    color: '#dedede',
    fontSize: '14px',
    fontWeight: 400,
    textAlign: 'center',
  },
});

const Footer: FunctionComponent = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className={classes.footer}>
      <Main>
        <div className={classes.container}>
          {footerNav.map((item) => (
            <div key={item.title}>
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
                  <li className={classes.address}>{item.address}</li>
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
              <Input
                className={classes.input}
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
              />
              <Button variant="white">Subscribe</Button>
            </div>
            <ul className={classes.socials}>
              <li className={classes.socItem}>
                <Link
                  className={classes.link}
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <Facebook className={classes.icon} />
                </Link>
              </li>
              <li className={classes.socItem}>
                <Link
                  className={classes.link}
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <Twitter className={classes.icon} />
                </Link>
              </li>
            </ul>
          </form>
        </div>
        <p className={classes.description}>
          {`© Copyright Matter PTE LTD ${new Date().getFullYear()}`}
        </p>
      </Main>
    </footer>
  );
};

export default Footer;
