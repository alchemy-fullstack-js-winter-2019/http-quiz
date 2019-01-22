const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);

    if(req.method === 'GET' && url.pathname.includes('/api/penguins')) {
        console.log('it worked\n\n\n');
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
};

