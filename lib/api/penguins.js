const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    if(url.pathname === '/api/penguins' && req.method === 'GET') {
        res.end(JSON.stringify(['bernice', 'bernard'])); 
    }
    else if(url.pathname === '/api/penguin/king?format=full' && req.method === 'GET') {
        res.end(JSON.stringify({
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        })); 
    } else if(url.pathname === '/api/penguin/king?format=simple' && req.method === 'GET') {
        res.end(JSON.stringify({
            name: 'bernice'
        }));
    } else if(req.method === 'DELETE' && url.pathname.includes('/mistake')) {
        res.end(JSON.stringify({ deleted: true }));
    }
};
