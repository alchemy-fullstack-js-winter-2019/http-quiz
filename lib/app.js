const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(url, true);
  const pathname = url.pathname;

  // if(pathname === '')
  res.end('time to write the app!');
    
};
