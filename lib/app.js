const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    if(req.method === 'GET' && url.pathname === '/penguins') {
        res.end('bernice', 'bernard');
    }
};
