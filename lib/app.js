const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);
    if(req.method === 'GET' & url.pathname === '/api/penguin/king?format=<simple|full> ') {
        res.end({
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        });
    }
    else if(req.method === 'GET' && url.pathname.includes('/api/penguins')) {
        res.end(['bernice', 'bernard']);
       
    }
    else if(req.method === 'DELETE' && url.pathname.includes('/api/penguins/')) {
        res.end({ deleted: 1 });
    }
};
