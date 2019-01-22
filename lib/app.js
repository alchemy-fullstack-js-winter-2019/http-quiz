const { parse } = require('url');
// const bodyParser = require('../bodyParser');
module.exports = (req, res) => {
    const url = parse(req.url, true);
    const parseQueryString = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');

    if(req.method === 'GET' && url.pathname.includes('/api/penguins')) {
        res.end(JSON.stringify({ name: 'bernice' }));
    } 
    else if(req.method === 'GET' && parseQueryString.pathname === '/api/penguins') {
        res.end(JSON.stringify({ name: 'bernice',  description: 'What a penguin!',  age: 7 }));
    } 
    else if(req.method === 'GET' && parseQueryString.pathname === '/api/penguins') {
        res.end(JSON.stringify('bernice', 'bernard'));
    }
    else if(req.method === 'DELETE' && url.pathname.includes('/api/penguins/mistake')) {
        res.end(JSON.stringify({ deleted: 1 }));
    }
};

