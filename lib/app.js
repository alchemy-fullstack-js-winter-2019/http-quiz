const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');

  if(url.pathname === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <body>
          <p>Welcome to Cari's HTTP Quiz</p>
        </body>
      </html>
    `);
  } 

  // GET /api/penguins should return ['bernice', 'bernard']
  else if(url.pathname === '/api/penguins') {
    res.end(JSON.stringify(['bernice', 'bernard']));
  }

  // GET /api/penguin/king?format=<simple|full>
  else if(req.method === 'GET' && url.pathname === '/api/penguin/king') {
    // If format=full return full json, else return name only
    if(url.query['format'] === 'full') {
      res.end(JSON.stringify({
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
      }));
    } else {
      res.end(JSON.stringify({ 
        name: 'bernice'
      }));
    }
  }

  // DELETE /mistake should return { deleted: true }
  else if(req.method === 'DELETE' && url.pathname === '/mistake') {
    res.end(JSON.stringify({ deleted: true }));
  }

  // Any other response should return a 404 status code
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('Sorry, page "' + req.url + '" not found!');
  }
};
