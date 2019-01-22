const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  const pathname = url.pathname;

  if(pathname === '/api/penguins') res.end(JSON.stringify(['bernice', 'bernard']));
    
};
