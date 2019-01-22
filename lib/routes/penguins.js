const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    if(req.method === 'GET' && url.pathname === '/api/penguin/king?format=<simple|full>') {
        const id = url.pathname.slice(1).split('/')[1];
        if(id === 'format=full')
            res.end([{
                'name': 'bernice',
                'description': 'What a penguin!',
                'age': 7
            }]);
        else if(id === 'format=simple') {
            res.end([{
                'name': 'bernice'
            }]);
        }
    }

    else if(req.method === 'GET' && url.pathname === '/api/penguins') {
        res.end(JSON.stringify(['bernard', 'bernice']));
    }

    else if(req.method === 'DELETE' && url.pathname === '/mistake') {
        res.end(JSON.stringify([{ 'deleted': true }]));
    }

};
