const { parse } = require('url');

module.exports = (req, res, err) => {
    res.setHeader('Content-Type', 'application/json');
    const url = parse(req.url, true);

    if(req.method === 'GET' && url.pathname === '/api/penguins') {
        if(err) {
            res.statusCode = 404;
            res.end(JSON.stringify(err));
        } else {
            res.end(JSON.stringify(['bernice', 'bernard']));
        }
    }

    else if(req.method === 'GET' && url.pathname.includes('/api/penguins/king?format=')) {
        const queryString = url.pathname.slice(1).split('=')[1];
        console.log(queryString);
        if(queryString === 'full') {
            if(err) {
                res.statusCode = 404;
                res.end(JSON.stringify(err));
            }
            else {
                res.end(JSON.stringify({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                }));
            }
        }
        else if(queryString === 'simple' || queryString === '') {
            if(err) {
                res.statusCode = 404;
                res.end(JSON.stringify(err));
            }
            else {
                res.end(JSON.stringify({
                    name: 'bernice'
                }));
            }
        }
    }

    else if(req.method === 'DELETE' && url.pathname === '/mistake') {
        if(err) {
            res.statusCode = 404;
            res.end(JSON.stringify(err));
        }
        else {
            res.end(JSON.stringify({
                deleted: true
            }));
        }
    }
};
