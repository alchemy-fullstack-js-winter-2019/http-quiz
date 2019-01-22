const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  const pathname = url.pathname;

  if(pathname === '/api/penguins') {
    res.end(JSON.stringify(['bernice', 'bernard']));
  } 
  else if(pathname.includes('/api/penguins') && url.query.format === 'full') {
    res.end(JSON.stringify({
      name: 'bernice',
      description: 'What a penguin!',
      age: 7
    }));
  }
  else if(pathname.includes('/api/penguins')) {
    res.end(JSON.stringify({
      name: 'bernice',
    }));
  }
};
