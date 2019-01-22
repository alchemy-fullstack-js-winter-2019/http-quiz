const { parse } = require('url');
const penguinRoutes = require('./routes/penguins');


module.exports = (req, res) => {
    const url = parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');

    if(url.pathname.includes('/api/penguins')) {
        return penguinRoutes(req, res);
    }
};
