const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    if(req.method === 'GET' && url.pathname === '/api/penguins') {
        res.end(JSON.stringify(['bernice', 'bernard']));
    }

};
