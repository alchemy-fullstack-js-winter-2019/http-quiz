const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');
  // GET /api/penguins should return ['bernice', 'bernard']
  if(url.pathname === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <body>
          <p>Welcome to Cari's HTTP Quiz</p>
        </body>
      </html>
    `);
  } else if(url.pathname === '/api/penguins') {
    res.end(JSON.stringify(['bernice', 'bernard']));
  }
  // GET /api/penguin/king?format=<simple|full>
  else if(req.method === 'GET' && url.pathname === '/api/penguin/king') {
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

};
