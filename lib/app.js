const penguinRoutes = require('../lib/routes/penguins');
const notFound = require('../lib/routes/notFound');
const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    res.throwErrObj = (err, obj) => {
        err ? res.statusCode = 400 && res.end(JSON.stringify(err))
            : res.end(JSON.stringify(obj));
    };

    res.setHeader('Content-Type', 'application/json');

    if(url.pathname.includes('/penguins')) {
        return penguinRoutes(req, res);
    } else {
        notFound(req, res);
    }
};
