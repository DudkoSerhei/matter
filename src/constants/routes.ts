const debug = process.env.NODE_ENV !== 'production';
const prefix = !debug ? '/matter' : ''; /* This is prefix for github.pages.io */

const ROUTES = {
  ROOT: `${prefix}/`,
  SHOP: `${prefix}/shop`,
  FABRIC: `${prefix}/fabric`,
  JOURNAL: `${prefix}/journal`,
  ABOUT: `${prefix}/about`,
};

export default ROUTES;
