const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);

    if(req.method === 'GET' && url.pathname.includes('/api/penguins')) {
        console.log('it worked');
        res.end(['bernice', 'bernard']);
    }
};

