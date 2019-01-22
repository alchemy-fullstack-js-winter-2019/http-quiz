const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');

    if(req.method === 'GET' && url.pathname === '/api/penguins') {
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
    res.end('time to write the app!');
};
