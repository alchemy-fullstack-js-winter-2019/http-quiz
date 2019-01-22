const { parse } = require('url');


module.exports = (req, res) => {
    const url = parse(req.url, true);

    console.log(url);
    if(req.method === 'GET' && url.pathname.includes('/api/penguins/king')) {
        console.log('catching');
        console.log(req.query.format);
    }
    else if(req.method === 'GET' && url.pathname.includes('/api/penguins')) {
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
    else if(req.method === 'DELETE' && url.pathname.includes('/mistake')) {
        res.end(JSON.stringify({ deleted: true }));
    }
};

