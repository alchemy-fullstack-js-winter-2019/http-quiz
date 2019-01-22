const { parse } = require('url');


module.exports = (req, res) => {
  const url = parse(req.url, true);

  if(req.method === 'GET' && url.pathname.includes('/api/penguins/king')) {
    const query = url.query.format;
    if(query === 'full') {
      res.end(JSON.stringify({
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
      }));
    }
    else {
      res.end(JSON.stringify({ name: 'bernice' }));
    }
  }
  else if(req.method === 'GET' && url.pathname.includes('/api/penguins')) {
    res.end(JSON.stringify(['bernice', 'bernard']));
  }
  else if(req.method === 'DELETE' && url.pathname.includes('/mistake')) {
    res.end(JSON.stringify({ deleted: true }));
  }
};

