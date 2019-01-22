const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    if(req.method === 'GET' && url.pathname === '/api/penguins') {
        res.end(['bernice', 'bernard']);
    }

    else if(req.method === 'GET' && url.pathname.query === 'format=full') {
        res.end(JSON.stringify({
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        }));
    }
    
    else if(req.method === 'DELETE') {
        res.end(JSON.stringify({ deleted: 1 }));
    }
};


