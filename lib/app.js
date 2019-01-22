const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');

    if(req.method === 'GET' && url.pathname === '/api/penguins') {
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
    else if(url.search === `?format=${url.query.format}`) {
        if(url.query.format.includes('full')) {
            res.end(JSON.stringify({
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            }));
        }  
        else {
            res.end(JSON.stringify({
                name: 'bernice'
            }));
        }
    }
    else if(req.method === 'DELETE' && url.pathname.includes('/mistake')) {
        res.end(JSON.stringify({ deleted: true }));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
};
