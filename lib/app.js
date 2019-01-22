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

};
