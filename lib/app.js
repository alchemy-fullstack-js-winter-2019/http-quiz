const { parse } = require('url');

module.exports = (req, res) => {
    const url  = parse(req.url, true);
    console.log(url);
    res.setHeader('Content-Type', 'application/json');

    if(url.pathname === '/api/penguins') {
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
    else if(url.search === '?format=full'){
        res.end(JSON.stringify({
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        }));
    }
    else if(url.pathname.includes('/api/penguin/')) {
        res.end(JSON.stringify({
            name: 'bernice'
        }));
    }
    else if(url.pathname === '/mistake') {
        res.end(JSON.stringify({ deleted: true }));
    }
    else {
        res.end(JSON.stringify('Error: 404 -- Not Found'));
    }
};
