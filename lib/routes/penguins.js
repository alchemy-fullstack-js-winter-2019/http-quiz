const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse.apply(req.url, true);

    if(req.method === 'GET' && url.pathname === '/api/penguins') {
        res.end(['bernice', 'bernard']);
    }
};

